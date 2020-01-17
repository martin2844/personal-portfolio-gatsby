import React, { useEffect, useState } from "react";
import Navbar from './Navbar';
import ScrollUpButton from "react-scroll-up-button";
import Sidebar from './sidebar';
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
            {width < 1000 ? <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"}/> : null}
            {width > 1000 ? <Navbar/> : <Navbar justbrand="true" /> }
            <div id="page-wrap">
            {props.children}
            </div>
            <ScrollUpButton />
        </div>
    )
}

export default Layout