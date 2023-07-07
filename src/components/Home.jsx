import React from 'react';

import {profile} from '../assets'
import '../App.css';

const Home = () => {
	return (
		<>
			<main className='w-full absolute -z-10 mx-auto mt-24'>
				<div className="container h-screen mb-5 px-5 grid grid-cols-1 md:grid-cols-2">
					<section className='col border border-primary'>
						<h1 className='text-primary px-24 py-10 text-[3rem] w-5 -mb-5'>S.J. CRIPPA</h1>
						<div className='text-primary text-center'>
							<h2 className='italic text-2xl w-full tracking-wider'>Front End Developer</h2>
							<img className='mt-10 mx-auto w-44 h-44 rounded-full' src={profile} alt="profile-image" />
							<p className='mt-16 px-16 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam optio assumenda. Odit laudantium suscipit nostrum facere soluta maiores veritatis?</p>
						</div>
						<div className='px-52 mt-24 w-full'>
							<ul className='flex gap-10 text-primary'>
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