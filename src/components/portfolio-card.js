import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import "./portfolio-card.styles.scss";

const PortfolioCard = ({
   techs,
   desc,
   title,
   livelink,
   codelink,
   screenCap,
   desc2,
}) => {
   const images = useStaticQuery(graphql`
      query {
         uses: allFile(
            sort: { fields: [name], order: ASC }
            filter: { sourceInstanceName: { eq: "uses" } }
         ) {
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
   `);

   let theImages = images.uses.edges;

   const filteredImages = theImages.filter((image) => {
      // image string contains the original name of the image
      let originalString = image.node.childImageSharp.fluid.originalName;
      let withNoDigits = originalString.replace(/[0-9]/g, "");
      let imageString = withNoDigits.slice(0, withNoDigits.length - 4);
      // with index of we can check if its inside the tech array, if its > -1 its inside image array,
      // and then return it
      return techs.indexOf(imageString) > -1;
   });

   const techMap = filteredImages.map((tech) => {
      let imgSrc = tech.node.childImageSharp.fluid;
      let alt = tech.node.childImageSharp.fluid.originalName;
      return (
         <div key={alt}>
            <Img className="portfolio-tech" fluid={imgSrc} alt={alt} />
         </div>
      );
   });

   return (
      <div className="portfolio-container">
         <div className="image-container">
            <Img className="screen-cap" fluid={screenCap} alt={title} />
         </div>
         <div className="portfolio-description">
            <div className="portfolio-icon-containers">{techMap}</div>
            <div className="portfolio-title-container">
               <h1>{title}</h1>
            </div>
            <div className="portfolio-desc-container">
               <p>{desc}</p>
               <p>{desc2}</p>
            </div>
            <div className="porfolio-button-container">
               <div className="portfolio-button">
                  <hr className="color-line" />
                  <div className="text-icon-wrapper">
                     <i className="fas fa-globe-americas" />
                     {livelink ? (
                        <a href={livelink}> Check it live</a>
                     ) : (
                        <p className="sorry">Sorry N/A</p>
                     )}
                  </div>
               </div>

               <div className="portfolio-button">
                  <hr className="color-line" />
                  <div className="text-icon-wrapper">
                     <i className="fab fa-github" />
                     {codelink ? (
                        <a href={codelink}> Github </a>
                     ) : (
                        <p className="sorry">Sorry N/A</p>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PortfolioCard;
