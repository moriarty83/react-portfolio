import React from "react";

import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade';

import PageTitle from "./sections/PageTitle";
import About from "./sections/About";
import Skills from "./sections/Skills"
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";


const Main = (props) =>{
    console.log(props)
    return(
        <main className={props.mode}>
            <PageTitle className="section" mode={props.mode} id="pageTitle"/>
            <About className="section" mode={props.mode} id="about"/> 
            <Skills className="section" mode={props.mode} id="skills"/>
            <Projects className="section" mode={props.mode} />
            <Resume className="section" mode={props.mode} />
            <Contact className="section" mode={props.mode} />
        </main>
    )
}

export default Main;