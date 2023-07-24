import React from 'react';

import { profile } from '../assets'
import '../App.css';
import LetsTalk from '../containers/buttons/LetsTalk';

const Home = () => {

  return (
    <>
      <main className='home absolute w-full -z-10 mt-16'>
        <div className="mx-auto container  grid grid-cols-1 md:grid-cols-3">

          <section className='mt-24 col animate-fade-right animate-once animate-duration-[600ms] animate-ease-linear animate-normal animate-fill-both'>
            <h1 className='text-primary  font-extrabold text-[3rem] w-5 -mb-5'>S.J. CRIPPA</h1>
            <h2 className='text-light mt-12 italic text-2xl w-full font-bold tracking-wider'>Front End Developer</h2>
          </section>

          <section className='mt-24 col animate-fade-right animate-once animate-duration-[600ms] animate-ease-linear animate-normal animate-fill-both'>
            <div className='text-primary text-center'>
              <img className='mt-16 mx-auto w-44 h-44 rounded-full' src={profile} alt="profile-image" />
            </div>
          </section>

          <section className='mt-24 h-screen w-full animate-fade-right animate-once animate-duration-[600ms] animate-ease-linear animate-normal animate-fill-both'>
            <div className='mt-16 text-center'>
              <p className='mx-auto italic text-light font-thin backdrop-blur-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, tempore.</p>
              <LetsTalk />
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
export default Home;