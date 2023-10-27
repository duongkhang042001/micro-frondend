export default {
  dev: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
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
