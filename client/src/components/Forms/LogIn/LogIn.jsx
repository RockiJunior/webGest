import './LogIn.css';
import React from 'react';
// import { useDispatch } from 'react-redux';
// import { Form, Field, ErrorMessage, Formik } from 'formik';
// import { getClients } from '../../../redux/clients/clientsAction.js';
// import { useNavigate } from 'react-router-dom';

const LogIn = () => {
	// const dispatch = useDispatch();
	// const [ logIn, setLogIn ] = useState({
	// 	message: '',
	// 	state: false
	// });

	// const [ user, setUser ] = useState();
	// const [ mail, setMail ] = useState({
	// 	mail: ''
	// });
	// const [ forgot, setForgot ] = useState({
	// 	message: '',
	// 	auth: false
	// });
	// const [ acc, setAcc ] = useState(0);
	// const history = useNavigate();

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
