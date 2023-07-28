import React from 'react';

import Rive from '@rive-app/react-canvas';

import { profile, webDev } from '../assets'
import LetsTalk from '../containers/buttons/LetsTalk';
import '../App.css';

const Home = () => {

  return (
    <>
      <main className='home absolute w-full -z-10 mt-16'>
        <h1 className='mt-5 text-light bg-gradient-to-r from-primary shadow-lg  shadow-primary to-secondary font-extrabold text-[3rem] w-80 mx-auto rounded text-center -mb-16 animate-fade-up animate-duration-500'>
          S.J. CRIPPA
        </h1>
       {/*  <h1 className='mt-5 shadow-primary font-extrabold text-[3rem] w-80 mx-auto rounded text-center -mb-16 animate-fade-up animate-duration-500 test'>S.J. CRIPPA</h1> */}
        <div className="mx-auto container grid grid-cols-1 md:grid-cols-3">

          <section className='mt-16 md:mt-40 col animate-fade-right animate-once animate-duration-[600ms] animate-ease-linear animate-normal animate-fill-both'>
            <h2 className='text-light mt-12 italic text-2xl w-full font-bold tracking-wider text-center test'>Front End Developer</h2>
            <img className='absolute mt-96 md:mt-0 z-0' src={webDev} alt="illustration" />
          </section>

          <section className='mt-16 md:mt-24 animate-fade-up animate-once animate-duration-[600ms] animate-ease-linear animate-normal animate-fill-both'>
            <div className='text-primary text-center'>
              <img className='w-44 md:w-auto md:mt-16 px-2 rounded-full mx-auto' src={profile} alt="profile-image" />
              <Rive src="https://cdn.rive.app/animations/vehicles.riv" />
              
            </div>
          </section>

          <section className='md:mt-48 h-screen w-full animate-fade-left animate-once animate-duration-[600ms] animate-ease-linear animate-normal animate-fill-both'>
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