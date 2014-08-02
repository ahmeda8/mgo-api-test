/*
This file contains all queries for a user 
*/
var MongoClient = require('mongodb').MongoClient;
var crypt = require('crypto');
var mongoUrl = process.env.mongoUrl;


var encryptPassword = function (password){
    var salt = "90153d786f30ffa7d28f61b7bd6eacff";
    var password = salt + password;
    var hmac = crypt.createHash('sha1');
    hmac.update(password);
    var password = hmac.digest('hex');
    return password;
}

var buildPayload = function(username,password){
    if(null != password && password.length > 0)
        password = encryptPassword(password);        
    return {user_id:username,password:password};
};

var verifyPayload = function(payload){
 if(null != payload.user_id && null != payload.password && payload.user_id.length > 0 && payload.password.length > 0)
    return true;
 return false;
};

var buildFilter = function (req){
    var filter = {};
    if(null != req.query.gender)
        filter.gender = req.query.gender;
    if(null != req.query.age){
        filter.age = parseInt(req.query.age);
    }
        
    return filter;
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
            //console.log(user);
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
                db.close();
                callback(false);
                return;
            }
            db.close();
            callback(payload);
            return;
        });
    });
};
module.exports.createUser = createUser;

var getUsers = function(req,callback){
    var limit = (null != req.query.limit) ? req.query.limit : 10;
    var page = (null != req.query.page) ? --req.query.page : 0;
    var skip = limit * page;
    MongoClient.connect(mongoUrl,function(err,db){
        var collection = db.collection('profile');
        var filter = buildFilter(req);
        console.log(filter);
        collection.find(filter,{"limit":limit,"skip":skip}).toArray(function(err,data){
            db.close();
           callback(data);
        });
    });
};
module.exports.getUsers = getUsers;