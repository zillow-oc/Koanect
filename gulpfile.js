require('./lib/logger.js');

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');


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

gulp.task('default', function() {
  console.log('gulping');
});