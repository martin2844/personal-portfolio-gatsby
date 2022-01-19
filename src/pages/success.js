import React from "react";
import Layout from "../layout/Layout";
import "./stylesheets/portfolio.styles.scss";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

const Success = () => {
   return (
      <Layout>
         <Helmet>
            <title>Martin Chammah | Success</title>
            <meta charset="UTF-8" />
            <meta name="description" content="I thank you for contacting me" />
            <meta name="author" content="Martin Chammah" />
         </Helmet>
         <section className="portfolio-main-title">
            <h1>Thank you!</h1>
            <p>Your message has been sent, I'll get to you ASAP</p>
         </section>
         <section className="portfolio-main-section">
            <Link to="/"> G o b a c k h o m e !</Link>
         </section>
      </Layout>
   );
};

export default Success;
