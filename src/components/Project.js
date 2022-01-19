import { Zoom } from "react-reveal";

function Project(props){
    return(
        <Zoom>
        <div className="project-div">
            <div className="project-info">
            <h2>{props.title}</h2>
            <p className="project-detail">{props.description}</p>
            <p className="project-tech">{props.technologies}</p>
            </div>
            
            <img src={props.image} alt="project screenshot" />
            
        </div>
        </Zoom>
    )
}

export default Project;