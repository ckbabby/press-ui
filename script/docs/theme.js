const fs = require('fs');
const THEME_VAR_PATH = './src/packages/common/style/var.scss';
const THEME_CONFIG_PATH = './docs/.vuepress/components/theme-default.json';

const REPLACE_REG = /\$[\w-]+/g;

function getDefaultThemeConfig() {
  const css = fs.readFileSync(THEME_VAR_PATH, {
    encoding: 'utf-8',
  });

  const list = css.split('\n').filter((item) => {
    if (!item) return false;
    if (/^\/\//.test(item)) return false;
    if (item.indexOf(':') <= -1) return false;
    return true;
  });

  const varMap = list.reduce((acc, item) => {
    // 不用split(':')，防止值中有冒号，比如 https:
    const idx = item.indexOf(':');
    const temp = [item.slice(0, idx), item.slice(idx + 1)];
    acc[temp[0].trim()] = temp[1]
      .trim()
      .replace(/;[\s\S]*/g, '')
      // 去掉多余的双引号
      .replace(/"/g, '');
    return acc;
  }, {});

  Object.keys(varMap).map((key) => {
    const value = varMap[key];
    varMap[key] = value.replace(REPLACE_REG, a => findRealValue(varMap, a));
  });
  fs.writeFileSync(THEME_CONFIG_PATH, JSON.stringify(varMap, null, 2), {
    encoding: 'utf-8',
  });
}

function findRealValue(map, value) {
  const tValue = map[value];
  if (tValue.startsWith('$')) {
    return findRealValue(map, tValue);
  }
  return tValue;
}

getDefaultThemeConfig();
