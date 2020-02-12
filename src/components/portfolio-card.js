import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery }  from 'gatsby';




const PortfolioCard = ({techs, desc, title, livelink, codelink}) => {

    
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
        }
        `)

    

    return (
        <div className="portfolio-container">
            <div className="image-container">

            </div>
            <div className="portfolio-description">
                 <div className="portfolio-icon-containers">

                 </div>
                 <div className="portfolio-title-container">
                    <h1>{title}</h1>
                 </div>
                 <div className="portfolio-desc-container">
                    <p>{desc}</p>
                 </div>
                 <div className="porfolio-button-container">
                     <div className="portfolio-button">
                        <hr className="color-line" />
                        <i className="fas fa-globe-americas"/>
                       {livelink ? <a href={livelink}> Check it live</a> : <p className="sorry">Sorry no live link</p> } 
                     </div>
                     <div className="portfolio-button">
                        <hr className="color-line" />
                        <i className="fab fa-github"/>
                        {codelink ? <a href={codelink}> Check the code </a> : <p className="sorry">Sorry code not available</p> } 
                        
                     </div>

                 </div>
            </div>
            
        </div>
    )
}

export default PortfolioCard;
