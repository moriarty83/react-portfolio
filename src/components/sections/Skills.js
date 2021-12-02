
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
                    
                        <li>
                            <Skill skill="SQL" content="I've used MySQL extensively to track unfulfilled orders for Teddy the Dog Apparel and for numerous Ruby on Rails applications" />
                        </li>
                    
                    
                        <li>
                            <Skill skill="HTML" content="Having built web applications with everything with just HTML & JavaScript to JSX, React, & Ruby on Rails, good ol' HTML is like an security blanket to me." />

                        </li>
                    
                    
                        <li>
                            <Skill skill="CSS" content="I'm a huge fan of pure CSS methods of making great user experiences with things like animations, transitions, sticky scrolling and more" />
                        </li>
                    
                    
                        <li>
                            <Skill skill="SASS" content="There really is nothing like being able to nest CSS command and mix in some mixins with SASS." />

                        </li>
                    
                </ul>

                <ul>
                    
                        <th>Tools</th>
                    
                    
                        <li>
                        <Skill skill="React" content="Having deployed multiple React applications I've well versed in the use of Hooks, React Router, Styled Components and React Best Practices." />

                        </li>
                    
                    
                        <li>
                        <Skill skill="Express" content="I relish a well organized Express App. With a clear place for M, V, & C and every C, M, & V in it's place." />
                        </li>
                    
                    
                        <li>Node</li>
                    
                    
                        <li>                            
                            <Skill 
                            skill="Git/GitHub" 
                            content="As the repo owner for multiple projects, I've becoming skilled at managing Git repositories, managing pull requests and troubleshooting merge conflicts" />
                        </li>
                    

                        <li>
                        <Skill skill="Django" content="The fact that it's named for Django Reinhardt is just one of reasons to love this framework. From blogs to income/expense applications, I've loved Django's features, out-of-the-box usability and scalability" />

                        </li>
                    
                    
                        <li>
                        <Skill skill="Flask" content="I built my first full stack application, Red Planet Rover Images, with Flask as well as an application dashboard for Teddy the Dog Apparel on Flask. It isn't my favorite framework but it's polite and unassuming which I respect." />

                        </li>
                    
                    
                        <li>
                            <Skill skill="Unity" content="Unity was how I entered the world of programming. I built my first project, Cribbage - A Classy Card Game, and I owe so much to the peole who create this wondeful product and the community that uses, supports, and champions it." />
                        </li>
                    
                </ul>

                <ul>
                    
                        <th>Other</th>
                    
                        <li>
                            <Skill skill="MERN Stack" content="I experience developing several MERN applications and like how quickly a nice application can be spooled up and deployed." />

                        </li>

                        <li>VS Code</li>
                    
                        <li>JSX</li>

                        <li>Mongo DB</li>
                    
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