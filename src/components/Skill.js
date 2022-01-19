import { useState } from "react";
import Detail from "./Detail";
import { Zoom } from "react-reveal";
import { Flip } from "react-reveal";

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
        <div onMouseEnter={(event)=> showMe(event)} onMouseLeave={(event)=> hideMe(event)}>
        {/* {props.skill} */}
        <Zoom>
        <img src={"./images/icons/"+props.skill+".png"} alt={props.skill + " logo"} className="skill-img"/>
        </Zoom>
        <Detail classText={classText} content={props.content}/>
        </div>
    </>
    )
}

export default Skill;