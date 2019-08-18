require('babel-register')({
    presets: ['es2015']
});
const bluebird = require("bluebird");
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const product = require('./routes/product.route'); // Imports routes for the products

/*var mongoClient = require('mongodb').MongoClient;

mongoClient.connect("mongodb://saravanan:ZZvuq85iYx1I20n9@jg-shard-00-00-lwzun.mongodb.net:27017,jg-shard-00-01-lwzun.mongodb.net:27017,jg-shard-00-02-lwzun.mongodb.net:27017/test?ssl=true&replicaSet=JG-shard-0&authSource=admin&retryWrites=true", function (err, db) {
    console.log("Connected correctly to server");
    if (err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
    } else {
        console.log('Successfully connected' + db);
        db.close();
    }
});*/

/*let dev_db_url = 'mongodb://127.0.0.1:27017';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var connection = mongoose.connection;
connection.db("development");*/

const mongoose = require('mongoose');
let dev_db_url = 'mongodb://127.0.0.1:27017/development';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = bluebird;
global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/*var mongoConnection = require('./services/MongoDbConnection');
const db = mongoConnection();*/
/*dbo.createCollection("students", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
});*/
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', product);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
//mongodb+srv://saravanan:ZZvuq85iYx1I20n9@jg-lwzun.mongodb.net/test?retryWrites=true
//mongodb://saravanan:ZZvuq85iYx1I20n9@jg-shard-00-00-lwzun.mongodb.net:27017,jg-shard-00-01-lwzun.mongodb.net:27017,jg-shard-00-02-lwzun.mongodb.net:27017/test?ssl=true&replicaSet=JG-shard-0&authSource=admin&retryWrites=true
//app.listen(3000, ()=> console.log("Example App Listening on port 3000"));
module.exports = app;
