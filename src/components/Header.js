import {useState} from "react";


const Header = (props) =>{
    const [hidden, setHidden] = useState("hidden")

    const handleHover = () =>{
        setHidden("")
    }

    const handleExit = () =>{
        setHidden("hidden")
    }
    console.log(props)
    return(
        <nav className={props.mode}>
            <div className="dropdown" onMouseLeave={handleExit}>
                <img src="/icon.png" onMouseEnter={handleHover}/>
                <div className={"dropdown-links " + hidden}>
                    <a className={props.mode} href="#about">About</a>
                    <a className={props.mode} href="#skills">Skills</a>
                    <a className={props.mode} href="#projects">Projects</a>
                    <a className={props.mode} href="#resume">Resume</a>
                    <a className={props.mode} href="#contact">Contact</a>
                </div>
                
            </div>
            <a className={"main-link " + props.mode} href="#about">About</a>
            <a className={"main-link " + props.mode} href="#skills">Skills</a>
            <a className={"main-link " + props.mode} href="#projects">Projects</a>
            <a className={"main-link " + props.mode} href="#resume">Resume</a>
            <a className={"main-link " + props.mode} href="#contact">Contact</a>
        </nav>
    )
}

export default Header;