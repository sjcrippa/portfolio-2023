import React from 'react';

import { profile } from '../assets'
import '../App.css';
import LetsTalk from '../containers/buttons/LetsTalk';

const Home = () => {

  return (
    <>
      <main className='home absolute w-full -z-10 mt-16'>
        <h1 className='mt-5 text-light bg-gradient-to-r from-primary shadow-lg  shadow-primary to-secondary font-extrabold text-[3rem] w-80 mx-auto rounded text-center -mb-16'>
          S.J. CRIPPA
        </h1>
        <div className="mx-auto container grid grid-cols-1 md:grid-cols-3">

          <section className='mt-40 col animate-fade-right animate-once animate-duration-[600ms] animate-ease-linear animate-normal animate-fill-both'>
            <h2 className='text-light mt-12 italic text-2xl w-full font-bold tracking-wider text-center'>Front End Developer</h2>
          </section>

          <section className='mt-24 animate-fade-right animate-once animate-duration-[600ms] animate-ease-linear animate-normal animate-fill-both'>
            <div className='text-primary text-center'>
              <img className='mt-16 px-2 rounded-full' src={profile} alt="profile-image" />
            </div>
          </section>

          <section className='mt-28 h-screen w-full animate-fade-right animate-once animate-duration-[600ms] animate-ease-linear animate-normal animate-fill-both'>
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