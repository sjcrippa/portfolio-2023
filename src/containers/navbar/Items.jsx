import React from 'react'
import { Link } from 'react-router-dom'

const Items = () => {
  return (
    <>
      <div className='w-full'>
        <ul
          className='hidden md:flex md:justify-end items-center mr-5 font-mono font-bold text-lg gap-5'>
          <Link
            className='transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' to={"/home"} >Home</Link>
          <Link
            className='transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' to={"/about"} >About</Link>
          <Link
            className='transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' to={"/works"} >Works</Link>

          <Link
            className='transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' to={"/contact"} >Contact</Link>
        </ul>
      </div>
    </>
  )
}

export default Items