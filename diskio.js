/*
list for files
*/
var fs = require ('fs');

var listall = function (path,callback){
    fs.readdir(path,callback);
};

module.exports.listall = listall;

var onlyFiles = function (path,callback){
    fs.readdir(path,function(err,files){
        var fileList = [];
        files.forEach(function(item,index){
            fs.stat(path+"/"+item,function(err,stats){
                if(null == err){
                    if(stats.isFile()){
                        fileList.push(item);
                    }
                    else{
                        console.error("Read Files err-"+err);
                    }
                    if(++index >= files.length){
                        callback(fileList);
                        return;
                    }
                }
            });
        });
    });
};
module.exports.listfiles = onlyFiles;