import { RequestConfig, RunTimeLayoutConfig } from '@umijs/max';
import { useState } from 'react';

export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Windows_logo_-_2021.svg/1024px-Windows_logo_-_2021.svg.png',
    menu: {
      locale: false,
    },
    layout: 'mix',
    childrenRender: (children: any, props: any) => {
      console.log({ children, props });
      return children;
    },
  };
};

export const useQiankunStateForSlave = () => {
  const [globalState, setGlobalState] = useState<any>({
    slogan: 'Hello MicroFrontend',
  });

  return {
    globalState,
    setGlobalState,
  };
};

export const qiankun = {
  apps: [
    {
      entry: '//localhost:8001',
      name: 'app',
      props: {
        token: 'XXXXXX',
      },
    },
  ],
};

export const request: RequestConfig = {
  timeout: 1000,
  errorConfig: {
    errorHandler() {
      console.log('error handler');
    },
    errorThrower() {
      console.log('error rhrower');
    },
  },
  requestInterceptors: [],
  responseInterceptors: [],
};
