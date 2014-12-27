module.exports = function(grunt) {
	var compression = require('compression');
	var express = require("express");
	grunt.registerTask("server", "static development server", function() {
		var app, webPort, webRoot;
		webPort = grunt.config.get("server.web.port") || 8000;
		webRoot = grunt.config.get("server.root") || "dev";
		
		app = express();
		//app.use(connect.compress());
		app.use(compression({
			threshold: 128
		}));
		app.use(express.static("" + (process.cwd()) + "/" + webRoot));
		app.listen(webPort);
		grunt.log.writeln("Starting express web server in " + webRoot + " on port " + webPort);
		return app;
	});
}