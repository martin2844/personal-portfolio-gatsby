import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router'

import './Navbar.styles.scss';

const Navbar = () => {

    const [thePath, setThePath] = useState('/');
    console.log(thePath)
    
    return (
        <section className={thePath === '/' ? 'navbar-container' : 'navbar-container dark'}>
    
            <div className='navbar-brand-container'>
            <h2>MARTIN</h2>
            <h2 className='bold'>CHAMMAH</h2>
            </div>

            <div className='navbar-links-container'>
            
            <Link to='/'>Home</Link>
            <Link to='/#about'>About me</Link>
            <Link to='/#services'>Services</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/uses'>Uses</Link>
            <Link to='/contact'>Contact</Link>
            <a href='https://martin2844.github.io/gatsby-cv-site/'>Resumé</a>
            </div>

            <Location>
      {({ location }) => {
        setThePath(location.pathname)
      }}
    </Location>
            
        
        </section>
    )
}

export default Navbar;