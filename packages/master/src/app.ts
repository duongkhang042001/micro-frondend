import { RequestConfig, RunTimeLayoutConfig } from '@umijs/max';

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
  };
};

export const qiankun = {
  apps: [
    {
      entry: '//localhost:8001',
      name: 'app',
    },
  ],
};

export const request: RequestConfig = {
  timeout: 1000,
  errorConfig: {
    errorHandler() {},
    errorThrower() {},
  },
  requestInterceptors: [],
  responseInterceptors: [],
};
