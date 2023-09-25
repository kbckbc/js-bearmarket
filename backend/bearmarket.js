// express
const express = require('express');
app = express();
var flash = require('connect-flash');



// middleware
app.use(express.static('public'));
app.use(express.static('uploads'));

app.use(express.json({limit:'1mb'}));
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(flash());

// passport
const passport = require('./lib/passport.js')(app);

global.debug = true;
global.UPLOAD_FOLDER = 'uploads';
// set null to MONGODB_URI_LOCAL when deploy.
global.MONGODB_URI_LOCAL = 'mongodb+srv://bearmarket:9etpROijcPj0tCFT@cluster0.swhee.mongodb.net/';
//global.MONGODB_URI_LOCAL = 'mongodb://localhost:27017/';
global.port = 3000;
global.MONGODB_NAME = 'bearmarketDB';
global.checkLogin = (req) => {
  if(req.user == undefined) {
    return false;
  }
  else {
    return true;
  }
}

// router
app.use('/auth', require('./routes/auth')(passport));
app.use('/user', require('./routes/user'));
app.use('/item', require('./routes/item'));
app.use('/review', require('./routes/review'));

// start app
const port = process.env.PORT || global.port;
app.listen(port, () => {
    console.log(`listening at ${port}`);
});