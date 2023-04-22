import React from 'react';

import { Header } from './components/Header';
import { Experience } from './components/Experience';
import { Works } from './components/Works';
import { Footer } from './components/Footer';
import { Home } from './components/Home';

const App = () => {

	return (
		<div>
			<Header/>
			<Home/>
			<Experience/>
			<Works/>
			<Footer/>
		</div>
	)
}

export default App;