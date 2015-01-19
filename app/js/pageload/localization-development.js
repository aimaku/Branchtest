'use strict';
//
// Only used with BRUNCH_ENV = development
// Allows using the keywords-development.json file to add new keywords
// during mockup / development without pushing them to the API.
// When the app stabilizes and is ready for some production tests,
// the added keywords needs to be pushed to the API.
//
var realGetLocalizationByName = rmx.getLocalizationByName;

rmx.getLocalizationWithDevelopmentOverrides = function(name, locale, callback) {
	realGetLocalizationByName(name, locale, function(apiLocalization) {
		var mapper = rmx.keywordNamesToUnderscoreMapper( function(localizedOverrides) {
			for( var key in localizedOverrides.Keywords ) {
				console.log( 'assets/keywords-development.json provided: ' + key.replace(/_/g, '.'));
				apiLocalization.Keywords[key] = localizedOverrides.Keywords[key];
			}
			callback(apiLocalization);
		} );
		$.getJSON('keywords-development.json', mapper );
	});
};

rmx.getLocalizationByName = rmx.getLocalizationWithDevelopmentOverrides;