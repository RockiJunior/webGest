const server = require('./src/app');
const { conn } = require('./src/db');
const port = process.env.PORT || 3001;

const {
	//modelos
} = require('./src/db.js');

conn
	.sync({ force: true })
	.then(async () => {
		console.log('DB connected!');
		server.listen(port, () => console.log(`Server listen in port ${port}`));
	})
	.catch((e) => console.log('connection failed', e));
