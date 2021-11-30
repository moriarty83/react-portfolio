
import Title from "../Title"
import Detail from "../Detail"
import Skill from "../Skill"


function Skills (props) {

    return(
        <div className="section">
        <a id="skills"><Title title="Skills"/></a>
        <div class={"slide " + props.mode}>
            <div class={"inner-border "+ props.mode}>
            <div class="content table">
                <ul>
                    
                        <th>Languages</th>
                        <li >
                            <Skill skill="JavaScript" content="Skilled JS User" />
                        </li>
                    
                        <li>
                            <Skill 
                            skill="Python" 
                            content="Skilled with Pandas, Data Visualization & Machine Learning Libraries" />
                        </li>

                        <li>
                            <Skill 
                            skill="C#" 
                            content="My first love in programming, I've used C# extensively for Game Development" />
                        </li>
                    
                        <li>SQL</li>
                    
                    
                        <li>HTML</li>
                    
                    
                        <li>CSS</li>
                    
                    
                        <li>SASS</li>
                    
                </ul>

                <ul>
                    
                        <th>Tools</th>
                    
                    
                        <li>React</li>
                    
                    
                        <li>Express</li>
                    
                    
                        <li>Node</li>
                    
                    
                        <li>                            
                            <Skill 
                            skill="Git/GitHub" 
                            content="As the repo owner for multiple projects, I've becoming skilled at managing Git repositories, managing pull requests and troubleshooting merge conflicts" /></li>
                    

                        <li>Django</li>
                    
                    
                        <li>Flask</li>
                    
                    
                        <li>Unity</li>
                    
                </ul>

                <ul>
                    
                        <th>Other</th>
                    
                    
                        <li>VS Code</li>
                    
                    
                        <li>Mongo DB</li>
                    
                    
                        <li>MySQL</li>
                    
                    
                        <li>AWS</li>
                    
                    
                        <li>Excel</li>
                    
                    
                        <li>Photoshop</li>
                    
                    
                </ul>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Skills