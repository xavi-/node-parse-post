var qs = require("querystring");

module.exports = function parse_post(handler) {
	return function(req, res) {
		var body = "";
		req.on("data", function(chunk) {
			body += chunk;
			if(body.length > 1e6) {
				body = null;
				res.writeHead(413, { "Content-Type": "text/plain" }).end("Too much");
				req.connection.destroy();
			}
		});
		req.on("end", function() {
			req.body = qs.parse(queryData);
			handler(req, res);
		});
	};
};
