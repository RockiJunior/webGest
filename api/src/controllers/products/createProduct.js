const { productos, rubro, linea, proveedor, unidadMedida, laboratorio, monodroga, psico } = require('../../db.js');

const createProduct = async (req, res, next) => {
	const {
		nombre,
		codBarra1,
		codBarra2,
		codBarra3,
		codBarra4,
		rubroId,
		lineaId,
		proveedorId,
		unidadMedidaId,
		laboratorioId,
		monodrogaId,
		psicoId
	} = req.body;
	try {
		const findRubro = await rubro.findById(rubroId);
		const findLinea = await linea.findById(lineaId);
		const findProveedor = await proveedor.findById(proveedorId);
		const findUnidadMedida = await unidadMedida.findById(unidadMedidaId);
		const findLaboratorio = await laboratorio.findById(laboratorioId);
		const findMonodroga = await monodroga.findById(monodrogaId);
		const findPsico = await psico.findById(psicoId);

		const producto = await productos.create({
			nombre,
			codBarra1,
			codBarra2,
			codBarra3,
			codBarra4,
			rubroId: findRubro.id,
			lineaId: findLinea.id,
			proveedorId: findProveedor.id,
			unidadMedidaId: findUnidadMedida.id,
			laboratorioId: findLaboratorio.id,
			monodrogaId: findMonodroga.id,
			psicoId: findPsico.id,
		});
		res.status(201).json({
			message: 'Producto creado correctamente',
			producto
		});
	} catch (err) {
		console.log(err);
	}
};
