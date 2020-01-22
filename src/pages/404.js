import React from 'react';
import Layout from '../layout/Layout';
import './stylesheets/portfolio.styles.scss';

import { Link } from 'gatsby'


const NotFound = () => {

    return (
     <Layout>
         <section className="portfolio-main-title">
                <h1>404 error</h1>
                <p>Unfortunatly this is a mistake, or the section does not exist</p>
         </section>
         <section className="portfolio-main-section">
         <Link to="/"> G o  b a c k  h o m e !</Link>
         </section>
     </Layout>
    )
}

export default NotFound