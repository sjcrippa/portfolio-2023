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
        className='fixed mx-auto rounded-lg drop-shadow-md hover:drop-shadow-xl flex w-full items-center z-10'>
        <Link to={"/home"}>
          <img
            className='hidden md:flex mt-1 w-16 h-16 rounded-lg transition ease-in-out hover:scale-110 duration-200 bg-transparent ml-5'
            src={logosjc}
            alt="logosjc" />
        </Link>
        <button
          className='flex md:hidden ml-2'
          onClick={() => setSideMenu(!sideMenu)}
        >
          {!sideMenu ? <img className='translate-x-52 ease-in-out duration-500 w-10 h-10' src={arrowLeft} alt="arrow chevron left" /> : <img className='w-10 h-10' src={menu} alt="menu" />}
        </button>
        <Items />
        <div className='flex justify-end mr-2'>
          <Icons />
        </div>
      </nav>

      <nav className=
        {`flex w-1/2 md:items-center sm:px-4 md:gap-3 text-light text-md bg-indigo-600 px-5 mt-2 z-10 h-screen fixed -top-2 transition-color duration-500 ease-in md:hidden
        ${sideMenu ? '-left-[100%]' : 'fixed left-0 shadow-lg shadow-dark'}`}>
        <div className='text-black flex flex-col'>
          <Link to={'/'}>
            <img className='w-16 h-16 mt-5' src={logosjc} alt="logosjc" />
          </Link>
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
