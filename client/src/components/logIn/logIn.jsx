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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
