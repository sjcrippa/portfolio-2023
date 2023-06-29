import React, { useState } from 'react';

import { arrowLeft, github, linkedin, logo, menu } from '../../assets'
import { Icons } from './Icons'
import Items from './Items';

const Navbar = () => {
	const [sideMenu, setSideMenu] = useState(true);

	return (
		<>
			<nav
				className='container fixed mx-auto rounded-lg mt-2 drop-shadow-md hover:drop-shadow-xl flex mx-full items-center'>
				<a href="#">
					<img
						className='hidden md:flex w-12 h-12 rounded-lg transition ease-in-out hover:scale-110 duration-200 bg-transparent ml-5'
						src={logo}
						alt="logo" />
				</a>
				<button
					className='flex md:hidden ml-2'
					onClick={() => setSideMenu(!sideMenu)}
				>
					{!sideMenu ? <img className='translate-x-52 ease-in-out duration-500 w-10 h-10' src={arrowLeft} alt="arrow chevron left" /> : <img className='w-10 h-10' src={menu} alt="menu" />}
				</button>
				<Items />
				<div className='w-full flex justify-end mr-2'>
					<Icons />
				</div>
			</nav>

			<nav className=
				{`flex w-1/2 md:items-center sm:px-4 md:gap-3 text-light text-md bg-indigo-500 px-5 mt-2 z-10 h-screen fixed -top-2 transition-color duration-500 ease-in md:hidden
          ${sideMenu ? '-left-[100%]' : 'fixed left-0 shadow-lg shadow-dark'}
          `}>
				<div className='text-black flex flex-col'>
					<img className='w-16 h-16 mt-5' src={logo} alt="logo" />
					<ul className='flex flex-col ml-2 mt-5 justify-start items-start font-mono font-bold text-lg mx-auto gap-5 '>
						<a
							className='transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' href="#">Home</a>
						<a
							className='transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' href="#">About</a>
						<a
							className='transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' href="#">Works</a>
					</ul>
					<div className='mt-[26rem] w-full translate-x-7'>
						<div className='flex gap-5 justify-center'>
							<span>
								<a
									href="https://github.com/sjcrippa"
									target='_blank'>
									<img
										className='transition ease-in-out hover:scale-110 duration-200 h-10 w-10'
										src={github}
										alt="github" />
								</a>
							</span>
							<span>
								<a
									href="https://www.linkedin.com/in/santiago-julian-crippa/"
									target='_blank'>
									<img
										className='transition ease-in-out hover:scale-110 duration-200 h-10 w-10'
										src={linkedin}
										alt="linkedin" />
								</a>
							</span>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
};

export default Navbar
