import React from 'react';

import { logo } from '../assets'

const Navbar = () => {
    return (
        <>
            <nav 
            className='container mx-auto h-12 bg-transparent rounded-lg mt-2 drop-shadow-md hover:drop-shadow-xl flex mx-full items-center'>
                <img 
                className='w-10 h-10 rounded-lg cursor-pointer transition ease-in-out hover:scale-110 duration-200 ml-5' 
                src={logo} 
                alt="logo" />
                <ul 
                className='font-mono font-bold transition ease-in-out hover:scale-110 duration-200 flex mx-auto gap-3'>
                    <a 
                    className='hover:text-zinc-100' href="#">About</a>
                    <a 
                    className='hover:text-zinc-100' href="#">Experience</a>
                    <a 
                    className='hover:text-zinc-100' href="#">Works</a>
                </ul>

            </nav>
        </>
    )
};

export default Navbar
