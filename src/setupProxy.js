const { createProxyMiddleware } = require('http-proxy-middleware');

const env = process.env.REACT_APP_ENVIRONMENT;

const hosts = {
  dev: process.env.REACT_APP_BASE_URL_DEV,
  hlg: process.env.REACT_APP_BASE_URL_HLG,
  prd: process.env.REACT_APP_BASE_URL_PRD,
};

const pathRewrite = function (path, _) {
  return path.replace('/api', '');
};

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/api', {
      target: hosts[env],
      changeOrigin: true,
      pathRewrite,
    }),
  );
};
