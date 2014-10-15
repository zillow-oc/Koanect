var assert = require('chai').assert,
    request = require('supertest');

describe('Controller', function(){
  describe('Default', function(){
    it('should get from default', function(done){
      request(require('../..').listen())
        .get('/')
        .expect(200)
        .expect('hello world',done);
    })
    it('should post from default', function(done){
      request(require('../..').listen())
        .post('/')
        .expect(200)
        .expect('you tried to post',done);
    })
    it('should put from default', function(done){
      request(require('../..').listen())
        .put('/')
        .expect(200)
        .expect('you tried to put',done);
    })
    it('should delete from default', function(done){
      request(require('../..').listen())
        .delete('/')
        .expect(200)
        .expect('you tried to delete',done);
    })
  })
})