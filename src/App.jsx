import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Works from './components/Works';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './containers/navbar/Navbar';
import './App.css';

const App = () => {

	return (
		<>
			<div className=''>
				<Router>

					<Navbar />

					<Routes>
						<Route path={'/'} element={<Home />} />
						<Route path={'/home'} element={<Home />} />
						<Route path={'/about'} element={<About />} />
						<Route path={'/works'} element={<Works />} />
						<Route path={'/contact'} element={<Contact />} />
					</Routes>

					{/* <About /> */}

				</Router>
			</div>
		</>
	)
}

export default App;