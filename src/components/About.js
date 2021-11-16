import Title from "./Title"

function About (props) {
    return(
        <div className="section">
        <Title title="About"/>
        <div class={"slide " + props.mode}>
            <div class={"inner-border "+ props.mode}>
            <div class="content">
            I’m a Software Engineer with a background in Business Management and Customer Experience. Thanks to my extensive experience in e-commerce and nonprofit organizations, I approach each project with an empathetic and user-focused perspective. By coupling analytical skills with a love of learning, I am able to solve complex and systematic problems in my pursuit of building unique and empowering experiences that inspire joy and wonder.
            </div>
            </div>
        </div>
        </div>
    )
}

export default About