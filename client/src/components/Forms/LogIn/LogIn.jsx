// Components & Styles
import './LogIn.css';
import React, {useState} from 'react';
// Libraries
import {useDispatch} from 'react-redux';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {useNavigate} from 'react-router-dom';
// Actions & reducer
import {getClientId} from '../../../redux/clients/clientsAction.js';


const LogIn = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const [logged, setLogged] = useState({
		message: '',
		state: false
	});

	const [user, setUser] = useState();
	const [acc, setAcc] = useState(0);



	return (
		<div className="LogIn">
			<div className="containerLogIn">
				<div className="card border-primary mb-3">
					<div className="card-body text-primary">
						<h5 className="card-title">WEB GEST</h5>
						<div className="containerInput">
							<input type="text" placeholder="Nombre" className="inputLogin" />
							<input type="text" placeholder="Clave" className="inputLogin" />
							<div className="containerButtons">
								<button type="button" className="btn btn-success btn-xl m-2 w-1 custom">
									Ingresar
								</button>
								<a
									href="http://localhost:3000/signUp"
									type="button"
									className="btn btn-primary btn-sm "
									data-bs-toggle="button"
								>
									Registrarse
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
