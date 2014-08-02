/*
file to get server status
*/
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = process.env.mongoUrl;

module.exports.mongoStatus = function(callback){
    MongoClient.connect(mongoUrl,function(err,db){
        if(null == err){
            callback(true);
            return;
        }
        callback(false);
    });
}