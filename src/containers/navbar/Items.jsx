import React from 'react'

const Items = () => {
    return (
        <>
            <ul
                className='hidden md:flex font-mono font-bold text-lg mx-auto gap-5'>
                <a
                    className='transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' href="#">Home</a>
                <a
                    className='transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' href="#">About</a>
                <a
                    className='transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' href="#">Works</a>
            </ul>
        </>
    )
}

export default Items