# url.relative

Get a relative path from one URL to another URL.

## Installation

	npm install --save url.relative
	
## Example

	var relative = require('url.relative');
    
    from 	= 'http://example.com/foo/bar';
    to 	    = 'http://example.com/style.css';
    
    relative(from, to) // ==> '../style.css'