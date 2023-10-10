import { defineConfig } from '@umijs/max';

export default defineConfig({
  base: '/',
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
    title: '@umijs/max',
  },
  mountElementId: 'sub-app-2',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  qiankun: {
    slave: {
      enable: true,
    },
  },
  npmClient: 'npm',
});
