import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.styles.scss";
import { Link } from "gatsby";

export default (props) => {
   return (
      // Pass on our props
      <Menu {...props}>
         <Link className="menu-item" to="/">
            Home
         </Link>
         <Link className="menu-item" to="/#about">
            About me
         </Link>
         <Link className="menu-item" to="/#services">
            Services
         </Link>
         <Link className="menu-item" to="/portfolio">
            Portfolio
         </Link>
         <Link className="menu-item" to="/blog">
            Blog
         </Link>
         <Link className="menu-item" to="/uses">
            Uses
         </Link>
         <Link className="menu-item" to="/contact">
            Contact
         </Link>
         <a href="https://martin2844.github.io/gatsby-cv-site/">Resumé</a>
      </Menu>
   );
};
