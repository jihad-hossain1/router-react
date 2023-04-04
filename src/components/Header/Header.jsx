import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css'

const Header = () => {
    return (
        <nav className=' bg-blue-300 py-4 px-3'>
            
            <ActiveLink  to="/"><span className='mr-3'>Home</span>  </ActiveLink>
            <ActiveLink  to="/about"><span className='mr-3'>About</span>  </ActiveLink>
            <ActiveLink  to="/contact"><span className='mr-3'>Contact</span>  </ActiveLink>
            <ActiveLink to="/friends" ><span className='mr-3'>Friends</span>  </ActiveLink>
            <ActiveLink  to="/posts" ><span className='mr-3'>Posts</span></ActiveLink>
        </nav>
    );
};

export default Header;