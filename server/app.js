const express = require('express'); 
const app = express(); 
var http = require('http');

app.get('/', function (req, res) {
	res.send('Hello World!')
})

var server = http.createServer(app).listen(3600, '127.0.0.1');

//note that the mysql database is actually at localhost://4000
var mysql = require('mysql'); 
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'password',
	port: 4000
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
}); 

//gracefully ends the connection
connection.end(); 