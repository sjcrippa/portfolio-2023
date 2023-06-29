import React from 'react';

import Navbar from '../containers/navbar/Navbar';

const Home = () => {
    return (
        <>
            <div className='h-screen'>
                <Navbar/>
                <p className='text-center'>Home</p> 
            </div>
        </>
    )
}
export default Home;