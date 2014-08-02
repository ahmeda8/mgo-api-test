/*
This file contains all queries for a user 
*/
var MongoClient = require('mongodb').MongoClient;
var crypt = require('crypto');
var mongoUrl = 'mongodb://localhost:27017/test';


var encryptPassword = function (password){
    var salt = "90153d786f30ffa7d28f61b7bd6eacff";
    var password = salt + password;
    var hmac = crypt.createHash('sha1');
    hmac.update(password);
    var password = hmac.digest('hex');
    return password;
}

var buildPayload = function(username,password){
    if(password.length > 0)
        password = encryptPassword(password);
    return {user:username,password:password};
};

var verifyPayload = function(payload){
 if(null != payload.user && null != payload.password && payload.user.length > 0 && payload.password.length > 0)
    return true;
 return false;
};

var authUser = function (username,password,callback) {
    var payload = buildPayload(username,password);
    if(!verifyPayload(payload)){
        callback(false);
        return;
    }
        
    MongoClient.connect(mongoUrl,function(err,db){
        var collection = db.collection('users');
        collection.findOne(payload,function(err,user){
            console.log(user);
            db.close();
            if(null != user)
                callback(true);
            else
                callback(false);
        });
    });
};

module.exports.authUser = authUser;

var createUser = function (username, password,callback) {
    MongoClient.connect(mongoUrl,function(err,db){
        var collection = db.collection('users');
        var payload = buildPayload(username,password);
        if(!verifyPayload(payload)) {
            callback(false);
            return;
        }
            
        collection.insert(payload,function(err,docs){
            console.log(err);
            console.log(docs);
            if(null != err){
                callback(false);
                return;
            }
            callback(payload);
            return;
        });
    });
};
module.exports.createUser = createUser;