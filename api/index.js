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
const {hashClients} = require('./src/utils/mocks/clients/hashClients.js');


conn
	.sync({
		force: true
	})
	.then(async () => {
		//aqui debe cargarse la informacion de los clientes, productos, etc. pasados al .csv
		conn
			.query(
				"COPY clientes from 'C:/Users/GABRIEL/Desktop/Carpeta Personal/proyectosHdc/webGest/api/src/utils/public/clientes.csv' DELIMITER ',' CSV HEADER"
			)
			.then(() => console.log('client data upload successfully'));
			console.log('DB connected!');
		server.listen(port, () => console.log(`Server listen in port ${port}`));
		await createMockUps(condIva, ivaCondData);
		await hashClients(clientes, clientsData);
	})
	.catch((e) => console.log('connection failed', e));
