describe("the notfound view", function () {
	var notfound = require('viewmodels/notfound');
	it("should be defined", function () {
		expect(notfound).toBeDefined();
	});

	ensureViewModelCanBindToTemplate("notfound");

	describe("when loading without params", function () {
		beforeEach(function () {
			notfound.load();
		});
		it("should set url to nothing", function () {
			expect(notfound.url()).toEqual('-');
		});
	});

	describe("when loading with params", function () {
		var noSuchView = '#/this/was/not/found/at/all';
		beforeEach(function () {
			notfound.load({'id': noSuchView});
		});
		it("should set url to nothing", function () {
			expect(notfound.url()).toEqual(noSuchView);
		});
	});
});
