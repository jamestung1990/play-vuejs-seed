// `main.js` is the file that sbt-web will use as an entry point
(function(requirejs) {
	'use strict';

	// -- RequireJS config --
	requirejs.config({
		shim : {
			'jsRoutes' : {
				deps : [],
				// it's not a RequireJS module, so we have to tell it what var
				// is returned
				exports : 'jsRoutes'
			},
			'bootstrap' : [ 'jquery' ]
		},
		paths : {
			'requirejs' : [ '../lib/requirejs/require' ],
			'jquery' : [ '../lib/jquery/jquery' ],
			'vue' : [ '../lib/vue/vue' ],
			'bootstrap' : [ '../lib/bootstrap/js/bootstrap' ],
			'jsRoutes' : [ '/jsroutes' ],
			//net utils for loading templates
			'net' : ['./utils/net'],
			'app' : [ './app' ]
		}
	});

	requirejs.onError = function(err) {
		console.log(err);
	};

	// Load the app. This is kept minimal so it doesn't need much updating.
	require([ 'app' ]);
})(requirejs);
