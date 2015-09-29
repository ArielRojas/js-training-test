/**
 * Created by ArielWagner on 29/09/2015.
 */
var Biografy = require('./biografy.js');
describe('Biografy', function(){
    var biografy;
	beforeEach(function(){
		console.log('beforeEach');
		biografy = new Biografy('carla', 20);
	});
    it('The name should be a string', function(){
		expect(typeof(biografy.nameBiografy)).toEqual('string');
    });
	it('The age should be a number', function(){
		expect(typeof(biografy.ageBiografy)).toEqual('number');
	});
	it('The name should be defined', function(){
		expect(biografy.nameBiografy).toBeDefined();
	});
	it('The age should be defined', function(){
		expect(biografy.ageBiografy).toBeDefined();
	});
	it('The age should be greater than 0', function(){
		expect(biografy.ageBiografy).toBeGreaterThan(0);
	});
});