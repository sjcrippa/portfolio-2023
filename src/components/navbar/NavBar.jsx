import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className='container mx-auto h-9 bg-indigo-500 rounded-lg mt-2 drop-shadow-md hover:drop-shadow-xl  '>
                <div className='flex'>
                    <a className='text-2xl font-sans hover:text-zinc-100 font-extrabold' href='#'>Logo</a>
                    <ul className='flex flex-row gap-6 mx-auto items-center font-mono font-bold transition ease-in-out hover:scale-110 duration-200'>
                        <a className='hover:text-zinc-100' href="#">About</a>
                        <a className='hover:text-zinc-100' href="#">Experience</a>
                        <a className='hover:text-zinc-100' href="#">Works</a>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default Navbar
