var express = require('express');
var app = express();
	
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
	response.sendFile('index');
});

app.listen(8080, () =>{
	console.log('Server is running!');
});
