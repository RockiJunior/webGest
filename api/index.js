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
const { hashClients } = require('./src/utils/mocks/clients/hashClients.js');

conn
	.sync({
		force: true
	})
	.then(async() => {
		const allClients = await clientes.findAll();
		if (allClients.length === 0) {
			await createMockUps(condIva, ivaCondData);
			await hashClients(clientes, clientsData)
			console.log('MockUp Data Uploaded!')
			await conn.query(
				"COPY clientes from 'C:/Users/GABRIEL/Desktop/Carpeta Personal/proyectosHdc/webGest/api/src/utils/public/clientes.csv' DELIMITER ',' CSV HEADER"
			).then(() => {
				console.log('client data upload successfully');
			}).catch((err) => console.log(err));
		}
		server.listen(port, () => {
			console.log('DB connected!!!');
			console.log(`Server is running on port ${port}`)
		})
	})
	.catch((e) => console.log('connection failed', e));
