/* istanbul ignore if  */
if(process.env.NODE_ENV !== 'test'){
  require('./lib/logger.js');
}

(function(){
  var app = require('./');

  module.exports = app.listen(3000);
})();
