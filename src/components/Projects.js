import Title from "./Title"
import Detail from "./Detail"
import Project from "./Project"

function Projects (props){
    return(
        <>
        <Title title="Projects"/>
        <div class={"slide project " + props.mode}>
            <div class={"inner-border "+ props.mode}>
                <Project 
                    title="Sol System Trivia" 
                    description="Sol System Trivia is a simple, two players/one device trivia game about the solar system. Questions are generated through a headless API hosted on Contentful and the entire game exists on a single page, played without reloads."
                    technologies="TypeScript | Jquery | HTML | CSS | Headless API" 
                    image="./images/sol_trivia_mockup.jpg"/>
                    
                <Project 
                    title="Cribbage a Classy Care Game" 
                    description="A single player Cribbage game on the App Store and Google Play complete with tutorial, pleasant graphics and AI with 3 levels of difficulty. This was my very first coding project and something I'm still very proud of both by the final product and the amount of hard work, learning and discovery that went into it."
                    technologies="C# | Unity | GooglePlay | AppStore" 
                    image="./images/cribbage_mockup.png"/>

                <Project 
                    title="Albatross" 
                    description="A personal golf scorecard for Traditional, Putt Putt, and Disc Golfers. Users create a library of courses, can log games and track their performance over time."
                    technologies="JavaScript | MongoDB | Express" 
                    image="./images/albatross_mockup.png"/>
            </div>
        </div>
        </>
    )
}

export default Projects