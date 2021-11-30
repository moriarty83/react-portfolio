import React from "react";

const Header = (props) =>{
    console.log(props)
    return(
        <nav className={props.mode}>
            <img src="/icon.png" />
            <a class={props.mode} href="#about">About</a>
            <a class={props.mode} href="#skills">Skills</a>
            <a class={props.mode} href="#projects">Projects</a>
            <a class={props.mode} href="#resume">Resume</a>
            <a class={props.mode} href="#contact">Contact</a>
        </nav>
    )
}

export default Header;