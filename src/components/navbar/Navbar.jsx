import React from 'react';

import { logo } from '../../assets'
import { Icons } from './Icons'

const Navbar = () => {
    return (
        <>
            <nav 
            className='container mx-auto h-12 rounded-lg mt-2 drop-shadow-md hover:drop-shadow-xl flex mx-full items-center'>
                <a href="#">
                <img 
                className='w-10 h-10 rounded-lg transition ease-in-out hover:scale-125 duration-200 bg-transparent ml-5' 
                src={logo} 
                alt="logo" />
                </a>
                <ul 
                className='font-mono font-bold flex mx-auto gap-7'>
                    <a 
                    className='transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' href="#">About</a>
                    <a 
                    className='transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' href="#">Experience</a>
                    <a 
                    className='transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' href="#">Works</a>
                </ul>
            <Icons/>
            </nav>

        </>
    )
};

export default Navbar
