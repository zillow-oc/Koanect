Koanect
=======
[![Build Status](https://travis-ci.org/zillow-oc/Koanect.svg?branch=master&style=flat-square)](https://travis-ci.org/zillow-oc/Koanect)
[![Test Coverage](https://codeclimate.com/github/zillow-oc/Koanect/badges/coverage.svg?style=flat-square)](https://codeclimate.com/github/zillow-oc/Koanect)
[![Dependencies](https://david-dm.org/zillow-oc/koanect.svg?style=flat-square)](https://david-dm.org/zillow-oc/koanect)
[![Code Climate](https://codeclimate.com/github/zillow-oc/Koanect/badges/gpa.svg?style=flat-square)](https://codeclimate.com/github/zillow-oc/Koanect)

A bare minimum nodejs framework based on Koa that allows your 
web app to run standalone or to be packaged and included in other web apps.  


## Philosophy

Koanect assumes nothing about how you want to build your app architecture
, but gives a convention to easily divide and conquer your web framework.  
Additionally, if your usage is low you can bundle the services up and include 
it in a single deployable app.

Koanect will __not dictate how to write business logic__.

Don't expect a single option to automatically do magic for your app.

Feel free to create suggestions!

##Koanect Controllers

There is no strict standard on where your controllers should live but in the
case of this project, they are located under [controllers](controllers/).  
To add routes to this instance of Koanect project mount them in [index](index.js).

```javascript
  //this is your apps middleware
  app = koa();
  app.use(logger());
  app.use(koaBody());
  app.use(router(app));

  //this is your apps controllers
  app.use(mount('/', require('./controllers/default.js').middleware()));
  app.use(mount('/service', require('./controllers/service.js').middleware()));
```


##Connecting to other Koanect applications

Koanect allows you to easily include other Koanect projects with 
no strings attached.  From [server.js](server.js), include the additional
koanect apps you'd like to run via this server.

```javascript
  //my local app
  var app = require('./index.js')

  //my included koanect app
  app.use(mount('/', require('myPackagedApp')));

  server = app.listen(3000);
```

##Development

Koanect adds some niceties to make your life easier while developing including
Nodemon and gulp.  To get this app up and running you can run the following
in your terminal:

`npm start`


Navigate to your "localhost:3000" and you should be greeted.

For development gulp and nodemon are included so you don't have to restart
your server for every change, yay!  Shut down your server and input in your terminal:

`npm run-script dev`


Run tests:

`npm test`

Test Coverage:

`npm run-script cover`


##Additional Features/Tools

- [Body Parsing](https://www.npmjs.org/package/koa-body)
  - Koa-Body is included and your request will be included in ctx.request.body
- [Logging](lib/logger.js) 
  - Koanect uses a simple logger that overrides default logging
  - Provides a time stamp, log levels, and colors
  - Environment switch for writing to different locations


## Roadmap

None for now, ping me if there are some things that would be cool to add

