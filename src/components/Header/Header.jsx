import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='my-3 bg-blue-300 py-4'>
            
            <Link className='ml-5 hover:bg-blue-500 hover:text-blue-100 bg-blue-400 rounded-md px-2 py-1' to="/">Home</Link>
            <Link className='ml-5 hover:bg-blue-500 hover:text-blue-100 bg-blue-400 rounded-md px-2 py-1' to="/about">About</Link>
            <Link className='ml-5 hover:bg-blue-500 hover:text-blue-100 bg-blue-400 rounded-md px-2 py-1' to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;