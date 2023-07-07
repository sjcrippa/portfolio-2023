import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { about, arrowLeft, contact, github, home, linkedin, logosjc, menu, works } from '../../assets'
import { Icons } from './Icons'
import Items from './Items';

const Navbar = () => {
  const [sideMenu, setSideMenu] = useState(true);

  return (
    <>
      <nav
        className='fixed mx-auto drop-shadow-md hover:drop-shadow-xl flex w-full items-center bg-primary bg-opacity-75 z-10'>
        <Link to={"/home"}>
          <img
            className='hidden md:flex mt-1 w-16 h-16 rounded-lg cursor-default bg-transparent ml-5 hover:scale-105 duration-150'
            src={logosjc}
            alt="logosjc" />
        </Link>
        <div>
          <button
            className='flex md:hidden ml-4 mt-2'
            onClick={() => setSideMenu(!sideMenu)}
          >
            {!sideMenu ? <img className='mx-52 sm:mx-[23rem] ease-in-out duration-500 w-10 h-10' src={arrowLeft} alt="arrow chevron left" /> : <img className='w-10 h-10' src={menu} alt="menu" />}
          </button>
        </div>
        <Items />
        <div className='flex justify-end mr-12'>
          <Icons />
        </div>
      </nav>

      <nav className=
        {`flex w-1/2 md:items-center sm:px-4 md:gap-3 text-light text-md bg-indigo-600 px-5 mt-2 z-10 h-screen fixed -top-2 transition-color duration-500 ease-in md:hidden
        ${sideMenu ? '-left-[100%]' : 'fixed left-0 shadow-lg shadow-dark'}`}>
        <div className='text-black flex flex-col uppercase'>
          <ul className='flex flex-col mt-5 justify-start items-start font-mono font-bold text-lg mx-auto gap-5 '>
            <Link
              className='flex gap-3 transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' to={'/home'}>
              <img src={home} alt="home" />Home</Link>
            <Link
              className='flex gap-3 transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' to={"/about"} >
              <img src={about} alt="about" />About</Link>
            <Link
              className='flex gap-3 transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' to={"/works"} >
              <img src={works} alt="works" />Works</Link>
            <Link
              className='flex gap-3 transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' to={"/contact"} >
              <img src={contact} alt="contact" />Contact</Link>
          </ul>
          <div className='w-full h-screen align-bottom py-96 translate-x-7'>
            <div className='flex gap-5 '>
              <button>
                <a
                  className='flex align-bottom'
                  href="https://github.com/sjcrippa"
                  target='_blank'>
                  <img
                    className='transition ease-in-out hover:scale-110 duration-200 h-10 w-10'
                    src={github}
                    alt="github" />
                </a>
              </button>
              <button>
                <a
                  href="https://www.linkedin.com/in/santiago-julian-crippa/"
                  target='_blank'>
                  <img
                    className='transition ease-in-out hover:scale-110 duration-200 h-10 w-10'
                    src={linkedin}
                    alt="linkedin" />
                </a>
              </button>

            </div>
          </div>
        </div>
      </nav>
      <div className='md:hidden w-full flex justify-end fixed p-2 backdrop-blur-sm'>
        <a href="https://github.com/sjcrippa" target='_blank'>
          <img className='w-16 h-16' src={logosjc} alt="logo" />
        </a>
      </div>
    </>
  )
};

export default Navbar
