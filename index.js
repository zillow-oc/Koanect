var koa = require('koa'),
    mount = require('koa-mount'),
    router = require('koa-router'),
    logger = require('koa-logger'),
    koaBody = require('koa-body'),
    app;

app = koa();

/* istanbul ignore if  */
if(process.env.NODE_ENV !== 'test'){  
  app.use(logger());
}
app.use(koaBody());
app.use(router(app));
app.use(mount('/', require('./controllers/default.js').middleware()));
app.use(mount('/service', require('./controllers/service.js').middleware()));

module.exports = app;
