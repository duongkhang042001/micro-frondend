export default {
  dev: {
    '/v1/': {
      target: 'http://10.151.130.102/',
      changeOrigin: true,
    },
  },
  test: {
    '/api/': {
      target: 'https://proapi.azurewebsites.net',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  prod: {
    '/v1/': {
      target: 'http://localhost',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};

// localhost:8000/api/** -> http://jsonplaceholder.typicode.com/
