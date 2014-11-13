// --------------
/*
  Author: Amin Meyghani
  Date: 11/12/2014
  Description: 
    Simple web server for running tests or taking screenshots.
*/
// --------------
// Requirements
var connect = require("connect"); // middleware
var serveStatic = require("serve-static"); // connect module for serving static files.
var serverIndex = require("serve-index"); // connect mofule for indexing
var pathUtil = require('path') // helper for resolving path.
var http = require('http'); // http server
var help = require('./help'); // helper for logging.

var myserver = {
	listen: function (port, publicPath, fn) {
		port = port || 8228; // default 8228
		publicPath = pathUtil.resolve(publicPath || '.') // serve current directory by default.
		// instantiate middleware
		var app = connect()
			.use(serverIndex(publicPath))
			.use(serveStatic(publicPath));
		// Instantiate server
		var server = http.createServer(app).listen(port, fn);
		help.log("Server running at port " + port + " ...");
		/*
		Useful for logging information:
			server.address()
			server.address().address
			server.address().port
		*/
	}
};
module.exports = myserver;