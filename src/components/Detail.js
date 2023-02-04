import { Zoom } from "@stahl.luke/react-reveal";

function Detail(props) {


    return (
        <div className={props.classText}>
            <Zoom>
                <div className={"inner-border pl-1 pr-1 pb-1 detail"}>
                    <h3 className="detail-title ">{props.title}</h3>
                    <h4 className="detail-title ">{props.technologies}</h4>
                    <br />
                    {props.content}
                </div>
            </Zoom>
        </div>
    );
}

export default Detail