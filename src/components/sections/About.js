import Title from "../Title"
import Fade from 'react-reveal/Fade';
import { Zoom } from "react-reveal";

function About (props) {
    return(
        <div className="section mb-1">
        
        
        <a id="about">
            <Fade left>
                <Title title="About"/>
            </Fade>
            </a>
        
        <div class={"slide " + props.mode}>
            <div class={"inner-border "+ props.mode}>
                <div class="flex-col align-start wrap">
                    <div>
                        <img class="headshot" src="/images/headshot.jpg" />
                    </div>
                    <div>
                        <div class="content">
                        I’m a Software Engineer with a background in Business Management and Customer Experience.
                        </div>
                        <div class="content">
                        Thanks to my extensive experience in e-commerce and nonprofit organizations, I approach each project with an empathetic and user-focused perspective. By coupling analytical skills with a love of learning, I am able to solve complex and systematic problems in my pursuit of building unique and empowering experiences that inspire joy and wonder.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About