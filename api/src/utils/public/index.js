// var csv = require('node-csv').createParser();
// const fs = require('fs');
// csv.mapFile('./clientes.csv', function(err, data) {
//     console.log(data);
// });

// fs.createReadStream(__dirname+'/clientes.csv').pipe(csv);

var fs = require('fs'); 
var parse = require('node-csv');
var parser = parse({columns: true}, function (err, records) {
	console.log(records);
});

fs.createReadStream(__dirname+'/chart-of-accounts.csv').pipe(parser);