import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { about, arrowLeft, contact, home, logosjc, menu, works } from '../../assets'
import { Icons } from './Icons'
import Items from './Items';

const Navbar = () => {
  const [sideMenu, setSideMenu] = useState(true);

  return (
    <>
      <nav
        className='fixed mx-auto flex w-full bg-dark items-center z-10 justify-between'>
        <div className='md:flex md:items-center md:px-4'>
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
              {!sideMenu ? <img className='mx-52 sm:mx-[23rem] ease-in-out duration-500 w-10 h-14' src={arrowLeft} alt="arrow chevron left" /> : <img className='w-10 h-14' src={menu} alt="menu" />}
            </button>
          </div>
          <Items />
        </div>
        <div className='flex justify-end mr-12'>
          <Icons />
        </div>
      </nav>

      <nav className=
        {`flex w-1/2 md:items-center sm:px-4 md:gap-3 text-light text-md bg-primary px-5 mt-2 z-10 h-screen fixed -top-2 transition-color duration-500 ease-in md:hidden
        ${sideMenu ? '-left-[100%]' : 'fixed left-0 shadow-lg shadow-dark'}`}>
        <div className='text-light flex flex-col uppercase'>
          <ul className='flex flex-col mt-5 justify-start items-start mx-auto gap-5 '>
            <Link
              className='flex gap-3 text-lg font-extrabold transition ease-in-out hover:scale-110 duration-100' to={'/home'}>
              <img src={home} alt="home" />Home</Link>
            <Link
              className='flex gap-3 text-lg font-extrabold transition ease-in-out hover:scale-110 duration-100' to={"/about"} >
              <img src={about} alt="about" />About</Link>
            <Link
              className='flex gap-3 text-lg font-extrabold transition ease-in-out hover:scale-110 duration-100' to={"/works"} >
              <img src={works} alt="works" />Works</Link>
            <Link
              className='flex gap-3 text-lg font-extrabold transition ease-in-out hover:scale-110 duration-100' to={"/contact"} >
              <img src={contact} alt="contact" />Contact</Link>
          </ul>
        </div>
      </nav>
    </>
  )
};

export default Navbar
