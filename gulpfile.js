

require('./lib/logger.js');
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    mocha = require('gulp-spawn-mocha');


gulp.task('dev', function () {
  nodemon({
    script: './server.js',
    env: {NODE_ENV: 'dev'},
    ignore: [,'public/*', 'dist/*'],
    nodeArgs: ['--harmony']
  }).on('change', [], function(e){
  }).on('restart', function(e){
    console.log('Restart Trigger: ',e);
  });
});

gulp.task('test', function(){
  return test().on('error', function (e) {
    throw e;
  });
});

gulp.task('cover', function(){
  return test(true).on('error', function (e) {
    throw e;
  });
});

gulp.task('default', function() {
  require('./server.js');
});

function test(cover){
  return gulp.src(['test/*.test.js'], {read: false})
    .pipe(mocha({
      R: 'spec',
      c: true,
      harmony: true,
      env: {'NODE_ENV': 'test'},
      istanbul: cover
  })).on('error', console.warn.bind(console));
}