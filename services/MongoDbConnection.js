import mongoose from "mongoose";
//let dev_db_url = 'mongodb://saravanan:ZZvuq85iYx1I20n9@jg-shard-00-00-lwzun.mongodb.net:27017,jg-shard-00-01-lwzun.mongodb.net:27017,jg-shard-00-02-lwzun.mongodb.net:27017/test?ssl=true&replicaSet=JG-shard-0&authSource=admin&retryWrites=true';

const mongoConnection = function () {
    /*let dev_db_url = 'mongodb://127.0.0.1:27017';
    const mongoDB = process.env.MONGODB_URI || dev_db_url;
    mongoose.connect(mongoDB);
    mongoose.Promise = global.Promise;l
    var connection = mongoose.connection;
    connection.db("development");
    return connection;*/
};

module.exports = mongoConnection;
