var assert = require("chai").assert,
    koa = require('koa'),
    mount = require('koa-mount'),
    request = require('supertest'),
    app;


describe('Server', function(){
  // beforeEach(function(done){
  //   app = require('../index.js');
  //   app.listen(3000);
  //   return done();
  // })
  it('should say the server is ok', function(done){

    request(require('..').listen())
      .get('/')
      .expect(200)
      .expect('hello world',done);
  })
  describe('Mounted App', function(){
    beforeEach(function(done){
      app = require('..');
      app.use(mount('/mounted', require('..')));
      done();
    })
    it('should start server ok', function(done){
      request(app.listen())
        .get('/')
        .expect(200)
        .expect('hello world',done);
    })
    it('should nav to embedded app', function(done){
      request(app.listen())
        .get('/mounted/')
        .expect(200)
        .expect('hello world',done);
    })
    it('should nav to nested route in embedded app', function(done){
      request(app.listen())
        .get('/mounted/service')
        .expect(200)
        .expect('you made it to service',done);
    })
  })
})