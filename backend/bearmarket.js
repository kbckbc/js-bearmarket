//////////////////
// Setting global variables start
//////////////////
global.debug = true;
// when test on Local, enable this variable
if(global.debug) {
  global.PORT = 3000;
  global.DB_URI = 'mongodb://0.0.0.0:27017/';
  global.DB_NAME = 'bearmarketDB';
}
// when deploy, comments this variable and set DB_URI on fly.io Server
else {
  global.PORT = 3000;
  global.DB_URI = proccess.env.DB_URI;
  global.DB_NAME = 'bearmarketDB';
}
global.UPLOAD_FOLDER = 'uploads';

global.checkLogin = (req) => {
  if(req.user == undefined) {
    return false;
  }
  else {
    return true;
  }
}
//////////////////
// Setting global variables end
//////////////////


// middleware

// express
const express = require('express');
app = express();
var flash = require('connect-flash');
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(express.json({limit:'1mb'}));
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(flash());


// passport
const passport = require('./lib/passport.js')(app);

// router
app.use('/auth', require('./routes/auth')(passport));
app.use('/user', require('./routes/user'));
app.use('/item', require('./routes/item'));
app.use('/review', require('./routes/review'));

// start app
const port = global.PORT;
app.listen(port, () => {
    console.log(`listening at ${port}`);
});