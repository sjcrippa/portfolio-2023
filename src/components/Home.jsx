import React from 'react';

import {profile} from '../assets'
import '../App.css';

const Home = () => {
	return (
		<>
			<main className='home absolute w-full -z-10 mt-16'>
				<div className="mx-auto container  grid grid-cols-1 md:grid-cols-2">
					<section className='mt-10 col border-primary'>
						<h1 className='text-primary font-extrabold px-24 text-[3rem] w-5 -mb-5'>S.J. CRIPPA</h1>
						<div className='text-primary text-center'>
							<h2 className='text-light mt-12 italic text-2xl w-full font-bold tracking-wider'>Front End Developer</h2>
							<img className='mt-10 mx-auto w-44 h-44 rounded-full' src={profile} alt="profile-image" />
							<p className='mt-12 px-16 mx-auto italic text-primary font-thin'>Certified in Web Develop and focus in clean and modern desings. Are you looking for nice, fun and 'mobile first' web sites? You're in the right place!</p>
							<button className='flex mx-16 md:translate-x-2 p-2 rounded-md mt-5 bg-gradient-to-r from-secondary shadow shadow-primary/80  to-primary text-dark font-extrabold hover:scale-105 transition-all duration-150'>LET'S TALK</button>
						</div>
						<div className='md:px-52 mt-5 w-full'>
							<ul className='flex gap-10 text-primary justify-center'>
								<li>ICON</li>
								<li>ICON</li>
								<li>ICON</li>
							</ul>
						</div>
					</section>
					<section className='col border border-primary'>

					</section>
				</div>
			</main>
		</>
	)
}
export default Home;