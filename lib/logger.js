//this overrides the default winston loggers
//so winston can be used universall
var winston = require('winston'),
    util = require('util');

winston.remove(winston.transports.Console);

module.exports = {
  middleware: function(req, res, next){
    next();
  }
};

var config = {
//custom levels are broken
levels: {
    silly: 0,
    debug: 2,
    verbose: 3,
    info: 4,
    warn: 5,
    error: 6
  },
  colors: {
    silly: 'magenta',
    debug: 'blue',
    verbose: 'cyan',
    info: 'green',
    warn: 'yellow',
    error: 'red'
  }
};

var logger;
// Override the built-in console methods with winston hooks
console.log('NODE_ENV:', process.env.NODE_ENV);
switch((process.env.NODE_ENV || '').toLowerCase()){
  case 'dev':
    logger = new (winston.Logger)({
    transports:[
    new (winston.transports.Console)( {
      handleExceptions: false,
      json: false,
      colorize: true,
      timestamp: true,
      level: 'debug'
      })
    ],
      //custom levels are broken
      //levels: config.levels,
      colors: config.colors
    });
    break;
  case 'production':
    // Don't set up the logger overrides
    logger = new (winston.Logger)({
      transports:[
    new (winston.transports.Console)( {
      handleExceptions: false,
      json: false,
      colorize: false,
      timestamp: true,
      level: 'silly'
    }),
    new (winston.transports.File)( {
      filename:'/path/to/your/log/file/log.log',
      handleExceptions: false,
      json: false,
      colorize: false,
      timestamp: true,
      level: 'silly'
    })
    ],
      //custom levels are broken
      //levels: config.levels,
      colors: config.colors
    });
    break;
  case 'stage':
    logger = new (winston.Logger)({
    transports:[
    new (winston.transports.Console)( {
      handleExceptions: false,
      json: false,
      colorize: true,
      timestamp: true,
      level: 'silly'
    }),
    new (winston.transports.File)( {
      filename: '/path/to/your/log/file/log.log',
      handleExceptions: false,
      json: false,
      colorize: true,
      timestamp: true,
      level: 'silly'
    })
    ],
      //custom levels are broken
      //levels: config.levels,
      colors: config.colors
    });
    break;
  default:
  logger = new (winston.Logger)({
    transports:[
    new (winston.transports.Console)( {
      handleExceptions: true,
      json: false,
      colorize: true,
      timestamp: true,
      level: 'silly'
    })
    ],
      //custom levels are broken
      //levels: config.levels,
      colors: config.colors
    });
  break;
}

function formatArgs(args){
  return [util.format.apply(util, Array.prototype.slice.call(args))];
}

console.silly = function(){
  logger.silly.apply(logger, formatArgs(arguments));
};
console.log = function(){
  logger.verbose.apply(logger, formatArgs(arguments));
};
console.info = function(){
  logger.info.apply(logger, formatArgs(arguments));
};
console.warn = function(){
  logger.warn.apply(logger, formatArgs(arguments));
};
console.debug = function(){
  logger.debug.apply(logger, formatArgs(arguments));
};
console.error = function(){
  logger.error.apply(logger, formatArgs(arguments));
};
