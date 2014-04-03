(function() {

var config = {};

config.node = {
	environment: 'node',
	rootPath: '../',
	tests: [
		'test/travis-sauce-test.js'
	]
};

config.browser = {
	environment: 'browser',
	autoRun: false,
	rootPath: '../',
	resources: [
//		//'**', ** is busted in buster
//		'*.js',
//		'lib/**/*.js',
//		'monitor/**/*.js',
//		'node/**/*.js',
//		'unfold/**/*.js',
		'node_modules/curl/**/*.js',
		'node_modules/poly/**/*.js'
	],
	libs: [
		'test/curl-config.js',
		'node_modules/curl/src/curl.js'
	],
	sources: [
		// loaded as resources
	],
	tests: [
		'test/travis-sauce-test.js',
		'test/run.js'
	]
};

if(typeof module != 'undefined') {
	module.exports = config;
}

})();
