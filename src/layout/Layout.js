import React from 'react';
import Navbar from './Navbar';
import ScrollUpButton from "react-scroll-up-button";

import './Layout.styles.scss';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Navbar/>
            {props.children}
            <ScrollUpButton />
        </React.Fragment>
    )
}

export default Layout