import Fade from 'react-reveal/Fade';

function Title (props) {
    return(
        
        <div className={"title " + props.mode}>
            <p>{props.title}</p>
        </div>
    )
}

export default Title