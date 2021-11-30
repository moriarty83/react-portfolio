
import Title from "../Title"
import Detail from "../Detail"
import Skill from "../Skill"

function Contact(props){
    return(
        <div className="section contact-section">
            <a id="contact"><Title title="Contact"/></a>
            <div class={"slide " + props.mode}>
                <div class={"inner-border "+ props.mode}>
                    <div className="contact-div">
                    <a href="#"><img className="contact-img" src="/images/Linkedin_logo.png" alt="linkedin logo" /> </a>
                    <a href="#"><img className="contact-img" src="/images/github_logo.png" alt="linkedin logo" /> </a>
                    <a href="#"><img className="contact-img" src="/images/stack_overflow_logo.png" alt="linkedin logo" /> </a>
                    <a href="#"><img className="contact-img" src="/images/gmail_logo.png" alt="linkedin logo" /> </a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contact;