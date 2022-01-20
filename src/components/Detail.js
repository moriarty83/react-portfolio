import { Zoom } from "react-reveal";

function Detail (props) {


    return(
        <div class={props.classText}>
            <Zoom>
            <div class={"inner-border "}>
            <p class={"detail-text " + props.mode}>{props.content}</p>
            </div>
            </Zoom>
        </div>
    );
}

export default Detail