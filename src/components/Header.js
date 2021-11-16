import React from "react";

const Header = (props) =>{
    console.log(props)
    return(
        <nav className={props.mode}>
            <img src="/icon.png" />
            <a class={props.mode} href="#">About</a>
            <a class={props.mode} href="#">Skills</a>
            <a class={props.mode} href="#">Projects</a>
            <a class={props.mode} href="#">Resume</a>
            <a class={props.mode} href="#">Contact</a>
        </nav>
    )
}

export default Header;