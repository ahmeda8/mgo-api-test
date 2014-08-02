var express = require('express');
var app = express();

var users = require ('./users.js');
app.get('/user/auth',function(req,res){
    var user = req.query.user;
    var pass = req.query.pass;
    users.authUser(user,pass,function(reslt){
        if(reslt)
            res.send("Auth Yay" + JSON.stringify(user));
        else
            res.status(401).send("Auth Nay" + JSON.stringify(user));
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
app.listen(3000);
