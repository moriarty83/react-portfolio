import Title from "../Title";
import Skill from "../Skill";

import { Fade } from "@stahl.luke/react-reveal";

function Skills(props) {
  return (
    <div className="section">
      <a id="skills">
        <Fade left>
          <Title title="Skills" />
        </Fade>
      </a>
      <div className={"slide " + props.mode}>
        <div className={"inner-border " + props.mode}>
          <div className="content table">
            <Skill title="Amazon Web Services" skill="aws" content="" />
            <Skill title="C#" skill="csharp" />
            <Skill title="CSS" skill="css3" />
            <Skill title="Django" skill="django" />
            <Skill title="Express.js" skill="expressjs" />
            <Skill title="Firebase" skill="firebase" />
            <Skill title="Flask" skill="flask" />
            <Skill title="Git" skill="git" />
            <Skill title="GitHub" skill="github" />
            <Skill title="Heroku" skill="heroku" />
            <Skill title="HTML 5" skill="html5" />
            <Skill title="JavaScript" skill="javascript" />
            <Skill title="MERN Stack" skill="mern" />
            <Skill title="Mongo DB" skill="mongodb" />
            <Skill title="MySQL" skill="mysql" />
            <Skill title="Node.js" skill="nodejs" />
            <Skill title="Photoshop" skill="photoshop" />
            <Skill title="PostgreSQL" skill="postgresql" />
            <Skill title="Python" skill="python" />
            <Skill title="Rails" skill="rails" />
            <Skill title="React" skill="react" />
            <Skill title="Ruby" skill="ruby" />
            <Skill title="SASS" skill="sass" />
            <Skill title="Shopify" skill="shopify" />
            <Skill title="Swift" skill="swift" />
            <Skill title="TypeScript" skill="typescript" />
            <Skill title="Unity" skill="unity" />
            <Skill title="Visual Studio" skill="visualstudio" />
            <Skill title="VS Code" skill="vscode" />
            <Skill title="Vue.js" skill="vuejs" />
            <Skill title="X Code" skill="xcode" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
