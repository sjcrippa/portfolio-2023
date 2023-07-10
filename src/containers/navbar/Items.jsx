import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillHome, AiOutlineInfoCircle, AiOutlineMail } from 'react-icons/ai'
import {FaSuitcase} from 'react-icons/fa'
import { about, contact, home, works } from '../../assets'

const Items = () => {
  return (
    <>
      <div className='w-full text-light'>
        <ul
          className='hidden md:flex md:justify-start md:ml-10 items-center mr-5 font-mono font-bold text-lg gap-5'>
          <Link
            className='transition ease-in-out hover:scale-110 duration-100 text-white hover:text-blue-300' to={"/home"} >
              <AiFillHome size={25} color='white' />
              {/* <img src={home} alt="home-icon" /> */}
            </Link>
          <Link
            className='transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' to={"/about"} >
              <AiOutlineInfoCircle size={25} color='white' />
              {/* <img src={about} alt="about-icon" /> */}
            </Link>
          <Link
            className='transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' to={"/works"} >
              <FaSuitcase size={25} color='white' />
              {/* <img src={works} alt="works-icons" /> */}
            </Link>

          <Link
            className='transition ease-in-out hover:scale-110 duration-100 text-slate-50 hover:text-blue-300' to={"/contact"} >
              <AiOutlineMail size={25} color='white'/>
              {/* <img src={contact} alt="contact-icon" /> */}
            </Link>
        </ul>
      </div>
    </>
  )
}

export default Items