import {
  showPopupCell,
  showPicker,
} from 'src/packages/press-popup-cell/demo-helper/helper';


export const local = {
  pageSize: 100,
  total: 2000,
  delay: 200,
};

const PICKER_NUMBER_LIST = Array.from({ length: 5 })
  .map((_, i) => 10 ** i)
  .reduce((acc: Array<any>, item) => {
    for (let i = 1;i < 10;i++) {
      acc.push(item * i);
    }

    return acc;
  }, [])
  .map(item => ({
    label: item,
    value: item,
  }));

const PICKER_NUMBER_MAP = PICKER_NUMBER_LIST.reduce((acc, item) => {
  acc[item.value] = item.label;
  return acc;
}, {});

const PICKER_DELAY_LIST = Array.from({ length: 100 }).map((_, i) => ({
  label: `${(i + 1) * 100}ms`,
  value: (i + 1) * 100,
}));

const PICKER_DELAY_MAP = PICKER_DELAY_LIST.reduce((acc, item) => {
  acc[item.value] = item.label;
  return acc;
}, {});


export function showCustomPopup({ context, callback }) {
  showPopupCell({
    title: '自定义设置',
    closeIcon: true,
    cellList: [
      {
        label: '每次加载数量',
        value: PICKER_NUMBER_MAP[local.pageSize],
        click: ({ context: popupContext }) => {
          popupContext.closeDialog();

          showPicker({
            title: '每次加载数量',
            closeIcon: true,
            list: PICKER_NUMBER_LIST,
            current: {
              value: local.pageSize,
            },
          }).then(({ item }: any) => {
            local.pageSize = item.value;
            context.onGTip('设置成功');

            if (typeof callback.changePageSize === 'function') {
              callback.changePageSize.call(context, item.value);
            }
          })
            .catch(() => {

            });
        },
      },
      {
        label: '列表总数',
        value: PICKER_NUMBER_MAP[local.total],
        click: ({ context: popupContext }) => {
          popupContext.closeDialog();

          showPicker({
            title: '列表总数',
            closeIcon: true,
            list: PICKER_NUMBER_LIST,
            current: {
              value: local.total,
            },
          }).then(({ item }: any) => {
            local.total = item.value;
            context.onGTip('设置成功');

            if (typeof callback.changeTotal === 'function') {
              callback.changeTotal.call(context, item.value);
            }
          })
            .catch(() => {

            });
        },
      },
      {
        label: '数据请求时间',
        value: PICKER_DELAY_MAP[local.delay],
        click: ({ context: popupContext }) => {
          popupContext.closeDialog();

          showPicker({
            title: '数据请求时间',
            closeIcon: true,
            list: PICKER_DELAY_LIST,
            current: {
              value: local.delay,
            },
          }).then(({ item }: any) => {
            local.delay = item.value;
            context.onGTip('设置成功');

            if (typeof callback.changeDelay === 'function') {
              callback.changeDelay.call(context, item.value);
            }
          })
            .catch(() => {

            });
        },
      },
    ],
  }).then((resp: any) => {
    const { context: popupContext = {} } = resp || {};
    popupContext.closeDialog();
  })
    .catch((err) => {
      const { context: popupContext = {} } = err || {};
      console.log('[showCustomPopup] err', err);
      popupContext.closeDialog();
    });
}