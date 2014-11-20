var assert = require('assert');
var relative = require('..');

describe('relative-url', function() {

  it('should be OK', function() {
    var from;
    var to;

    from 	= 'http://example.com';
    to = 'http://example.com';
    assert.equal(relative(from, to), '');

    from 	= 'http://example.com/';
    to = 'http://example.com/';
    assert.equal(relative(from, to), '');

    from 	= 'http://example.com/';
    to = 'http://example.com/foo/bar.html';
    assert.equal(relative(from, to), 'foo/bar.html');

    from 	= 'http://example.com/';
    to = 'http://example.com//';
    assert.equal(relative(from, to), '/');

    from 	= 'http://example.com/foo/bar';
    to = 'http://example.com/style.css';
    assert.equal(relative(from, to), '../style.css');

    from 	= 'http://example.com/foo/bar';
    to = 'http://example.com/styles/';
    assert.equal(relative(from, to), '../styles/');

    from 	= 'http://example.com/student/24-world-religions.html';
    to = 'http://example.com/student/24-world-religions/01/01/index.html';
    assert.equal(relative(from, to), '24-world-religions/01/01/index.html');

    from 	= 'http://localhost/strategy/listen-for';
    to = 'http://localhost/strategy/expert-jigsaw';
    assert.equal(relative(from, to), 'expert-jigsaw');

    from 	= 'http://localhost/strategy/listen-for';
    to = 'http://localhost/strategy/creative-brainstorming.html';
    assert.equal(relative(from, to), 'creative-brainstorming.html');

  });

  it('should be OK from WebReference', function() {
    var from = 'http://WebReference.com/html/';
    var to;

    to = 'http://WebReference.com/html/about.html';
    assert.equal(relative(from, to), 'about.html');

    to = 'http://WebReference.com/html/tutorial1/';
    assert.equal(relative(from, to), 'tutorial1/');

    to = 'http://WebReference.com/html/tutorial1/2.html';
    assert.equal(relative(from, to), 'tutorial1/2.html');

    to = 'http://WebReference.com/';
    assert.equal(relative(from, to), '../');

    to = 'http://www.internet.com/';
    assert.equal(relative(from, to), 'http://www.internet.com/');

    to = 'http://WebReference.com/experts/';
    assert.equal(relative(from, to), '../experts/');

    to = 'http://WebReference.com/html/';
    assert.equal(relative(from, to), '');

  });

});
