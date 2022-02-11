import React from 'react';
import './LogIn.css';

const LogIn = () => {
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
									Sign In
								</button>
								<a href="http://localhost:3000/signUp" type="button" className="btn btn-primary btn-sm " data-bs-toggle="button">
									Sign Up
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
