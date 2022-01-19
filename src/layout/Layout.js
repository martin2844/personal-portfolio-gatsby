import React from "react";
import Navbar from "./Navbar";
import ScrollUpButton from "react-scroll-up-button";
import "./Layout.styles.scss";
import { Helmet } from "react-helmet";
import Burger from "./Burger";

const Layout = (props) => {
   return (
      <div id="App">
         <Helmet>
            <title>Martin Chammah | Full Stack Dev.</title>
            <meta charset="UTF-8" />
            <meta
               name="description"
               content="I am a Full Stack developer from aAgentina, I can build your apps"
            />
            <meta
               name="keywords"
               content="Full Stack Developer, programming, javascript argentina, apps, react, gatsby argentina"
            />
            <meta name="author" content="Martin Chammah" />
            <link rel="canonical" href="https://martinchammah.dev/" />
            <meta name="robots" content="index, follow" />
         </Helmet>
         <Burger />
         <Navbar />
         <div id="page-wrap">{props.children}</div>
         <ScrollUpButton />
         <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossOrigin="anonymous"
         />
      </div>
   );
};

export default Layout;
