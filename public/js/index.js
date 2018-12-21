var socket = io();

socket.on('connect',function(){
	console.log('connected to server');
	socket.emit('createMessage',{
		from:'kalpit  ',
		text:'Hey!! this is Kalpit!'
	});
});

socket.on('disconnect',function(){
	console.log('disconnected from server');
});

socket.on('newMessaage',function(message){
	console.log('New message',message);
});