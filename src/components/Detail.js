import { Zoom } from "react-reveal";

function Detail (props) {


    return(
        <div class={props.classText}>
            <Zoom>
            <div class={"inner-border pl-1 pr-1 pb-1 detail"}>
                <h3 className="detail-title ">{props.title}</h3>
                <h4 className="detail-title ">{props.technologies}</h4>
                <br/>
                {props.content}
                <p className={"detail-text pl-1 pr-1 pb-1 " + props.mode}></p>
                <a className={"detail-text pl-1 pr-1 pb-1 mb-1 " + props.mode} target="_blank" href={props.url}>{props.viewOn}</a>
            </div>
            </Zoom>
        </div>
    );
}

export default Detail