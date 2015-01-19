'use strict';

var module = module || { export: {} };

var ensureViewModelCanBindToTemplate = function( templateName ) {
	it('should be able to bind to template', function() {
		var vm = require('viewmodels/'+ templateName);
		var div = document.createElement('div');
		jQuery(div).html(require('templates/' + templateName));
		ko.applyBindings( vm, div );
		ko.cleanNode( div );
	});
};

var specialKeys = {
	8: "backspace", 9: "tab", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause",
	20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home",
	37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del", 
	96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7",
	104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111 : "/", 
	112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 
	120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 191: "/", 224: "meta"
};

var specialKeyNameToCode = function( keyName ) {
	for( var key in specialKeys ) {
		if( keyName == specialKeys[key] ) return key;
	}
};

var triggerKeypress = function( key ) {
	var eventObj;
	var keys = key.split('+');
	var shiftKey = keys[0] === 'shift';
	var ctrlKey = keys[0] === 'ctrl';
	var keyName = (shiftKey || ctrlKey ? keys[1] : keys[0]);
	var keyCode = specialKeyNameToCode( keyName ) || keyName.toUpperCase().charCodeAt(0);

	if(document.createEventObject)
	{
		eventObj = document.createEventObject();
		eventObj.keyCode = keyCode;
		eventObj.shiftKey = shiftKey;
		eventObj.ctrlKey = ctrlKey;
		window.document.fireEvent("onkeyup", eventObj);
	}
	else if(document.createEvent)
	{
		eventObj = document.createEvent("Events");
		eventObj.initEvent("keyup", true, true);
		eventObj.which = keyCode;
		eventObj.shiftKey = shiftKey;
		eventObj.ctrlKey = ctrlKey;
		window.document.dispatchEvent(eventObj);
	}
};

var captureHash = function(action) {
	// Use this helper to maintain the current hash to avoid side-effects in tests executed after 
	// the test that calls code which triggers a hash change.
	// This is handled by reseting the hash to the original value when the capture started.
	// 
	// Example:
	// var capture = captureHash(); 
	// vm.navigate();
	// expect(capture()).toEqual('#/navigated/to');
	var oldHash = window.location.hash;

	return function() {
		var newHash = window.location.hash;
		window.location.hash = oldHash;
		return newHash;
	};
};
