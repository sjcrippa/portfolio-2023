import React from 'react'
import { NavItem } from './NavItem'
/* import { Link } from 'react-router-dom' */


export const NavBar = () => {
    return (
        <nav>
            <NavItem label='Home' src='/' />
            <NavItem label='About' src='About' />
            <NavItem label='Contact' src='Contact' />
            <NavItem label='Experience' src='Experience' />
            <NavItem label='Works' src='Works' />
        </nav>
    )
}
