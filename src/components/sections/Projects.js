import Title from "../Title"
import Project from "../Project"
import Fade from 'react-reveal/Fade';



function Projects (props){
    return(
        <div className="section">
            <a id="projects">
                <Fade left>
                    <Title title="Projects"/>
                </Fade></a>
            <div className={"slide project " + props.mode}>
                <div className={"inner-border "+ props.mode}>
                <div class="content table">
                <Project 
                        project="civic"
                        title="Civic Voter Companion" 
                        content={<div className="pl-1 pb-1 pr-1">
                        <p className="detail-text">I created the Civic Voter Companion to enable people to easily learn about their elected officials.</p><br />
                        <p className="detail-text">Users can not only access offical's websites and social but link directly to their state's voter registration and election information.</p><br />
                        </div>}
                        technologies="Swift | Firebase Auth | Firestore DB | iOS" 
                        image="./images/sol_trivia_mockup.jpg"/>
                    <Project 
                        project="mykitchen"
                        title="MyKitchen" 
                        content={<div className="pl-1 pb-1 pr-1">
                            <p className="detail-text">Too many times have I found a recipe online that looked like the perfect use for that piece of salmon or chicken breasts I have in the fridge, only to find the only ingredient I had to make the dish was that piece of chicken or fish.</p><br />
                            <p className="detail-text">MyKitchen is a Pantry & Recipe Application to address this issue. Powered by the Edemam Recipe and Food API, users not only search for recipes, but are able to create a personal pantry of items they regularly have on hand. </p><br />
                            <p className="detail-text">This makes recipe searches smarter; by showing users what they already have the pantry or refrigerator.</p>
                            </div>}
                        technologies="React | Ruby | Rails | Tailwind CSS | PostgreSQL | REST API" 
                        image="./images/mykitchen_mockup.png"/>
                        
                    <Project 
                        project="cribbage"
                        title="Cribbage a Classy Card Game" 
                        content={<div className="pl-1 pb-1 pr-1">
                        <p className="detail-text">A single player Cribbage game on the App Store and Google Play.</p><br />
                        <p className="detail-text">It features a full tutorial, pleasant graphics, 3 levels of difficulty, and an adorable AI Turtle as your opponent.</p><br />
                        <p className="detail-text">This was my first coding project and something I'm still very proud of both by the final product and the amount of hard work, learning and discovery that went into it.</p><br />
                        </div>}
                        technologies="C# | Unity | GooglePlay | AppStore" 
                        image="./images/cribbage_mockup.png"/>

                    <Project 
                        project="albatross"
                        title="Albatross" 
                        content={<div className="pl-1 pb-1 pr-1">
                        <p className="detail-text">A personal golf scorecard for Traditional, Putt Putt, and Disc Golfers.</p><br />
                        <p className="detail-text">Users create a library of courses, can log games and track their performance over time.</p><br />
                        <p className="detail-text">Courses can be shared with the Albatross community and contributed to the larger library of courses.</p><br />
                        </div>}
                        technologies="JavaScript | MongoDB | Express" 
                        image="./images/albatross_mockup.png"/>

                    <Project 
                        project="rp_rover"
                        title="Red Planet Rover Images" 
                        content={<div className="pl-1 pb-1 pr-1">
                        <p className="detail-text">Made as my final project for HarvardX's Intro to Computer Science course, Red Planet Rover Images uses Nasa's Mars Rover API to find images from the Spirit, Curiosity, & Opportunity Rovers.</p><br />
                        <p className="detail-text">Complete with user registration and authentication users are able to create their own library of favorite images from all three rovers and </p><br />
                        </div>}
                        description="Made as my final project for HarvardX's Intro to Computer Science course, Red Planet Rover Images uses Nasa's Mars Rover API to let users lookup and create a gallery of images from the Spirit, Curiosity, & Opportunity Rovers."
                        technologies="Python | Flask | Jquery | HTML | CSS | NASA Mars Rover API" 
                        image="./images/rp_rover_screenshot.png"/>

                    <Project 
                        project="sol_trivia"
                        title="Sol System Trivia" 
                        content={<div className="pl-1 pb-1 pr-1">
                        <p className="detail-text">Sol System Trivia is a simple, two players/one device trivia game about the solar system.</p><br />
                        <p className="detail-text">Questions are generated through a headless API hosted on Contentful and the entire game exists on a single page, played without reloads.</p><br />
                        </div>}
                        technologies="TypeScript | Jquery | HTML | CSS | Headless API" 
                        image="./images/sol_trivia_mockup.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects