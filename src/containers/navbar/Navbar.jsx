import React, { useState } from 'react';

import { arrowLeft, logo, menu } from '../../assets'
import { Icons } from './Icons'
import Items from './Items';

const Navbar = () => {
	const [sideMenu, setSideMenu] = useState(true);

	return (
		<>
			<nav
				className='container mx-auto rounded-lg mt-2 drop-shadow-md hover:drop-shadow-xl flex mx-full items-center'>
				<a href="#">
					<img
						className='hidden md:flex w-12 h-12 rounded-lg transition ease-in-out hover:scale-110 duration-200 bg-transparent ml-5'
						src={logo}
						alt="logo" />
				</a>
				<button
					className='flex md:hidden'
					onClick={() => setSideMenu(!sideMenu)}
				>
					{!sideMenu ? <img className='translate-x-36 ease-in-out duration-500' src={arrowLeft} alt="arrow chevron left" /> : <img src={menu} alt="menu" />}
				</button>
				<Items />
				<div className='w-full flex justify-end mr-'>
					<Icons />
				</div>
			</nav>

			<nav className=
				{`flex sm:items-center sm:px-4 sm:static sm:gap-3 text-light text-sm bg-indigo-500 px-5 mt-2 z-10 h-screen fixed -top-2 transition-color duration-500 ease-in sm:hidden
          ${sideMenu ? '-left-[100%]' : 'fixed left-0 shadow-lg shadow-dark'}
          `}>
				<Items />
				<Icons />
			</nav>
		</>
	)
};

export default Navbar
