import React from 'react';
import { Link } from 'gatsby';

import './Navbar.styles.scss';

const Navbar = () => {
    return (
        <section className='navbar-container'>
            
            
            <div className='navbar-brand-container'>
            <h2>MARTINCHAMMAH</h2>
            </div>

            <div className='navbar-links-container'>
            
            <Link to='/'>Home</Link>
            <a href='#about'>About me</a>
            <a href='#about'>Service</a>
            <Link to='/'>Portfolio</Link>
            <Link to='/'>Blog</Link>
            <Link to='/'>Uses</Link>
            <Link to='/'>Contact</Link>
            <a href='https://martin2844.github.io/gatsby-cv-site/'>Resumé</a>
            </div>


        
        </section>
    )
}

export default Navbar;