var url = require('url');
var path = require('path');

module.exports = function(from, to) {

  var
    parsedTo = url.parse(to),
    parsedFrom   = url.parse(from)
  ;

  //check protocol is the same
  if (parsedTo.protocol !== parsedFrom.protocol) { //TODO handle protocol relative URLs
    return to;
  }

  //check host is the same
  if (parsedTo.host !== parsedFrom.host) {
    return to;
  }

  //check port is the same
  if (parsedTo.port !== parsedFrom.port) {
    return to;
  }

  var
    toPath    = parsedTo.pathname,
    fromPath  = parsedFrom.pathname
  ;

  if (fromPath.substr(fromPath.length-1) === '/') {
    fromPath = fromPath.substr(0, fromPath.length-1); //we've got a directory path
  } else {
    fromPath = path.dirname(fromPath); //we've got a file path - compare from the parent directory
  }

  //split paths
  var
    toParts   = toPath.split('/'),
    fromParts = fromPath.split('/')
  ;
  toParts.shift(); fromParts.shift(); //ignore the first forward slash

  var index = 0;

  //ignore the common parts
  for (; index < toParts.length && index < fromParts.length && fromParts[index] === toParts[index]; ++index);

  var diff = fromParts.slice(index).map(function() {
    return '..'
  }).join('/');

  var added = toParts.slice(index).join('/');

  if (diff.length) {
    return diff+'/'+added;
  } else {
    return added;
  }

};