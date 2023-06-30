import React from 'react'

const Items = () => {
  return (
    <>
      <div className=''>
        <ul
          className='hidden md:flex md:justify-center font-mono font-bold text-lg gap-5'>
          <a
            className='transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' href="#">Home</a>
          <a
            className='transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' href="#">About</a>
          <a
            className='transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' href="#">Works</a>
        </ul>
      </div>
    </>
  )
}

export default Items