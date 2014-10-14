//middleware to add controllers
var Router = require('koa-router');
var router = new Router();

router.get('/', function*(next){
  this.body = 'hello world';
});

router.post('/', function*(next){
 this.body = 'you tried to post';
});

router.put('/', function*(next){
 this.body = 'you tried to put';
});

router.delete('/', function*(next){
 this.body = 'you tried to delete';
});

module.exports = router;