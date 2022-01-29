import Title from "../Title"
import Fade from 'react-reveal/Fade';
import Zoom from "react-reveal";

function About (props) {
    return(
        <Zoom>
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
                                Thanks to my extensive experience in e-commerce and nonprofit organizations, I approach each project with an empathetic and user-focused perspective. By coupling analytical skills with a love of learning, I am able to solve complex and systematic problems in my pursuit of building unique and empowering experiences.
                                </div>
                                <div class="content">
                                I have been privileged to play cello with the Cambridge Symphony Orchestra and the Reading Symphony Orchestra. It has been an honor to be a member of these organizations; made up of people who prize teamwork, creativity, compassion and inclusion. 
                                </div>
                                <div class="content">
                                As a member of the American Association of Variable Star Observers I have strived to make meaningful contributions to this citizen science organization; helping to further our shared knowledge of the stars and cosmos. 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Zoom>
    )
}

export default About