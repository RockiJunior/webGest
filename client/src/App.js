import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home.jsx';
import LogIn from './components/Forms/LogIn/LogIn.jsx';
import SignUp from './components/Forms/SignUp/SignUp.jsx';

const App = () => {
	return (
		<div className="App">
			<Routes>
				{/* <Route path="/" element={<Navbar />} /> */}
				<Route path="/home" element={<Home />} />
				<Route path="/logIn" element={<LogIn />} />
				<Route path="/signUp" element={<SignUp />} />
			</Routes>
		</div>
	);
};

export default App;
