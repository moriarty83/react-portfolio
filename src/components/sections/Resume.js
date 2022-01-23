import React, { useState } from 'react';
import Title from '../Title';

import Fade from 'react-reveal/Fade';
import { Flip } from 'react-reveal';

function Resume (props){
    return(
    <div className="section">
        <a id="resume">
        <Fade left>
            <Title title="Resume" />
        </Fade>
        </a>
        <div className={"slide project " + props.mode}>
            <div className={"inner-border "+ props.mode}>
                <Fade bottom>
                    <div className="resume-div">
                        <h2><a target="_blank" href='./Resume.pdf'>Click To Download</a></h2>
                        <a target="_blank" href='./Resume.pdf'><img src='Resume.jpg' alt="C. Moriarty Resume" /></a>
                    </div>
                </Fade>
            </div>
        </div>
    </div>

    )
}

export default Resume;