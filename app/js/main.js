window.require.list().filter(function(path){ return path.indexOf('js/pageload/') !== -1;}).forEach(function(path) { require(path);});

var router = new Sammy('#main', function() {

	this.use(RemoteX_Login);
	this.use(rmx.sammy.feedbackPlugin( '<app name here>' ));
	this.use(rmx.sammy.knockoutViewsPlugin());
	
	// Override this function so that Sammy doesn't mess with forms
	this._checkFormSubmission = function() {
		return (false);
	};
});

module.exports = router;
