import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery }  from 'gatsby';
import './portfolio-card.styles.scss';



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

    console.log(images.uses.edges);
    let theImages = images.uses.edges;

    const filteredImages = theImages.filter((image) => {
        // image string contains the original name of the image
        let originalString = image.node.childImageSharp.fluid.originalName
        let imageString = originalString.slice(1, originalString.length-4);
        // with index of we can check if its inside the tech array, if its > -1 its inside image array, 
        // and then return it
        return techs.indexOf(imageString) > -1;
    })
    
    // console.log to check if filtered image returns correct images.
    console.log(filteredImages)

    const techMap = filteredImages.map((tech) => {
      let imgSrc =  tech.node.childImageSharp.fluid;
      let alt = tech.node.childImageSharp.fluid.originalName
        return (
            <div key={alt}>
            <Img className="portfolio-tech" fluid={imgSrc} alt={alt} />
            </div>
        )
    })

    

    return (
        <div className="portfolio-container">
            <div className="image-container">

            </div>
            <div className="portfolio-description">
                 <div className="portfolio-icon-containers">
                {techMap}
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
                        <div className="text-icon-wrapper">
                        <i className="fas fa-globe-americas"/>
                       {livelink ? <a href={livelink}> Check it live</a> : <p className="sorry">Sorry no live link</p> } 
                       </div>
                     </div>
                     <div className="portfolio-button">
                        <hr className="color-line" />
                        <div className="text-icon-wrapper">
                        <i className="fab fa-github"/>
                        {codelink ? <a href={codelink}> Check the code </a> : <p className="sorry">Sorry code not available</p> } 
                        </div>
                     </div>

                 </div>
            </div>
            
        </div>
    )
}

export default PortfolioCard;
