import React from "react";
import Home from "./home";
import AboutMe from './about-me'
import Skills from "./skills";
import Portfolio from "./portfolio";
import Services from "./services";
import Contact from "./contact";
export default () => {
    return (<div>
            <Home/>
            <AboutMe/>
            <Skills/>
            <Portfolio/>
            <Services/>
            <Contact/>
        </div>
    )
}
