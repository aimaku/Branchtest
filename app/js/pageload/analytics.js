
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-581095-3']);
_gaq.push(['_trackPageview']);
(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


function saveTime(e, jqxhr, settings) {
	settings.startTime = new Date().getTime();
}

function registerTime(e, jqxhr, settings) {
	_gaq.push(['_trackEvent', 'AjaxResponseTime', settings.type,  settings.url.split('?')[0] ,(new Date().getTime() - settings.startTime)]);
}

$(document).ajaxSend(saveTime);
$(document).ajaxComplete(registerTime);

$(document).ajaxError(function(event, xhr, settings) {
	_gaq.push(['_trackEvent', 'AjaxError', xhr.status || xhr.statusText || 'Unknown', settings.url.split('?')[0],(new Date().getTime() - settings.startTime)]);
});
window.onerror = function  (errorMessage, url, linenumber) {
	_gaq.push(['_trackEvent', 'UnhandledError', errorMessage || 'Unknown', url + ' line: '+linenumber]);
	return true;
};

module.exports = {};
