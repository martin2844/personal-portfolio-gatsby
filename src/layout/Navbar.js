import React, { useState, useEffect  } from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import { useScroll } from './useScroll';


import './Navbar.styles.scss';


//integrate https://www.npmjs.com/package/react-burger-menu

const Navbar = () => {

    const [thePath, setThePath] = useState('/');
    const { scrollY, setScrollY } = useScroll();

      
    const [navBarClass, setNavBarClass] = useState('navbar-container');

    useEffect(() => {
        
        scrollY >= 101 ? setNavBarClass("navbar-container short animated slideInDown") : setNavBarClass("navbar-container");


    }, [scrollY]);
    
    console.log(scrollY)

    return (
        <section className={thePath === '/' ? `${navBarClass}` : `${navBarClass} dark`}>
            <div className="navbar-brand-container">
            <Link className='navbar-link-container' to='/'>
            <h2>MARTIN</h2>
            <h2 className='bold'>CHAMMAH</h2>
            </Link>
            </div>
       
            <div className='navbar-links-container'>
            
            <Link to='/'>Home</Link>
            <Link to='/#about' onClick={() => (setScrollY(102))}>About me</Link>
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