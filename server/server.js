const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();

var server = http.createServer(app);

app.use(express.static(publicPath));

var io = socketIO(server);

io.on('connection',(socket)=>{
	console.log('New User Connected!!');

	socket.emit('newMessage ',{
		from:'Kalpit',
		text:'Hey!! How are You??',
		createAt:123
	});  

	socket.on('createMessage',(message)=>{
		console.log('createMessage',message);
	});

	socket.on('disconnect',()=>{
		console.log('Disconnected from client!!');
	});
});

server.listen(port,()=>{
	console.log(`Server is up on port ${port}`);
});
   