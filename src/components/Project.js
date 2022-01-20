import { useState } from "react";
import Detail from "./Detail";
import { Zoom } from "react-reveal";
import { Flip } from "react-reveal";
import { Rotate } from "react-reveal";

function Project (props){
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
            <Detail classText={classText} content={props.content}/>
        </Rotate>
        {/* {props.skill} */}
        <Zoom>
        <img src={"./images/projects/"+props.project+"_mockup.png"} alt={props.project + " logo"} className="project-img"/>
        </Zoom>
        
        </div>
    </>
    )
}

export default Project;