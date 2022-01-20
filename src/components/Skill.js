import { useState } from "react";
import Detail from "./Detail";
import { Zoom } from "react-reveal";
import { Flip } from "react-reveal";
import { Rotate } from "react-reveal";

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
        <Rotate left>
            <Detail classText={classText} title={props.title} content={props.content}/>
        </Rotate>
        {/* {props.skill} */}
        <Zoom>
        <img src={"./images/icons/"+props.skill+".png"} alt={props.skill + " logo"} className="skill-img"/>
        </Zoom>
        
        </div>
    </>
    )
}

export default Skill;