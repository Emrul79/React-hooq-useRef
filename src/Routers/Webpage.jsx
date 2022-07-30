import React from "react";
import Navbar from "./Navbar";
import Home from "./Home"
import Contact from "./Contact";
import Blog from "./Blog";
import About from "./About";


const Webpage = () => {
    return <>
    <Navbar/>
        <Home />
        <About/>
        <Blog/>
        <Contact/>
    </>;
};

export default Webpage;
