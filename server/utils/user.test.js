const expect = require('expect');
const {Users} = require('./user.js');

describe('Users',()=>{
	var users;
	beforeEach(()=>{
		users = new Users();
		users.users = [{
			id:'1',
			name:'A',
			room:'roomA'
		},{
			id:'2',
			name:'B',
			room:'roomB'
		},{
			id:'3',
			name:'C',
			room:'roomA'
		}];
	});

	it('should remove a user',()=>{
		var userId = '1';
		var user = users.removeUser(userId);
		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});

	it('should not remove a user',()=>{
		var userId = '10';
		var user = users.removeUser(userId);
		expect(user).toBeFalsy();
		expect(users.users.length).toBe(3);
	});

	it('should find user',()=>{
		var user = users.getUser('1');
		var expectedUser = {id:'1',name:'A',room:'roomA'};
		expect(user).toEqual(expectedUser);
	});

	it('should not find user',()=>{
		var user = users.getUser('10');
		expect(user).toEqual([]);
	})

	it('should add new user',()=>{
		var users = new Users();
		var user = {
			id:124,
			name:'Kalpit',
			room:'college grp'
		};
		var resUser = users.addUser(user.id,user.name,user.room);
		expect(users.users).toEqual([user]);
	});

	it('should return names for roomA',()=>{
		var names = users.getUserList('roomA');
		var expectedNames = ['A','C'];
		expect(names).toEqual(expectedNames);
	});
});