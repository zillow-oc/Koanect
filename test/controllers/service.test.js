var assert = require('chai').assert,
    request = require('supertest');

describe('Controller', function(){
  describe('Service', function(){
    it('should get from service', function(done){
      request(require('../..').listen())
        .get('/service')
        .expect(200)
        .expect('you made it to service',done);
    })
    it('should post from service', function(done){
      request(require('../..').listen())
        .post('/service')
        .expect(200)
        .expect('you tried to post to service',done);
    })
    it('should put from service', function(done){
      request(require('../..').listen())
        .put('/service')
        .expect(200)
        .expect('you tried to put to service',done);
    })
    it('should delete from service', function(done){
      request(require('../..').listen())
        .delete('/service')
        .expect(200)
        .expect('you tried to delete to service',done);
    })
  })
})