// const fs = require('fs');
var csv = require('node-csv').createParser();

csv.mapFile('./clientes.csv', (err, data) => {
    for(let item of data) {
        
    }
});


// fs.createReadStream(__dirname+'/clientes.csv').pipe(csv);
