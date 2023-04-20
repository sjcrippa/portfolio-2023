import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';

export const Routess = () => {
    return (

        <Router>

            <Navbar />

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='Home' element={<Home/>}/>
                <Route path='About' element={<About/>}/>
                <Route path='Contact' element={<Contact/>}/>
                <Route path='Experience' element={<Experience/>}/>
                <Route path='Works' element={<Works/>}/>
            </Routes>

        </Router>

        )
}
