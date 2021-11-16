function Title (props) {
    return(
        <div class={"title " + props.mode}>
            <p>{props.title}</p>
        </div>
    )
}

export default Title