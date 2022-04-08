// node-csv -----------------------------------------------
// const fs = require('fs');
// var csv = require('node-csv').createParser();
//  csv.mapFile('./productos.csv', (err, data) => {
//     console.log(data);
// });
// fs.createReadStream(__dirname+'/clientes.csv').pipe(csv);

// csv-parser ---------------------------------------------

// const csv = require('csv-parser');
// const fs = require('fs');
// fs
// 	.createReadStream('clientes.csv')
// 	.pipe(csv())
// 	.on('data', (row) => {
// 		console.log(row);
// 	})
// 	.on('end', () => {
// 		console.log('CSV file successfully processed');
// 	});

// fast-csv ---------------------------------------------
// const fastcsv = require('fast-csv');

// const fs = require('fs');
// const ws = fs.createWriteStream("clientes.csv");

// fastcsv
//   .write(data, { headers: true })
//   .pipe(ws);