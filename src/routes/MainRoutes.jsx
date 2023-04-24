import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../components/Home';


export const MainRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
