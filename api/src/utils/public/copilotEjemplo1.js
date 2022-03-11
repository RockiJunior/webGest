
conn.query('COPY clientes FROM ').then(function(res) {
	console.log(res);
});

conn.query('COPY productos FROM ').then(function(res) {
	console.log(res);
});

conn.query('COPY rubro FROM ').then(function(res) {
	console.log(res);
});

conn.query('COPY linea FROM ').then(function(res) {
	console.log(res);
});

conn.query('COPY proveedores FROM ').then(function(res) {
	console.log(res);
});

conn.query('COPY unidadMedida FROM ').then(function(res) {
	console.log(res);
});

conn.query('COPY laboratorio FROM ').then(function(res) {
	console.log(res);
});

conn.query('COPY monodroga FROM ').then(function(res) {
	console.log(res);
});

conn.query('COPY psico FROM ').then(function(res) {
	console.log(res);
});

conn.query('COPY condIva FROM ').then(function(res) {
	console.log(res);
});

// fs.readFile('./src/data/clientes.txt', 'utf-8', (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// 	conn.query(data);
// });
// 
// fs.readFile('./src/data/productos.txt', 'utf-8', (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// 	conn.query(data);
// });
// 
// fs.readFile('./src/data/rubro.txt', 'utf-8', (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// 	conn.query(data);


conn.query('COPY clientes FROM ')

server.listen(port, () => {
	console.log(`Servidor corriendo en puerto ${port}`);
});


conn.query('COPY clientes FROM ')

server.listen(port, () => {
	console.log(`Server running on port ${port}`);
});



conn.query('COPY clientes FROM ')

server.listen(port, () => {
	console.log(`server on port ${port}`);
});



conn.query('COPY clientes FROM ').then(() => {
	console.log('Base de datos cargada correctamente');
});

conn.query('COPY productos FROM ').then(() => {
	console.log('Base de datos cargada correctamente');
});

conn.query('COPY proveedores FROM ').then(() => {
	console.log('Base de datos cargada correctamente');
});

conn.query('COPY rubro FROM ').then(() => {
	console.log('Base de datos cargada correctamente');
});

conn.query('COPY linea FROM ').then(() => {
	console.log('Base de datos cargada correctamente');
});

conn.query('COPY unidadMedida FROM ').then(() => {
	console.log('Base de datos cargada correctamente');
});

conn.query('COPY laboratorio FROM ').then(() => {
	console.log('Base de datos cargada correctamente');
});

conn.query('COPY monodroga FROM ').then(() => {
	console.log('Base de datos cargada correctamente');
});

conn.query('COPY psico FROM ').then(() => {
	console.log('Base de datos cargada correctamente');
});

conn.query('COPY condIva FROM ').then(() => {
	console.log('Base de datos cargada correctamente');
});

conn.query('COPY productos_rubro FROM ').then(() => {
	console.log('Base de datos cargada correctamente');
});

conn.query('COPY productos_linea FROM ').then(() => {
	console.log('Base de datos cargada correctamente');
});

conn.query('COPY productos_proveedores FROM ').then(() => {
	console.log('Base de datos cargada correctamente');
});



conn.query('COPY clientes FROM ')

server.listen(port, () => {
	console.log(`server is running on port ${port}`);
});



conn.query('COPY clientes FROM ')
.then(() => {
	server.listen(port, () => {
		console.log(`Server listening on port ${port}`);
	});
})
.catch((err) => {
	console.log(err);
});



conn.query('COPY clientes FROM ')

server.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

// sequelize.sync({ force: true })
// 	.then(() => {
// 		console.log('Base de datos creada');
// 		// fs.readFile('./clientes.csv', 'utf8', (err, data) => {
// 		// 	if (err) throw err;
// 		// 	const lines = data.split('\n');
// 		// 	lines.forEach(line => {
// 		// 		const info = line.split(',');
// 		// 		const [id, nombre, apellido, nroDoc, direccion, telefono, email] = info;
// 		// 		clientes.create({
// 		// 			id: id,
// 		// 			nombre: nombre,
// 		// 			apellido: apellido,
// 		// 			nroDoc: nroDoc,
// 		// 			direccion: direccion,
// 		// 			telefono: telefono,
// 		// 			email: email
// 		// 		});
// 		// 	});
// 		// });
// 		// fs.readFile('./productos.csv', 'utf8', (err, data) => {
// 		// 	if (err) throw err;
// 		// 	const lines = data.split('\n');
// 		// 	lines.forEach(line => {
// 		// 		const info = line.split(',');
// 		// 		const [id, nombre, descripcion, precio, stock, rubroId, lineaId, proveedorId, unidad



conn.query('COPY clientes FROM ')

// sequelize.sync()
// 	.then(() => {
// 		console.log('DB Sync');
// 		server.listen(port, () => {
// 			console.log(`Server on port ${port}`);
// 		});
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});
