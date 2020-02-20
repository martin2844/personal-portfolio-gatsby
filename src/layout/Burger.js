import React from 'react'
import { Link } from 'gatsby'
import './Burger.styles.scss'

const Burger = () => {
    return (
        <nav role="navigation">
        <div id="menuToggle">
          {/* <!--
          A fake / hidden checkbox is used as click reciever,
          so you can use the :checked selector on it.
          --> */}
          <input type="checkbox" />
          
          {/* <!--
          Some spans to act as a hamburger.
          
          They are acting like a real hamburger,
          not that McDonalds stuff.
          --> */}
          <span></span>
          <span></span>
          <span></span>
          
          {/* <!--
          Too bad the menu has to be inside of the button
          but hey, it's pure CSS magic.
          --> */}
          <ul id="menu">
            <Link to='/'><li>Home</li></Link>
            <Link to='/#about'><li>About me</li></Link>
            <Link to='/#services'><li>Services</li></Link>
            <Link to='/portfolio'><li>Portfolio</li></Link>
            <Link to='/blog'><li>Blog</li></Link>
            <Link to='/uses'><li>Uses</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
            <a href='https://martin2844.github.io/gatsby-cv-site/'><li>Resumé</li></a>
          </ul>
        </div>
      </nav>
      
    )
}

export default Burger
