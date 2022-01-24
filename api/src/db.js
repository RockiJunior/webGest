require('dotenv').config();
const { Sequelize } = require('sequelize');

// Principal Models...
const productoModel = require('./models/01-principalModels/products.js');
const clientesModel = require('./models/01-principalModels/clients.js');


// Product Subtables...
const rubroModel = require('./models/02-productSubTables/entry.js');
const lineaModel = require('./models/02-productSubTables/line.js');
const proveedoresModel = require('./models/02-productSubTables/suplier.js');
const unidadMedidaModel = require('./models/02-productSubTables/measureUnit.js');
const laboratorioModel = require('./models/02-productSubTables/laboratory.js');
const monodrogaModel = require('./models/02-productSubTables/monodrug.js');
const psicoModel = require('./models/02-productSubTables/psycho.js');

// Client Subtables...
const condIvaModel = require('./models/03-clientsSubTables/ivaCond.js');


const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;

let sequelize =
	process.env.NODE_ENV === 'production'
		? new Sequelize({
				database: DB_NAME,
				dialect: 'postgres',
				host: DB_HOST,
				port: 5432,
				username: DB_USER,
				password: DB_PASSWORD,
				pool: {
					max: 3,
					min: 1,
					idle: 10000
				},
				dialectOptions: {
					ssl: {
						require: true,
						rejectUnauthorized: false
					},
					keepAlive: true
				}
			})
		: new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
				logging: false,
				native: false
			});

// principal models...
productoModel(sequelize);
clientesModel(sequelize);

// product sub tables...
rubroModel(sequelize);
lineaModel(sequelize);
proveedoresModel(sequelize);
unidadMedidaModel(sequelize);
laboratorioModel(sequelize);
monodrogaModel(sequelize);
psicoModel(sequelize);

//clients subtables...
condIvaModel(sequelize);

const {
	productos,
	clientes,
	rubro,
	linea,
	proveedores,
	unidadMedida,
	laboratorio,
	monodroga,
	psico,
	condIva
} = sequelize.models;

// ------ Producto ------ //
productos.belongsTo(rubro);
productos.belongsTo(linea);
productos.belongsTo(proveedores);
productos.belongsTo(unidadMedida);
productos.belongsTo(laboratorio);
productos.belongsTo(monodroga);
productos.belongsTo(psico);

// ------ Clientes ------ //
clientes.belongsTo(condIva);


module.exports = {
	conn: sequelize,
	...sequelize.models
};
