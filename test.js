




exports.UserAuth = function(test){
    process.env.mongoUrl = (process.env.MONGOHQ_URL)? process.env.MONGOHQ_URL :"mongodb://localhost:27017/mgo";
    var users = require('./users.js');
    
    test.expect(4);
    var user ="estersolomon@terrago.com";
    var password = "12345";
    users.authUser(user,password,function(data){
        test.ok(data,"User with correct Auth")});
    
    var password = "123123";
    users.authUser(user,password,function(data){
        test.equal(data,false,"User with Incorrect password")});
    

    var user ="ester@terrago.com";
    var password = "12345";
    users.authUser(user,password,function(data){
        test.equal(data,false,"User with Incorrect username")});
    
    
    var user ="ester@terrago.com";
    var password = "12345asd";
    users.authUser(user,password,function(data){
        test.equal(data,false,"User with Incorrect username and password");
        test.done();
    });
};

exports.Users = function(test){
    process.env.mongoUrl = (process.env.MONGOHQ_URL)? process.env.MONGOHQ_URL :"mongodb://localhost:27017/mgo";
    var users = require('./users.js');
    var req = {query:{}};
    test.expect(1);
    users.getUsers(req,function(data){
      test.ok((data.length > 0),"Test more than 1 user exists");
      test.done();
    });
};

exports.Files = function(test){
    var diskio = require('./diskio.js');
    test.expect(2);
    var path = "./";
    diskio.listall(path,function(err,files){
        test.ok((files.length > 0),"Test more than 1 file exists");
      
    });
    diskio.listall(path,function(err,files){
        test.equal((files.length <= 0),false,"Test less than 1 file exists");
      test.done();
    });
};

/*
exports.DBStatus = function(test){
    process.env.mongoUrl = (process.env.MONGOHQ_URL)? process.env.MONGOHQ_URL :"mongodb://localhost:27017/mgo";
    var status = require('./status.js');
    test.expect(1);
    status.mongoStatus(function(status){
        test.ok(status,"Test correct connection params");
        test.done();
    });
};
*/