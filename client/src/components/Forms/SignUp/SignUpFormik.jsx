// Libraries
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
// Components & Styles
import TextField from './TextField';
// actions & reducers
import { createClient, getClientById } from '../../../redux/clients/clientsAction.js';
// -------------------------------------------------

const SignUpFormik = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [ user, setUser ] = useState({
		validate: '',
		noValidate: ''
	});
	const [ , setSuccess ] = useState(false);
	const MySwal = withReactContent(Swal);
	const initialValues = {
		nombre: '',
		apellido: '',
		clave: '',
		confirmarClave: '',
		email: ''
	};
	const validate = Yup.object({
		nombre: Yup.string()
		.max(40, 'Se admite nombre y apellido hasta 40 caracteres')
		.required('Ingrese un Nombre, y un Apellido (coloque solo el primer nombre)'),

		email: Yup.string()
		.email('El Email ingresado es Invalido ')
		.required('Ingrese un Email'),
		
		clave: Yup.string()
		.min(6, 'La Contraseña debe tener al menos 6 caracteres')
		.required('Ingrese una Clave'),
		
		confirmarClave: Yup.string()
			.oneOf([ Yup.ref('clave'), null ], 'Las Claves no coinciden')
			.required('Confirme la Clave')
	});
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={async (body, { resetForm }) => {
				const user = await createClient(body);
				if (user.client) {
					dispatch(getClientById(user.client.id));
					setSuccess(true);
					setTimeout(() => {
						setSuccess(false);
					}, 2000);
				} else {
					setUser({
						noValidate: user.message
					});
					setTimeout(() => {
						setUser({
							noValidate: ''
						});
					}, 1500);
				}
				setTimeout(async () => {
					await MySwal.fire({
						title: <strong>Usuario Creado</strong>,
						html: <i>Clikeá Ok</i>,
						icon: 'success'
					});
					navigate('/LogIn', { state: { user: user.client } });
					resetForm({});
				}, 1000);
			}}
			validationSchema={validate}
		>
			{({ errors }) => (
				<div>
					<h1 className="my-4 font-weight-bold-display-4">Registrate</h1>
					<Form>
						<div>
							<TextField label="Nombre y Apellido" name="nombre" type="text" />
							<ErrorMessage
								name="nombre"
								component={() => <div style={{ fontSize: 12, color: 'red' }}>{errors.nombre}</div>}
							/>
						</div>
						<div>
							<TextField label="Email" name="email" type="email" />
							<ErrorMessage
								name="email"
								component={() => <div style={{ fontSize: 12, color: 'red' }}>{errors.email}</div>}
							/>
						</div>
						<div>
							<TextField label="Clave" name="clave" type="password" />
							<ErrorMessage
								name="clave"
								component={() => <div style={{ fontSize: 12, color: 'red' }}>{errors.clave}</div>}
							/>
						</div>
						<div>
							<TextField label="Repita la Clave" name="confirmarClave" type="password" />
							<ErrorMessage
								name="confirmarClave"
								component={() => (
									<div style={{ fontSize: 12, color: 'red' }}>{errors.confirmarClave}</div>
								)}
							/>
						</div>
						<button className="btn btn-success m-1" type="submit">
							Registrarse
						</button>
						<button className="btn btn-danger m-1" type="reset">
							Borrar Formulario
						</button>
						<div>
							{user && <p>{user.noValidate}</p>}
							
						</div>
					</Form>
				</div>
			)}
		</Formik>
	);
};

export default SignUpFormik;
