const express = require('express')
const app = express()

app.get('/', function (req, res) {
	res.send('Hello World!')
})

var server = app.listen(3660, function(){
	var host = server.address().address; 
	var port = server.address().port; 
	console.log('listening at 3660', host, port); 
}); 
