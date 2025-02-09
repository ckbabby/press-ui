const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { traverseFolder, writeFileSync, readFileSync } = require('t-comm');

const { insertDocChangeLog } = require('./change-log');
const PRE_RELEASE_VERSION = /\d+\.\d+\.\d+-(\w+).\d+/;

const TO_DELETE_FILES = ['demo.vue', 'README.md', 'README.en-US.md', 'demo-helper/', 'tests'];
const INNER_PATH_MAP = {
  SOURCE_PACKAGES: 'src/packages',
  TARGET_PACKAGES: 'log/packages',
  PACKAGE_JSON: './src/packages/package.json',
  ROOT_PACKAGE_JSON: './package.json',
  SOURCE_README: '../../README.md',
  TARGET_README: './log/packages/README.md',
};
const PROJECT_ROOT = path.resolve(__dirname, '../../../../');
const PROJECT_ROOT_PKG = path.resolve(PROJECT_ROOT, './package.json');

const PATH_MAP = Object.keys(INNER_PATH_MAP).reduce((acc, item) => {
  acc[item] = path.resolve(__dirname, '../../', INNER_PATH_MAP[item]);
  return acc;
}, {});

function getPreReleaseTag(version) {
  const match = version.match(PRE_RELEASE_VERSION);
  if (!match || !match[1]) return '';
  return match[1];
}

function getNewVersion() {
  const pkg = JSON.parse(fs.readFileSync(PATH_MAP.ROOT_PACKAGE_JSON, {
    encoding: 'utf-8',
  }));
  return pkg.version;
}

function changeVersion() {
  const newVersion = getNewVersion();

  const pkg = JSON.parse(fs.readFileSync(PATH_MAP.PACKAGE_JSON, {
    encoding: 'utf-8',
  }));
  console.log(`[VERSION] The new version is ${newVersion}`);
  pkg.version = newVersion;

  fs.writeFileSync(PATH_MAP.PACKAGE_JSON, JSON.stringify(pkg, null, 2), {
    encoding: 'utf-8',
  });
  return newVersion;
}
function release(version) {
  const publishTag = getPreReleaseTag(version);
  let publishScript = 'npm publish';
  if (publishTag) {
    publishScript = `npm publish --tag ${publishTag}`;
  }

  execSync(`cd ${PATH_MAP.TARGET_PACKAGES} && ${publishScript}`, {
    stdio: 'inherit',
  });
}

function changeRootVersion(version) {
  const content = readFileSync(PROJECT_ROOT_PKG, true);
  content.version = version;
  writeFileSync(PROJECT_ROOT_PKG, content, true);
}

function genPureReleaseDir() {
  const dir = path.dirname(PATH_MAP.TARGET_PACKAGES);
  execSync(`rm -rf ${PATH_MAP.TARGET_PACKAGES} \
  && cp -r ${PATH_MAP.SOURCE_PACKAGES} ${dir} \
  && rm -rf ${PATH_MAP.TARGET_PACKAGES}/node_modules`);


  traverseFolder((file) => {
    // const name = path.basename(file);
    const reg = new RegExp(`press-[\\w-]+/(${TO_DELETE_FILES.join('|')})`);
    if (reg.test(file)) {
      fs.unlinkSync(file);
      console.log('已删除文件: ', file);
    }
  }, PATH_MAP.TARGET_PACKAGES);
}

function copyReadme() {
  const content = fs.readFileSync(PATH_MAP.SOURCE_README, {
    encoding: 'utf-8',
  });

  fs.writeFileSync(PATH_MAP.TARGET_README, content, { encoding: 'utf-8' });
}


function main() {
  const version = changeVersion();
  changeRootVersion(version);

  genPureReleaseDir();
  copyReadme();
  insertDocChangeLog();

  execSync('git add .', {
    stdio: 'inherit',
    cwd: PROJECT_ROOT,
  });

  release(version);
}


main();

