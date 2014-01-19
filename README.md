# parse-post

A function that wraps ordinary request handler and automatically parse posts.  It also protects again nuke requests.

Currently works with node.js v0.10.1+.

## Examples

```javascript
var parse_post = require("parse-post");

var route = beeline.route({
	"/": function(req, res) {
		"GET": function(req, res) { /*** Get Code ***/ },
		"POST": parse_post(function(req, res) {
			// req.body has parse post request
		})
	}
});

http.createServer(route).listen(8014);
```

## Getting parse-post

The easiest way to get parse-post is with [npm](http://npmjs.org/):

    npm install parse-post

Alternatively you can clone this git repository:

    git clone git://github.com/xavi-/node-parse-post.git


## Developed by
* Xavi Ramirez

## License
This project is released under [The MIT License](http://www.opensource.org/licenses/mit-license.php).
