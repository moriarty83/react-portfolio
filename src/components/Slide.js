function Slide (props) {
    return(
        <div className={"slide " + props.mode}>
            <div className={"inner-border "+ props.mode}>
            <p className={props.mode}>Hello</p>
            <div>
                Content
            </div>
            </div>
        </div>
    )
}

export default Slide