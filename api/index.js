const server = require('./src/app');
const { conn } = require('./src/db');
const port = process.env.PORT || 3001;

const { condIva } = require('./src/db.js');
const { ivaCondData } = require('./src/utils/mocks/ivaCond/ivaCondMock.js');
const { createMockUps } = require('./src/utils/mocks/createMockUps.js');

conn
	.sync({
		force: true
	})
	.then(async () => {
		console.log('DB connected!');
		server.listen(port, () => console.log(`Server listen in port ${port}`));
		await createMockUps(condIva, ivaCondData);
	})
	.catch((e) => console.log('connection failed', e));
