const server = require('./src/app');
const { conn } = require('./src/db');
const port = process.env.PORT || 3001;

const fs = require('fs'); // llamamos al filesystem para utilizarlo en la base
// de datos de sequelize, y despues poder incorporar un archivo de datos 
// (.txt/csv) a la base de datos

// tables
const { condIva, clientes } = require('./src/db.js');
// Data Tables
const { ivaCondData } = require('./src/utils/mocks/ivaCond/ivaCondMock.js');
const { clientsData } = require('./src/utils/mocks/clients/clientsMock.js');
// create MockUp Function
const { createMockUps } = require('./src/utils/mocks/createMockUps.js');

conn
	.sync({
		force: true
	})
	.then(async () => {
		// fs.copyFile();
		console.log('DB connected!');
		server.listen(port, () => console.log(`Server listen in port ${port}`));
		await createMockUps(condIva, ivaCondData);
		await createMockUps(clientes, clientsData);
	})
	.catch((e) => console.log('connection failed', e));
