var notfound = {
	url: ko.observable(''),
	stack: ko.observable(''),
	message: ko.observable(''),
	contextUrl: ko.observable(''),
	contextLine: ko.observable(0),
	contextContent: ko.observable(''),
	header: ko.observable('404 Not Found')
};

notfound.load = function (params) {
	notfound.url(params && params.id ? params.id : '-');
	if( params && params.stack ) {
		notfound.header('Application Error');
		notfound.stack(params.stack);
		var match = params.stack.match(/(http:[^\s]+):(\d+):/);
		notfound.contextUrl(match[1]);
		notfound.contextLine( parseInt( match[2] ) );

		$.ajax(notfound.contextUrl(), { success: function(result) {
			var lines = result.split('\n');
			var content = '';
			for( var i = Math.max( notfound.contextLine()-10, 0); i <= Math.min( notfound.contextLine() + 10, lines.length ); i++ ) {
				content += i + ': ' + lines[i] + '\n';
			}
			notfound.contextContent(content);
		} } );
	}
	if( params && params.message ) {
		notfound.message(params.message);
	}
};

module.exports = notfound;