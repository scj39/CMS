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

var mysql = require('mysql'); 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  port: 4000
});

connection.connect(); 

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err; 
  console.log('The solution is: ', rows[0].solution); 
}); 

connection.end(); 