exports.config =
# See http://brunch.io/#documentation for docs.
	conventions:
		vendor: /^(app.custombindings|vendor|bower_components)/
		# ignore all files matching *-development.* in production
		assets: (path) -> /assets[\\/]/.test(path) and not /-development\./.test(path)
	files:
		javascripts:
			joinTo:
				# ignore all files matching *-development.* in production
				'app.js': (path) -> /^app[\\/]/.test(path) and not /-development\./.test(path)
				'vendor.js': /^(bower_components|vendor)/
			order:
				after: [
					'bower_components/remotex-utils/src/rmx-bindings.js',
					'bower_components/remotex-utils/src/rmx-dirty-tracking.js'
				]

		stylesheets:
			joinTo:
				'css/app.css': /^(app|bower_components)/
		templates:
			joinTo: 'app.js'
	plugins:
		uglify:
			output:
				ascii_only: true
				quote_keys: true
				comments: /license|LICENSE|preserve/
		jshint:
			pattern: /^(app|spec)[\\/].*\.js$/
			warnOnly: false
	overrides:
		development:
			conventions:
				vendor: /^(app.custombindings|vendor|bower_components)/
				# Default pattern. Include all files, even *-development.*, in development
				assets: /assets[\\/]/
			files:
				javascripts:
					joinTo:
						# Default pattern. Include all files, even *-development.*, in development
						'app.js': /^app/
						'vendor.js': /^(bower_components|vendor)/
					order:
						after: [
							'bower_components/remotex-utils/src/rmx-bindings.js',
							'bower_components/remotex-utils/src/rmx-dirty-tracking.js'
						]