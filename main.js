var express = require('express');
var app = express();
//setup some constants
process.env.mongoUrl = "mongodb://localhost:27017/mgo";

var users = require ('./users.js');
var diskio = require ('./diskio.js');
/*
Endpoints for user authentication
*/

app.get('/user/auth',function(req,res){
    var user = req.query.user;
    var pass = req.query.pass;
    users.authUser(user,pass,function(reslt){
        if(reslt)
            res.send(JSON.stringify(reslt));
        else
            res.status(401).send(JSON.stringify(reslt));
    });
});

app.post('/user',function(req,res){
    users.createUser(req.query.user,req.query.pass,function(data){
        if(data == false){
            res.send('Not Created '+JSON.stringify(req.query.user));
        }
        else {
            res.send('Created '+JSON.stringify(data));    
        }
    });
});

/*
Endpoint to retrieve filtered user info, and pagination included
*/
app.get('/users',function(req,res){
    users.getUsers(req,function(data){
       res.send(data);
    });
});
/*
Endpoint for server status
*/
var status = require('./status.js');
app.get('/status',function(req,res){
    status.mongoStatus(function(result){
       res.send(result);
    });
});
/*
Endpoints for file listings
*/
app.get('/listdir',function(req,res){
    var path = "/"+req.query.path;
    diskio.listall(path,function(err,files){
        res.send(JSON.stringify(files));
    });
    //res.send("path = "+path);
});

app.get('/listfiles',function(req,res){
    var path = "/"+req.query.path;
    diskio.listfiles(path,function(files){
        res.send(JSON.stringify(files));
    });
    //res.send("path = "+path);
});
app.listen(3000);
