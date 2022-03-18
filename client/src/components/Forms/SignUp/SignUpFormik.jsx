// Libraries
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
// Components & Styles
import TextField from './TextField';
// -------------------------------------------------
const SignUpFormik = () => {
	const validate = Yup.object({
		nombre: Yup.string()
		.max(15, 'Se admite un nombre hasta 15 caracteres')
		.required('Ingrese un Nombre'),
		apellido: Yup.string()
		.max(25, 'Se admite un Apellido hasta 25 caracteres')
		.required('Ingrese un Apellido'),
		email: Yup.string()
		.email('El Email ingresado es Invalido ')
		.required('Ingrese un Email'),
		clave: Yup.string()
		.min(6, 'La Contraseña debe tener al menos 6 caracteres')
		.required('Ingrese una Clave'),
		confirmarClave: Yup.string()
		.oneOf([Yup.ref('clave'), null], 'Las Claves no coinciden')
		.required('Confirme la Clave'),
	})
	
	return (
		<Formik
			initialValues={{
				nombre: '',
				apellido: '',
				clave: '',
				confirmarClave: '',
				email: ''
			}}
			validationSchema={validate}
		>
			{(formik) => (
				<div>
					{console.log(formik)}
					<h1 className="my-4 font-weight-bold-display-4">Registrate</h1>
					<Form>
						<TextField label="Nombre" name="nombre" type="text"/>
						<TextField label="Apellido" name="apellido" type="text"/>
						<TextField label="Email" name="email" type="email"/>
						<TextField label="Clave" name="clave" type="password"/>
						<TextField label="Repita la Clave" name="confirmarClave" type="password"/>
						<button className="btn btn-success mt-1 p-3" type="submit">Registrarse</button>
						<button className="btn btn-danger mt-1 ml-1 p-3" type="reset">Borrar Formulario</button>
					</Form>
				</div>
			)}
		</Formik>
	);
};

export default SignUpFormik;
