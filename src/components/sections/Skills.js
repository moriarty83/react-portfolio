
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
            <div className={"slide " + props.mode}>
                <div className={"inner-border "+ props.mode}>
                    <div className="content table">   
                        <Skill title="Amazon Web Services" skill="aws" content="" />
                        <Skill title="C#" skill="csharp" content="My first love in programming, I've used C# extensively for Game Development" />
                        <Skill title="CSS" skill="css3" content="I'm a huge fan of pure CSS methods of making great user experiences with things like animations, transitions, sticky scrolling and more" />
                        <Skill title="Django" skill="django" content="The fact that it's named for Django Reinhardt is just one of reasons to love this framework. From blogs to income/expense applications, I've loved Django's features, out-of-the-box usability and scalability" />
                        <Skill title="Express.js" skill="expressjs" content="" />
                        <Skill title="Firebase" skill="firebase" content="" />
                        <Skill title="Flask" skill="flask" content="I built my first full stack application, Red Planet Rover Images, with Flask as well as an application dashboard for Teddy the Dog Apparel on Flask. It isn't my favorite framework but it's polite and unassuming which I respect." />
                        <Skill title="Git" skill="git" content="" />
                        <Skill title="GitHub" skill="github" content="" />
                        <Skill title="Heroku" skill="heroku" content="" />
                        <Skill title="HTML 5" skill="html5" content="Having built web applications with everything with just HTML & JavaScript to JSX, React, & Ruby on Rails, good ol' HTML is like an security blanket to me." />
                        <Skill title="JavaScript" skill="javascript" content="" />
                        <Skill title="MERN Stack" skill="mern" content="" />
                        <Skill title="Mongo DB" skill="mongodb" content="" />
                        <Skill title="MySQL" skill="mysql" content="I've used MySQL extensively to track unfulfilled orders for Teddy the Dog Apparel and for numerous Ruby on Rails applications" />
                        <Skill title="Node.js" skill="nodejs" content="" />
                        <Skill title="Photoshop" skill="photoshop" content="" />
                        <Skill title="PostgreSQL" skill="postgresql" content="" />
                        <Skill title="Python" skill="python" content="" />
                        <Skill title="Rails" skill="rails" content="" />
                        <Skill title="React" skill="react" content="" />
                        <Skill title="Ruby" skill="ruby" content="" />
                        <Skill title="SASS" skill="sass" content="There really is nothing like being able to nest CSS command and mix in some mixins with SASS." />
                        <Skill title="Swift" skill="swift" content="" />
                        <Skill title="TypeScript" skill="typescript" content="" />
                        <Skill title="Unity" skill="unity" content="Unity was how I entered the world of programming. I built my first project, Cribbage - A Classy Card Game, and I owe so much to the peole who create this wondeful product and the community that uses, supports, and champions it." />
                        <Skill title="Visual Studio" skill="visualstudio" content="Unity was how I entered the world of programming. I built my first project, Cribbage - A Classy Card Game, and I owe so much to the peole who create this wondeful product and the community that uses, supports, and champions it." />
                        <Skill title="VS Code" skill="vscode" content="" />
                        <Skill title="X Code" skill="xcode" content="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills