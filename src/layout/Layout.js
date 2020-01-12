import React from 'react';
import Navbar from './Navbar';

import './Layout.styles.scss';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Navbar/>
            {props.children}
        </React.Fragment>
    )
}

export default Layout