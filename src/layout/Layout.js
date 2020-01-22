import React, { useEffect, useState } from "react";
import Navbar from './Navbar';
import ScrollUpButton from "react-scroll-up-button";
import Sidebar from './Sidebar';
import './Layout.styles.scss';
import { Helmet } from 'react-helmet';



const Layout = (props) => {

  //gets window dimensions to conditionally render the burger menu
  const windowGlobal = typeof window !== 'undefined' && window
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = windowGlobal;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    windowGlobal.addEventListener('resize', handleResize);
    return () => windowGlobal.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
    const { width } = useWindowDimensions();

    return (
        <div id="App">
            <Helmet>
                <title>Martin Chammah | Full Stack Dev.</title>
                <meta charset="UTF-8"/>
                <meta name="description" content="I am a Full Stack developer from aAgentina, I can build your apps"/>
                <meta name="keywords" content="Full Stack Developer, programming, javascript argentina, apps, react, gatsby argentina" />
                <meta name="author" content="Martin Chammah"/>
                <link rel="canonical" href="https://martinchammah.dev/" />
                <meta name="robots" content="index, follow" />
          </Helmet>
            {width < 1200 ? <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"}/> : null}
            <Navbar justbrand={width > 1200 ? "" : true} /> 
            <div id="page-wrap">
            {props.children}
            </div>
            <ScrollUpButton />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
        </div>
    )
}

export default Layout