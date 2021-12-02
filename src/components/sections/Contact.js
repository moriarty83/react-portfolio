
import Title from "../Title"
import Detail from "../Detail"
import Skill from "../Skill"

function Contact(props){
    return(
        <div className="section contact-section">
            <a id="contact"><Title title="Contact"/></a>
            <div class={"slide " + props.mode}>
                <div class={"inner-border "+ props.mode}>
                    <h2>If you would like to to learn more about my skills and experience or discuss how I can help you on a current or new project, don't hesitate to contact me.</h2>
                    <div className="contact-div">
                    <a href="https://www.linkedin.com/in/cmmoriarty/" target="_blank"><img className="contact-img" src="/images/Linkedin_logo.png" alt="linkedin logo" /> </a>
                    <a href="mailto:moriarty83+portfolio@gmail.com"><img className="contact-img" src="/images/gmail_logo.png" alt="linkedin logo" /> </a>
                    <a href="https://github.com/moriarty83" target="_blank"><img className="contact-img" src="/images/github_logo.png" alt="linkedin logo" /> </a>
                    <a href="https://stackoverflow.com/users/11396071/zoidberg" target="_blank"><img className="contact-img" src="/images/stack_overflow_logo.png" alt="linkedin logo" /> </a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contact;