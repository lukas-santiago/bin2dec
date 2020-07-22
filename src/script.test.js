import script from './script';

describe('Bin2Dec', () => {
	
	it('isBinary', () => {
		expect(script.bin2dec(10.01)).toBe(true);
	});
});
