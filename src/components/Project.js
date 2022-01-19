import { Zoom } from "react-reveal";
import { Rotate } from "react-reveal";

function Project(props){
    return(
        <Rotate bottom left>
            <div className="">
                {/* <div className="project-info">
                <h2>{props.title}</h2>
                <p className="project-detail">{props.description}</p>
                <p className="project-tech">{props.technologies}</p>
                </div> */}
                
                <img src={props.image} alt="project screenshot" className="project-img" />
                
            </div>
        </Rotate>
    )
}

export default Project;