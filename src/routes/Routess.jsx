import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/navbar/NavBar';
import { Home, About, Contact, Experience, Works} from '../pages'

export const Routess = () => {
    return (

        <Router>

            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='Home' element={<Home />} />
                <Route path='About' element={<About />} />
                <Route path='Contact' element={<Contact />} />
                <Route path='Experience' element={<Experience />} />
                <Route path='Works' element={<Works />} />
            </Routes>

        </Router>

    )
}
