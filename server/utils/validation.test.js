const expect = require('expect');
const {isValidString} = require('./validation');

describe('isValidString',()=>{
	it('should reject non-string values',()=>{
		var res = isValidString(3231);
		expect(res).toBe(false);
	});

	it('should reject string with only spaces',()=>{
		var res = isValidString('   ');
		expect(res).toBe(false);
	});

	it('should allow string with non-space characters',()=>{
		var res = isValidString(' Kalpit ');
		expect(res).toBe(true);
	});
});