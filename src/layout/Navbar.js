import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router'


import './Navbar.styles.scss';


//integrate https://www.npmjs.com/package/react-burger-menu

const Navbar = (props) => {
  let { justbrand } = props

    const [thePath, setThePath] = useState('/');
    let centerClass;
    
    if(justbrand) {
      centerClass = " center";
    } else {
      centerClass = "";
    }

    return (
        <section className={thePath === '/' ? `navbar-container${centerClass}` : `navbar-container dark ${centerClass}`}>
            <div className={justbrand ? 'navbar-brand-container' : 'navbar-brand-container'}>
            <Link className='navbar-brand-container' to='/'>
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