import React from "react";
import styled, { css } from 'styled-components'

const NavBar = styled.div`
    width: 100%;
    height: 5em;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;


    ${props =>
    props.night &&
    css`
      background-color: #2C3531;
      box-shadow: 0px 5px 20px #FFCB9A;
      color: white;
    `};

`

const NavLink = styled.a`
    margin: 0px 20px 0px 20px;
    font-size: 1.5em;
        ${props =>
    props.night &&
    css`
      
      color: #D1E8E2;
      text-shadow: 0px 0px 2px #FFCB9A;
    `};
`

const NavIcon = styled.img`
    position: absolute;
    left: 0;
    align-self: center;
    height: 3em;
    margin-left: 1em;
    filter: drop-shadow(0px 0px 5px #FFCB9A);

`

const Header = (props) =>{
    return(
        <NavBar night>
            <NavIcon src="/icon.png"></NavIcon>
            <NavLink night href="#">About</NavLink>
            <NavLink night href="#">Skills</NavLink>
            <NavLink night href="#">Projects</NavLink>
            <NavLink night href="#">Resume</NavLink>
            <NavLink night href="#">Contact</NavLink>
        </NavBar>
    )
}

export default Header;