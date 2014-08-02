/*
this is for mongo init script creation
password encryption utility SHA-1
*/
var crypt = require('crypto');
var encryptPassword = function (password){
    var salt = "90153d786f30ffa7d28f61b7bd6eacff";
    var password = salt + password;
    var hmac = crypt.createHash('sha1');
    hmac.update(password);
    var password = hmac.digest('hex');
    return password;
}

var password = process.argv[2];

console.log(encryptPassword(password));