import React from 'react'
import { Link } from 'react-router-dom'

export const NavItem = ({ label, src = '/' }) => {
    return (
        <div>
            <li>
                <Link to={src}>{label}</Link>
            </li>
        </div>
    )
}
