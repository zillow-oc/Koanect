if(process.env.NODE_ENV !== 'test'){
  require('./logger.js');
}
var server;

(function(){
  var app = require('./index.js');

  module.exports = app.listen(3000);
})();
