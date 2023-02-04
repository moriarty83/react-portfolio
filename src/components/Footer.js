

const Footer = (props) => {
    return (
        <footer className={props.mode}>
            <a href="https://www.linkedin.com/in/cmmoriarty/" target="_blank" rel="noreferrer"><img className="contact-img" src="/images/Linkedin_logo.png" alt="linkedin logo" /> </a>
            <a href="mailto:moriarty83+portfolio@gmail.com"><img className="contact-img" src="/images/gmail_logo.png" alt="linkedin logo" /> </a>
            <a href="https://github.com/moriarty83" target="_blank" rel="noreferrer"><img className="contact-img" src="/images/github_logo.png" alt="linkedin logo" /> </a>
            <a href="https://stackoverflow.com/users/11396071/zoidberg" target="_blank" rel="noreferrer"><img className="contact-img" src="/images/stack_overflow_logo.png" alt="linkedin logo" /> </a>
        </footer>
    )
}
export default Footer;