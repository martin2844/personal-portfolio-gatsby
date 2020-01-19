import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router'


import './Navbar.styles.scss';


//integrate https://www.npmjs.com/package/react-burger-menu

const Navbar = (props) => {
  let { justbrand } = props

    const [thePath, setThePath] = useState('/');
    const [theCenter, setTheCenter] = useState("");
    
    useEffect(() => {
      // basically if width is less than 1200 it will add the center class to the navbar
      if(justbrand === true) {
        setTheCenter(" center");
      } else {
        setTheCenter("");
      }
      
    }, [justbrand]);
    

    return (
        <section className={thePath === '/' ? `navbar-container${theCenter}` : `navbar-container dark ${theCenter}`}>
            <div className="navbar-brand-container">
            <Link className='navbar-link-container' to='/'>
            <h2>MARTIN</h2>
            <h2 className='bold'>CHAMMAH</h2>
            </Link>
            </div>
            { justbrand ? null :
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
              }

            <Location>
      {({ location }) => {
        setThePath(location.pathname)
      }}
    </Location>
            
        
        </section>
    )
}

export default Navbar;