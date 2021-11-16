function Detail (props) {


    return(
        <div class={props.classText}>
            <div class={"inner-border "}>
            <p class={"detail-text " + props.mode}>{props.content}</p>
            </div>
        </div>
    );
}

export default Detail