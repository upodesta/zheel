const mkdirp = require('mkdirp');

const made = mkdirp.sync('/tmp/foo/bar/baz');
console.log(`made directories, starting with ${made}`);