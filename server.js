require('./lib/logger.js');

var koa = require('koa'),
    mount = require('koa-mount'),
    router = require('koa-router'),
    logger = require('koa-logger'),
    koaBody = require('koa-body')(),
    server;

(function(){
  var app = require('./index.js')

  server = app.listen(8080);
})();
