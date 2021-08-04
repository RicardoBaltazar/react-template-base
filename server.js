const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const { createProxyMiddleware } = require('http-proxy-middleware');

class Server {
  constructor() {
    this.express = express();
    this.env = process.env.REACT_APP_ENVIRONMENT;
    this.hosts = {
      dev: process.env.REACT_APP_BASE_URL_DEV,
      hlg: process.env.REACT_APP_BASE_URL_HLG,
      prd: process.env.REACT_APP_BASE_URL_PRD,
    };
    this.port = process.env.PORT || 8080;

    this.middlewares();
    this.routes();
    this.express.listen(this.port, this.serverStarted.bind(this));
  }

  serverStarted() {
    console.log(`[ENV] Running on ${this.env}`);
    console.log(`[HTTP] Listening to ${this.port}`);
  }

  middlewares() {
    this.createProxy();
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(bodyParser.json());
    this.express.use(favicon(__dirname + '/build/favicon.ico'));
    this.express.use(express.static(__dirname));
    this.express.use(express.static(path.join(__dirname, 'build')));
  }

  createProxy() {
    const target = this.hosts[this.env];
    const pathRewrite = this.pathRewrite;
    this.express.use(
      createProxyMiddleware('/api', {
        target,
        changeOrigin: true,
        pathRewrite,
      }),
    );
  }

  routes() {
    this.express.get('/ping', (_, res) =>
      res.status(200).json({ status: 'success', message: 'pong' }),
    );
    this.express.get('/*', (_, res) =>
      res.sendFile(path.join(__dirname, 'build', 'index.html')),
    );
  }

  pathRewrite(path, _) {
    return path.replace('/api', '');
  }
}

new Server();
