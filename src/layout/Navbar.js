import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router'
import { slide as Menu } from 'react-burger-menu';

import './Navbar.styles.scss';

//integrate https://www.npmjs.com/package/react-burger-menu

const Navbar = () => {

    const [thePath, setThePath] = useState('/');
    return (
        <section className={thePath === '/' ? 'navbar-container' : 'navbar-container dark'}>
                 <Menu>
        <Link className="menu-item" to="/">Home</Link>
        <Link className="menu-item" to="/#about">About</Link>
        <Link className="menu-item" tp="/contact">Contact</Link>
      </Menu>
            <div className='navbar-brand-container'>
            <Link className='navbar-brand-container' to='/'>
            <h2>MARTIN</h2>
            <h2 className='bold'>CHAMMAH</h2>
            </Link>
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