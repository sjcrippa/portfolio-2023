import React from 'react';

import Navbar from '../containers/navbar/Navbar';

const Home = () => {
    return (
        <>
            <div className='h-screen'>
                <Navbar />
                <div className='h-screen relative top-10'>
                    <p className='text-center'>Home</p>
                </div>
            </div>
        </>
    )
}
export default Home;