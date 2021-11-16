function Project(props){
    return(
        <div className="project-div">
            <div className="project-info">
            <h2>{props.title}</h2>
            <p className="project-detail">{props.description}</p>
            <p className="project-tech">{props.technologies}</p>
            </div>
            <div>
            <img src={props.image} alt="project screenshot" />
            </div>
        </div>
    )
}

export default Project;