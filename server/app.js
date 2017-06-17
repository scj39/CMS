const express = require('express')
const app = express()

app.get('/', function (req, res) {
	res.send('Hello World!')
})

var server = app.listen(3600, function(){
	var host = server.address().address; 
	var port = server.address().port; 
	console.log('listening at 3600', host, port); 
}); 


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