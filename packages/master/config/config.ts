import { defineConfig } from '@umijs/max';
import proxy from './proxy.config';
import routes from './routes.config';

const { REACT_APP_ENV = 'dev' } = process.env;

export default defineConfig({
  base: '/',
  publicPath: '/public/',
  mountElementId: 'main-app',
  favicons: ['https://portal.azure.com/Content/favicon.ico'],
  antd: {
    theme: {
      token: {
        colorPrimary: '#00B96B',
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
      '@ant-prefix': 'main-app',
      'primary-color': '#004FD9',
    },
    javascriptEnabled: true,
  },
  locale: {
    // default: 'en-US',
    // antd: true,
    // title: false,
    // baseNavigator: true,
    // baseSeparator: '-',
    // useLocalStorage: true,
  },
  qiankun: {
    master: {
      // sandbox: true,
      // prefetch: true,
      // defaultErrorBoundary: '@/defaultErrorBoundary',
      // defaultLoader: '',
    },
  },
  tailwindcss: {},
  mfsu: false,
  npmClient: 'npm',
  routes: routes,
  proxy: proxy[REACT_APP_ENV as keyof typeof proxy],
});
