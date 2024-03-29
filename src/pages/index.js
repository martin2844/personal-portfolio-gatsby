import React, { useState } from "react";
import Layout from "../layout/Layout";
import "./stylesheets/Index.styles.scss";
import ServiceCard from "../components/service-card";
import { graphql, useStaticQuery } from "gatsby";
import Typewriter from "typewriter-effect";
import Img from "gatsby-image";

const Index = () => {
   const images = useStaticQuery(graphql`
      query {
         allFile(
            sort: { fields: [name], order: ASC }
            filter: { sourceInstanceName: { eq: "images" } }
         ) {
            edges {
               node {
                  childImageSharp {
                     fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                        originalName
                     }
                  }
               }
            }
         }
      }
   `);
   let aboutMeSrc = images.allFile.edges.filter((image) => {
      return image.node.childImageSharp.fluid.originalName === "about-me.png";
   });
   let aboutMe = aboutMeSrc[0].node.childImageSharp.fluid;

   const [phone, setPhone] = useState("phone: click to reveal");
   const [mail, setMail] = useState("email: click to reveal");

   function revealData(params) {
      if (params === "phone") {
         setPhone("+54 9 11 4415 6102");
      }

      if (params === "mail") {
         setMail("martinchammah@gmail.com");
      }
   }

   return (
      <Layout>
         <section className="index-main">
            <div className="index-left">
               <div className="hello-text">Hello !</div>
               <div className="before-typewriting-text">
                  <div>I am&nbsp;</div>
                  <div className="typewriting-text">
                     <Typewriter
                        options={{
                           strings: [
                              " a Web Developer",
                              " an Architect",
                              " a Mechanic",
                           ],
                           autoStart: true,
                           loop: true,
                        }}
                     />
                  </div>
               </div>
               <p className="typewriter-subtitle">
                  I am a FullStack web developer based in Buenos Aires,
                  Argentina. I feel most comfortable working on the Mern Stack,
                  Mongo-Express-React-Node, but I have no issues expanding my
                  knowledge base to fit your needs.
               </p>

               <div className="icon-container">
                  <a href="https://github.com/martin2844">
                     <i className="fab fa-github" />
                  </a>
                  <a href="https://dev.to/martin2844">
                     <i className="fab fa-dev"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UC9nNIxlNohIoIrjtC4ueIOA">
                     <i className="fab fa-youtube"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/chammah/">
                     <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="mailto:martinchammah@gmail.com">
                     <i className="fas fa-envelope" />
                  </a>
               </div>
            </div>

            <div className="index-right"></div>
         </section>

         <section id="about" className="index-about">
            <div className="index-left-about">
               <Img className="about-image" fluid={aboutMe} />
            </div>
            <div className="index-right-about less-padding-top">
               <h2>About me</h2>
               <hr />
               <h1 className="brand about-sub">
                  I am a professional web developer with years of experience.
               </h1>
               <p>
                  I have an Architect degree from the University of Buenos
                  Aires, and I am a self-taught Full Stack developer, so I know
                  my way around design and programming.
               </p>
               <p>
                  Im currently working at a leading real state CRM application
                  for the US Market, mainly as a backend developer using NodeJs
                  and TS as my main tools.
               </p>
               <p>
                  Nowadays, I am also studying for a graduate degree in CS at
                  UoPeople.
               </p>
               <div className="info-container">
                  <div className="first-two">
                     <div className="info-icons">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Buenos Aires, Argentina</p>
                     </div>
                     <div className="info-icons">
                        <i className="fas fa-phone"></i>
                        <p onClick={() => revealData("phone")}>{phone}</p>
                     </div>
                  </div>
                  <div className="last-two">
                     <div className="info-icons">
                        <i className="far fa-calendar-alt"></i>
                        <p>Age: 29</p>
                     </div>
                     <div className="info-icons">
                        <i className="fas fa-envelope"></i>
                        <p onClick={() => revealData("mail")}>{mail}</p>
                     </div>
                  </div>
               </div>
               <div className="resume-button-container">
                  <a
                     className="resume-button"
                     href="www.linkedin.com/in/chammah"
                  >
                     {" "}
                     Download Resumé
                  </a>
               </div>
            </div>
         </section>
         <section className="index-services" id="services">
            <h4 className="what-button">What I do</h4>
            <h1>My Services</h1>
            <div className="card-container">
               <ServiceCard
                  icon="fas fa-laptop-code"
                  title="Web Development"
                  desc="I develop awesome performance-driven websites. I can suggest a technology for you to use, depending on what you are looking for. My go to choices are Gatsby for static content-driven sites, and React for Dynamic sites."
               />
               <ServiceCard
                  icon="fas fa-database"
                  title="Custom APIs and DBs"
                  desc="I can create a custom API for your all of your data needs, it can have a user friendly admin panel and can be connected to a database. For backend APIs I prefer NodeJs, and for databases, mongoDB. But if you prefer we can go a more traditional route, with SQL."
               />
               <ServiceCard
                  icon="fas fa-chart-line"
                  title="SEO Optimization"
                  desc="Ranking high on search engines is a must for your application or website. No worries, I got you covered. Be it a web app, or a static sites, I can make your site gain online presence via the latest SEO tools."
               />
            </div>
         </section>
      </Layout>
   );
};

export default Index;
