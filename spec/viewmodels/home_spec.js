describe('the home view',function(){
	'use strict';
	
	var vm = require('viewmodels/home');
	it('should be defined', function(){
		expect(vm).toBeDefined();
	});

	ensureViewModelCanBindToTemplate('home');

	describe('when loading',function(){
		beforeEach(function() {
			vm.load();
		});
		it('should do this',function(){

		});
	});

	describe('when loading with id',function(){
		beforeEach(function() {
			vm.load({id:'1234'});
		});
		it('should do this',function(){

		});
	});
});
