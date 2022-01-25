const server = require('./src/app');
const { conn } = require('./src/db');
const port = process.env.PORT || 3001;

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
		console.log('DB connected!');
		server.listen(port, () => console.log(`Server listen in port ${port}`));
		await createMockUps(condIva, ivaCondData);
		await createMockUps(clientes, clientsData);
	})
	.catch((e) => console.log('connection failed', e));
