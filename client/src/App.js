import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home.jsx';
import LogIn from './components/Forms/LogIn/LogIn.jsx';
import SignUp from './components/Forms/SignUp/SignUp.jsx';
import Navbar from './components/Navbar/Navbar';
import Tab from './components/Tabs/Tab.jsx';
const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Navbar />} />
				<Route exact path="/home" element={<Home />} />
				<Route exact path="/logIn" element={<LogIn />} />
				<Route exact path="/signUp" element={<SignUp />} />
				<Route exact path="/tab" element={<Tab />} />
			</Routes>
		</div>
	);
};

export default App;
