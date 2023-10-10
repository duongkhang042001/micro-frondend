import { RunTimeLayoutConfig } from '@umijs/max';

export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    logo: false,
    menu: {
      locale: false,
    },
    layout: 'top',
    splitMenus: true,
    appList: [
      {
        title: 'Microsoft Azure',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
        desc: 'Microsoft Azure',
        url: '/',
        target: '_blank',
      },
    ],
    headerRender(props, defaultDom) {
      return defaultDom;
    },
  };
};

export const qiankun = {
  apps: [
    {
      name: 'app',
      entry: '//localhost:8001',
    },
    {
      name: 'app2',
      entry: '//localhost:8002',
    },
  ],
};
