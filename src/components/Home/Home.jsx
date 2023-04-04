import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2>This are the outlet page . showing without any reload link up any thing  ........</h2>
            <hr className='my-3 mx-3 '/>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;