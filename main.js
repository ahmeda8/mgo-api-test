var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//setup some constants
process.env.mongoUrl = "mongodb://localhost:27017/mgo";

var users = require ('./users.js');
var diskio = require ('./diskio.js');
/*
Endpoints for user authentication
*/

var getApiEndpoint =function(path){
    var apiBaseUrlPattern = "/api/:version";
    return apiBaseUrlPattern+"/"+path
};

app.get(getApiEndpoint("user/auth"),function(req,res){
    var user = req.query.user;
    var pass = req.query.pass;
    var version = req.param('version');
    console.log("API Version="+version);
    users.authUser(user,pass,function(reslt){
        if(reslt)
            res.send(JSON.stringify(reslt));
        else
            res.status(401).send(JSON.stringify(reslt));
    });
});

app.post(getApiEndpoint('user/auth'),function(req,res){
    var user = req.body.user;
    var pass = req.body.pass;
    var version = req.param('version');
    console.log("API Version="+version);
    
    users.authUser(user,pass,function(reslt){
        if(reslt)
            res.send(JSON.stringify(reslt));
        else
            res.status(401).send(JSON.stringify(reslt));
    });
});

app.post(getApiEndpoint('user'),function(req,res){
    var version = req.param('version');
    console.log("API Version="+version);
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
app.get(getApiEndpoint('users'),function(req,res){
    var version = req.param('version');
    console.log("API Version="+version);
    users.getUsers(req,function(data){
       res.send(data);
    });
});
/*
Endpoint for server status
*/
var status = require('./status.js');
app.get(getApiEndpoint('status'),function(req,res){
    var version = req.param('version');
    console.log("API Version="+version);
    status.mongoStatus(function(result){
       res.send(result);
    });
});
/*
Endpoints for file listings
*/
app.get(getApiEndpoint('listdir'),function(req,res){
    var version = req.param('version');
    console.log("API Version="+version);
    var path = "/"+req.query.path;
    diskio.listall(path,function(err,files){
        res.send(JSON.stringify(files));
    });
    //res.send("path = "+path);
});

app.get(getApiEndpoint('listfiles'),function(req,res){
    var version = req.param('version');
    console.log("API Version="+version);
    var path = "/"+req.query.path;
    diskio.listfiles(path,function(files){
        res.send(JSON.stringify(files));
    });
    //res.send("path = "+path);
});

var port = Number(process.env.PORT || 5000);
app.listen(port);
