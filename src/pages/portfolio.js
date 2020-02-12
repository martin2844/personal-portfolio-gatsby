import React from 'react';
import Layout from '../layout/Layout';
import './stylesheets/portfolio.styles.scss';
import { Helmet } from 'react-helmet';
import PortfolioCard from '../components/portfolio-card';
import { portfolioInfo } from '../components/portfolio-content';





const Portfolio = () => {

    console.log(portfolioInfo);

    const theCards = portfolioInfo.map((item) => {
        let {techs, desc, livelink, codelink, title} = item
        return (
            <PortfolioCard techs={techs} desc={desc} livelink={livelink} codelink={codelink} title={title} />
        )
    })

    return (
     <Layout>
           <Helmet>
                <title>Martin Chammah | Portfolio</title>
                <meta charset="UTF-8"/>
                <meta name="description" content="Some of the work I have done over time."/>
                <meta name="author" content="Martin Chammah"/>
              
          </Helmet>
         <section className="portfolio-main-title">
                <h1>My portfolio</h1>
                <p>Some of the work I have done over time.</p>
         </section>
         <section className="portfolio-main-section">
         Under construction
            {theCards}
         </section>
        
     </Layout>
    )
}

export default Portfolio