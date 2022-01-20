import { Zoom } from "react-reveal";

function Detail (props) {


    return(
        <div class={props.classText}>
            <Zoom>
            <div class={"inner-border pl-1 pr-1 pb-1 "}>
                <h3 className="detail-title">{props.title}</h3>
            <p class={"detail-text pl-1 pr-1 pb-1 " + props.mode}>{props.content}</p>
            </div>
            </Zoom>
        </div>
    );
}

export default Detail