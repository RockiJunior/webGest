import React from 'react';
import './LogIn.css';

const LogIn = () => {
  return (
		<div className="LogIn">
			<div className="card border-primary mb-3">
				<div className="card-header">Header</div>
				<div className="card-body text-primary">
					
          <h5 className="card-title">Log In</h5>

        <div className="inputs">
          <input type="text" className="input"/>
					<input type="text" className="input" />
        </div>	
					
          <p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</p>
				
        </div>
			</div>
		</div>
	);
};

export default LogIn;
