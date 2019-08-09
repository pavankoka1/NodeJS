var stuff = require('./stuff.js');
var fs = require('fs');
var http = require('http');

var i = 1;

var timer = setInterval(function(){
    console.log(`value = ${i}`);
    i++;
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 5000);

console.log(stuff.count([1, 2, 3]));
console.log(stuff.counter([1, 2, 3]));

console.log(__dirname);
console.log(__filename);

var read = fs.readFileSync('readMe.txt');
fs.writeFileSync('writeMe.txt', read);

http.createServer(function(req, res){
    console.log(req.url);
    res.end('Hey buddy');
}).listen(8080);