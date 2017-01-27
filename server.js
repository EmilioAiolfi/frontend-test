'use strict';

import express from 'express';
import http from 'http';
import path from 'path';
import shellArguments from 'shell-arguments';
import compress from 'compression';
import cons from 'consolidate';
import {
  webpackMiddleware,
  webpackHotMiddleware
} from './webpack/webpackMiddleware';

import CONFIG from "./config";

global.CONFIG = CONFIG;

const app = new express();
const isDev = CONFIG.ENV === 'development';

// global.CONFIG = require("./config");
require('./routes')(app);

// set the engines
app.engine('.dust', cons.dust);
app.set('views', __dirname + '/views');
app.set('view engine', 'dust');

// Set Static
app.use(
  '/static',
  express.static(
    path.join(__dirname, 'public', 'static')
  )
);

// Set Webpack
app.use(webpackMiddleware);
if (isDev) {
  app.use(webpackHotMiddleware);
}

app.use(compress());

if (shellArguments.port && /\d/g.test(shellArguments.port)) {
  CONFIG.PORT = shellArguments.port;
}

if (shellArguments.encoding) {
  CONFIG.VIEW.ENCODING = shellArguments.encoding;
}

if (shellArguments.extension) {
  CONFIG.VIEW.EXTENSION = shellArguments.extension;
}

http
  .createServer(app)
  .listen(
    CONFIG.PORT,
    function () {
      console.log('Application running on port: ' + CONFIG.PORT);
    }
  );
