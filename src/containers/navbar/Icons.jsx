import React from 'react'

import { github } from '../../assets'
import { linkedin } from '../../assets'

export const Icons = () => {
    return (
        <>
            <div className='hidden md:flex gap-3'>
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
        </>
    )
}
