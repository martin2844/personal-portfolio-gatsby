import React from 'react';
import Layout from '../layout/Layout';
import './stylesheets/portfolio.styles.scss';
import { Helmet } from 'react-helmet';
import PortfolioCard from '../components/portfolio-card';
import { portfolioInfo } from '../components/portfolio-content';
import { graphql, useStaticQuery }  from 'gatsby';




const Portfolio = () => {

    

    
    const images = useStaticQuery(graphql`
    query {
        screens: allFile(sort: {fields: [name], order: ASC}, filter: { sourceInstanceName: { eq: "portfolio" } }) {
           edges {
             node {
               childImageSharp {
                 fluid(maxWidth: 400) {
                     ...GatsbyImageSharpFluid
                     originalName
                 }
               }
               
             }
           }
         }
       }
     `)

    const theCards = portfolioInfo.map((item) => {
        let {techs, desc, livelink, codelink, title, desc2, tags} = item
        let fileString = title.toLowerCase() + ".jpg";
        console.log(fileString)
        let imageSrc = images.screens.edges.filter((image) => {
          console.log(image.node.childImageSharp.fluid.originalName)
            return image.node.childImageSharp.fluid.originalName === fileString;
        })
        let screenCap = imageSrc[0].node.childImageSharp.fluid;

        return (
            <PortfolioCard screenCap={screenCap} key={title} techs={techs} desc={desc} desc2={desc2}
             livelink={livelink} codelink={codelink} title={title}
             tags={tags}
             />
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
            {theCards}
         </section>
        
     </Layout>
    )
}

export default Portfolio