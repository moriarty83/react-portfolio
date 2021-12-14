import React, { useState } from 'react';
import PDF from '../PDF';
import Title from '../Title';

function Resume (props){
    return(
    <div className="section">
        <a id="resume"><Title title="Resume" /></a>
        <div className={"slide project " + props.mode}>
            <div className={"inner-border "+ props.mode}>
                <div className="resume-div">
                    <img src='Resume.jpg' alt="C. Moriarty Resume" />
                </div>
            </div>
        </div>
    </div>

    )
}

export default Resume;