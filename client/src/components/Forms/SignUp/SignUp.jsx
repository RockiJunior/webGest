// Libraries
import React from 'react';
import './SignUp';
// Components & styles
import rocketImg from '../../../assets/rocket.png';
import SignUpFormik from './SignUpFormik.jsx';

const SignUp = () => {
	return (
		<div>
			<div className="container mt-3">
				<div className="row">
					<div className="col-md-5">
						<SignUpFormik/>
					</div>
					<div className="col-md-7">
						<img className="img-fluid w-100" src={rocketImg} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
