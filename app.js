var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

// Xác thực tài khoản
var account = require('./routes/account');

// liveOpen cho live video!

var liveOpen = require('./routes/liveOpen');

// Cài đặt thông tin tài khoản cho Khách

var settingAccountOpenLive = require('./routes/checkSettingAccoutOpenLive');

var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/mevn-stack', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('Connected!'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.set('view engine', 'html');
app.use('/books', express.static(path.join(__dirname, 'dist')));

// ======================================= API ========================================= //

app.use('/api/AuthFacebook', account);

// -------- liveOpen -------//
app.use('/api/liveOpen', liveOpen);

// ------ settingAccountOpenLive --------- //

app.use('/api/settingAccountOpenLive' ,settingAccountOpenLive);
// ======================================= END API ========================================= //
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
  next();
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;
