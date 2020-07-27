import script from './script';

describe('Bin2Dec', () => {
	
	it('isBinary', () => {
		expect(script.ValidateInput('101.01')).toBe(true);
	});
	
	it('isBinary', () => {
		expect(script.ValidateInput('101.0.1')).toBe(false);
	});
	
	it('isBinary', () => {
		expect(script.ValidateInput('101.01')).toBe(false);
	});
});
