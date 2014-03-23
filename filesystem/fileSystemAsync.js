var fs = require('fs');
fs.rename('tmp/hello.js', 'tmp/world.txt', function(e1){
	debugger;
	if(e1) throw e1;
	fs.stat('tmp/world.txt', function(err,stats){
		if(err) throw err;
		console.log('stats: ' + JSON.stringify(stats));
	});
});