import React, { useEffect, useState } from "react";
import Navbar from './Navbar';
import ScrollUpButton from "react-scroll-up-button";
import Sidebar from './Sidebar';
import './Layout.styles.scss';



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