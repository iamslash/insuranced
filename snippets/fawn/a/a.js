var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
fs.readFileAsync('/Users/iamslash/tmp/a.txt')
	.then(function(fileData){
		return fs.mkdirAsync('/Users/iamslash/tmp/a');
	})
	.then(function(){
		return fs.writeFileAsync('/Users/iamslash/tmp/b.txt');
	})