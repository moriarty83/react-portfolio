import { useState } from "react";
import Detail from "./Detail"

function Skill (props){
    const [classText, setClassText] = useState("detail hidden ")
    const showMe = (event)=>{
        setClassText("detail ");
    }

    const hideMe = (event)=>{
        setClassText("detail hidden ")
    }

    return(
        <>
        <p onMouseEnter={(event)=> showMe(event)} onMouseLeave={(event)=> hideMe(event)}>
        {props.skill}
        </p>
        <Detail classText={classText} content={props.content}/>
    </>
    )
}

export default Skill;