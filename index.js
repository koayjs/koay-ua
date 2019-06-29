'use strict';

const { os } = require('celia/dist/browser');

os.middleware = function (app) {
  app.context.parseUserAgent = function (userAgent) {
    return os(userAgent);
  };
  return app;
};

module.exports = os;
