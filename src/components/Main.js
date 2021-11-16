import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

const Main = (props) =>{
    console.log(props)
    return(
        <main className={props.mode}>
            <About className="section" mode={props.mode} />
            <Skills className="section" mode={props.mode} />
            <Projects className="section" mode={props.mode} />
        </main>
    )
}

export default Main;