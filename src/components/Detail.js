import { Zoom } from "react-reveal";

function Detail (props) {


    return(
        <div class={props.classText}>
            <Zoom>
            <div class={"inner-border p-1"}>
                <h3 className="detail-title">{props.title}</h3>
            <p class={"detail-text " + props.mode}>{props.content}</p>
            </div>
            </Zoom>
        </div>
    );
}

export default Detail