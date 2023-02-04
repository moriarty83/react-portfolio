import { useState } from "react";
import Detail from "./Detail";
import { Zoom } from "@stahl.luke/react-reveal";
import { Flip } from "@stahl.luke/react-reveal";
import { Rotate } from "@stahl.luke/react-reveal";

function Project(props) {
    const [classText, setClassText] = useState("detail hidden ")
    const showMe = (event) => {
        setClassText("detail ");
    }

    const hideMe = (event) => {
        setClassText("detail hidden ")
    }

    return (
        <>
            <div onMouseEnter={(event) => showMe(event)} onMouseLeave={(event) => hideMe(event)}>

                <Detail classText={classText} title={props.title} content={props.content} url={props.url} viewOn={props.viewOn} technologies={props.technologies} />

                {/* {props.skill} */}
                <Zoom>
                    <img src={"./images/projects/" + props.project + "_mockup.png"} alt={props.project + " logo"} className="project-img" />
                </Zoom>

            </div>
        </>
    )
}

export default Project;