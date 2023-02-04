import { Fade } from "@stahl.luke/react-reveal";

function Title(props) {
    return (

        <div className={"title " + props.mode}>
            <p>{props.title}</p>
        </div>
    )
}

export default Title