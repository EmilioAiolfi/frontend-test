'use strict';

import path from 'path';
import http from 'http';
import express from 'express';
import shellArguments from 'shell-arguments';
import favicon from 'serve-favicon';
import compress from 'compression';
import cons from 'consolidate';
import { webpackMiddleware, webpackHotMiddleware } from './webpack/webpackMiddleware';
import routes from './routes';
import CONFIG from './config';

const app = new express();
const isDev = CONFIG.ENV !== 'production';

routes(app);

// set the engines
app.engine('.dust', cons.dust);
app.set('views', __dirname + '/views');
app.set('view engine', 'dust');

// set Favicon
app.use(favicon(path.join(__dirname, 'public', 'static', 'favicon.ico')));

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
