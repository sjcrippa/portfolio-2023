import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Works from './components/Works';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './containers/navbar/Navbar';

const App = () => {

	return (
		<>
			<div>
				<Router>
					<Navbar />
					<Routes>
						<Route path={'/'} element={<Home />} />
						<Route path={'/home'} element={<Home />} />
						<Route path={'/about'} element={<About />} />
						<Route path={'/works'} element={<Works />} />
						<Route path={'/contact'} element={<Contact />} />
					</Routes>
					<Footer />
				</Router>
			</div>
		</>
	)
}

export default App;