var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',()=>{
	it('should generate correct message object',()=>{
		var from = 'Kalpit';
		var text = 'Some msg';
		var message = generateMessage(from,text);

		expect(typeof message.createdAt).toBe('number');
		expect(message).toMatchObject({from,text});
	});
});

describe('generateLocationMessage',()=>{
	it('should generate correct location object',()=>{
		var from = 'Admin';
		var latitude=34;
		var longitude=19;
		var url='https://www.google.com/maps?q=34,19';
		var message = generateLocationMessage(from,latitude,longitude);

		expect(typeof message.createdAt).toBe('number');
		expect(message).toMatchObject({from,url});
	});
});