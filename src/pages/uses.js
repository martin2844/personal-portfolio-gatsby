import React from 'react'; 
import Layout from '../layout/Layout';
import { graphql, useStaticQuery }  from 'gatsby';
import Img from 'gatsby-image';
import './stylesheets/uses.styles.scss';
import { Helmet } from 'react-helmet';



const Uses = () => {

    const images = useStaticQuery(graphql`
    query {
        uses: allFile(sort: {fields: [name], order: ASC}, filter: { sourceInstanceName: { eq: "uses" } }) {
           edges {
             node {
               childImageSharp {
                 fluid(maxWidth: 100) {
                     ...GatsbyImageSharpFluid
                     originalName
                 }
               }
               
             }
           }
         }
         soft: allFile(sort: {fields: [name], order: ASC}, filter: { sourceInstanceName: { eq: "soft" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid
                    originalName
                }
              }
              
            }
          }
        }

       }
     `)
       console.log(images.uses);

       const logoMap = images.uses.edges.map((logo) => {
           let src = logo.node.childImageSharp.fluid;
           return (
               <div className='logo-container' key={src.originalName}>
               <Img  fluid={src} />
               </div>
           )    
       })

       const softMap = images.soft.edges.map((logo) => {
        let src = logo.node.childImageSharp.fluid;
        return (
            <div className='logo-container' key={src.originalName}>
            <Img  fluid={src} />
            </div>
        )    
    })

    return (
        <Layout>
           <Helmet>
                <title>Martin Chammah | Uses</title>
                <meta charset="UTF-8"/>
                <meta name="description" content="This is what I use everyday, my tech, my hardware"/>
                <meta name="author" content="Martin Chammah"/>
              
          </Helmet>
            <section className='uses-title-section'>
                <h1>What I use daily</h1>
                <p>Welcome to my /uses, here is what I use daily for software & hardware</p>
            </section>
            <section className='uses-main-content'>
                <div className='tech-box'>
                    <h1>Dev's tech</h1>
                    <p>Here is some of the tech I use! <br/> When it comes to developing, I love javascript and it's versatility, so it is what I mostly prefer. <br/> Of course I am not limited only to these.</p>
                {logoMap} 
                </div>
            </section>
            <section className='uses-main-content'>
                <div className='tech-box'>
                    <h1>Dev's software</h1>
                    <p>Here is some of the software I use to develop.</p>
                    {softMap}
                </div>
            </section>
        </Layout>
    )
}

export default Uses