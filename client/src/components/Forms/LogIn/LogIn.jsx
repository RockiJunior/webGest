// Components & Styles
import './LogIn.css';
import TextField from './TextField.jsx';
// Libraries
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
// Actions & reducer
import { logInClient } from '../../../redux/clients/clientsAction.js';

const LogIn = () => {
	// const dispatch = useDispatch();
	const navigate = useNavigate();
	const [ , setUser ] = useState();
	const [ , setClave ] = useState({
		clave: ''
	});
	const [ , setLogeado ] = useState({
		message: '',
		state: false
	});
	const [ acc, setAcc ] = useState(0);

	const initialValues = {
		nombre: '',
		clave: ''
	};
	const MySwal = withReactContent(Swal);

	const validationSchema = Yup.object({
		nombre: Yup.string().required('Ingrese un Nombre'),
		clave: Yup.string().required('Ingrese una Clave')
	});

	const onSubmit = async (body) => {
		const u = await logInClient(body);
		setUser(u.id);
		setClave({ clave: body.clave });
		if (u.message) {
			setLogeado({
				state: false,
				message: u.message
			});
			setAcc(acc + 1);
			MySwal.fire({
				title: 'Error',
				text: u.message,
				icon: 'error',
				confirmButtonText: 'Volver a intentar'
			});
		}
		if (acc >= 3) {
			await MySwal.fire({
				title: 'Error',
				text: 'Ha excedido el numero de intentos',
				icon: 'error',
				confirmButtonText: 'Volver a intentar'
			});
			setAcc(0);
			window.location.reload(false);
		}
		if (u.auth === true) {
			MySwal.fire({
				title: 'Bienvenido',
				text: 'Has iniciado sesion correctamente',
				icon: 'success',
				confirmButtonText: 'Ok'
			});
			localStorage.setItem('userId', u.id);
			localStorage.setItem('token',u.token);
			navigate('/');
		}
	};

	return (
		<div className="LogIn">
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
				{({ errors }) => {
					return (
						<Form>
							<div className="form-group">
								<TextField label="Nombre" name="nombre" type="text" />
								<ErrorMessage
									name="nombre"
									component={() => <div style={{ fontSize: 12, color: 'red' }}>{errors.nombre}</div>}
								/>
							</div>
							<div>
								<TextField label="Clave" name="clave" type="password" />
								<ErrorMessage
									name="clave"
									component={() => <div style={{ fontSize: 12, color: 'red' }}>{errors.clave}</div>}
								/>
							</div>
							<button className="btn btn-success m-1" type="submit">
								Ingresar
							</button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default LogIn;
