
import Title from "../Title"
import Detail from "../Detail"
import Skill from "../Skill"

import Fade from 'react-reveal/Fade';

function Skills (props) {

    return(
        <div className="section">
        <a id="skills">
            <Fade left>
                <Title title="Skills"/>
            </Fade></a>
            <div class={"slide " + props.mode}>
                <div class={"inner-border "+ props.mode}>
                    <div class="content table">   
                        <Skill skill="aws" content="" />
                
                        <Skill skill="Csharp" content="My first love in programming, I've used C# extensively for Game Development" />
                
                        <Skill skill="CSS3" content="I'm a huge fan of pure CSS methods of making great user experiences with things like animations, transitions, sticky scrolling and more" />
                        
                        <Skill skill="django" content="The fact that it's named for Django Reinhardt is just one of reasons to love this framework. From blogs to income/expense applications, I've loved Django's features, out-of-the-box usability and scalability" />

                        <Skill skill="expressjs" content="" />
                        <Skill skill="firebase" content="" />

                        <Skill skill="Flask" content="I built my first full stack application, Red Planet Rover Images, with Flask as well as an application dashboard for Teddy the Dog Apparel on Flask. It isn't my favorite framework but it's polite and unassuming which I respect." />


                        <Skill skill="git" content="" />
                        <Skill skill="github" content="" />
                        <Skill skill="heroku" content="" />
                        <Skill skill="HTML5" content="Having built web applications with everything with just HTML & JavaScript to JSX, React, & Ruby on Rails, good ol' HTML is like an security blanket to me." />

                        <Skill skill="javascript" content="" />
                        <Skill skill="mern" content="" />
                        <Skill skill="mongodb" content="" />
                        <Skill skill="mysql" content="I've used MySQL extensively to track unfulfilled orders for Teddy the Dog Apparel and for numerous Ruby on Rails applications" />
                        <Skill skill="nodejs" content="" />
                        <Skill skill="photoshop" content="" />


                        <Skill skill="postgresql" content="" />
                        <Skill skill="python" content="" />
                        <Skill skill="rails" content="" />
                        <Skill skill="react" content="" />

                        <Skill skill="ruby" content="" />


                
                        <Skill skill="SASS" content="There really is nothing like being able to nest CSS command and mix in some mixins with SASS." />
                        <Skill skill="swift" content="" />

                        <Skill skill="typescript" content="" />

                        <Skill skill="Unity" content="Unity was how I entered the world of programming. I built my first project, Cribbage - A Classy Card Game, and I owe so much to the peole who create this wondeful product and the community that uses, supports, and champions it." />

                        <Skill skill="visualstudio" content="Unity was how I entered the world of programming. I built my first project, Cribbage - A Classy Card Game, and I owe so much to the peole who create this wondeful product and the community that uses, supports, and champions it." />
                        <Skill skill="vscode" content="" />
                        <Skill skill="xcode" content="" />



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills