require('dotenv').config();

const express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    flash = require('connect-flash'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    fileUpload = require('express-fileupload');

const app = express();

app.use(express.static(__dirname + '/public'));

// Passport Config
require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').mongoURI;
// 'mongodb://localhost:27017/ncc'
// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/ncc', {
    useNewUrlParser: true,
    useUnifiedTopology: true,  
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Setting ejs view engine
app.set('view engine', 'ejs');

// Set middleware 
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Express Session configuration
app.use(
  session({
    secret: process.env.SESSIONSECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

global.event = '';

// Routes
app.use('/', require('./routes/index.js'));
app.use('/student', require('./routes/student.js'));
app.use('/admin', require('./routes/admin.js'));

// Global Variable 
global.pdfFilename = 'enroll.pdf';

const PORT = process.env.PORT || 4000;

// Port start
app.listen(PORT, () => {
  console.log(`Server running on port #${PORT}`);
});
