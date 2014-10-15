'use strict';
//middleware to add controllers
var Router = require('koa-router');
var router = new Router();

router.get('/', function*(next){
  this.body = 'you made it to service';
});

router.post('/', function*(next){
 this.body = 'you tried to post to service';
});

router.put('/', function*(next){
 this.body = 'you tried to put to service';
});

router.delete('/', function*(next){
 this.body = 'you tried to delete to service';
});

module.exports = router;