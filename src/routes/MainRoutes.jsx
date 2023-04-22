import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from '../components/Header';
import { Home } from '../components/Home';


export const MainRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Header />} />
                    <Route path='/Home' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
