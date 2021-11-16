function Slide (props) {
    return(
        <div class={"slide " + props.mode}>
            <div class={"inner-border "+ props.mode}>
            <p class={props.mode}>Hello</p>
            <div>
                Content
            </div>
            </div>
        </div>
    )
}

export default Slide