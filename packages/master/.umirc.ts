import { defineConfig } from '@umijs/max';

export default defineConfig({
  base: '/',
  mountElementId: 'main-app',
  favicons: ['https://portal.azure.com/Content/favicon.ico'],
  antd: {
    theme: {
      token: {
        colorPrimary: '#1677ff',
        colorInfo: '#1677ff',
        borderRadius: 2,
      },
    },
    dark: false,
    compact: true,
    style: 'less',
    appConfig: {},
    styleProvider: {
      hashPriority: 'high',
      legacyTransformer: true,
    },
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Microsoft Azure',
  },
  lessLoader: {
    modifyVars: {
      '@ant-prefix': 'main-ant',
      'primary-color': '#004FD9',
    },
    javascriptEnabled: true,
  },
  routes: [
    {
      name: 'Home',
      icon: 'home',
      path: '/',
      component: './Home',
    },
    {
      name: 'Table',
      icon: 'appstore',
      path: '/table',
      component: './Table',
    },
    {
      name: 'App',
      path: '/app',
      microApp: 'app',
      icon: 'appstore',
      settings: {
        singular: false,
      },
      microAppProps: {
        autoSetLoading: true,
        autoCaptureError: true,
      },
    },
  ],
  qiankun: {
    master: {
      sandbox: true,
      prefetch: true,
    },
  },
  proxy: {},
  mfsu: false,
  npmClient: 'npm',
});
