if(process.env.NODE_ENV !== 'test'){
  require('./logger.js');
}

(function(){
  var app = require('..');

  module.exports = app.listen(3000);
})();
