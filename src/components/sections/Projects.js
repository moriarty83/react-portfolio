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
                        <p className="detail-text">Civic engagement is of great interest and importance to me. This drove me to create the Civic Voter Companion to enable people to easily learn about their elected officials and find out how to vote and become involved in government.</p><br />
                        <p className="detail-text">Using this app, can not only access offical's websites and social media profiles but link directly to their state's voter registration and election information.</p><br />
                        <p className="detail-text">When a user's address matches that of an upcoming election, they can also see what offices are up for election and/or questions will be on the ballot.</p><br />
                        <a className="detail-text" target="_blank" href="https://apps.apple.com/us/app/civic-voting-companion/id1606433760">View on the AppStore</a>

                        </div>}
                        technologies="Swift | Firebase Auth | Firestore DB | iOS" 
                    />

                    <Project 
                        project="mykitchen"
                        title="MyKitchen" 
                        content={<div className="pl-1 pb-1 pr-1">
                            <p className="detail-text">Too many times have I found a recipe online that looked like the perfect use for that piece of salmon or chicken breasts I have in the fridge, only to find the only ingredient I had to make the dish was that piece of chicken or fish.</p><br />
                            <p className="detail-text">MyKitchen is a Pantry & Recipe Application to address this issue. Powered by the Edemam Recipe and Food API, users not only search for recipes, but are able to create a personal pantry of items they regularly have on hand. </p><br />
                            <p className="detail-text">This makes recipe searches smarter; by showing users what they already have the pantry or refrigerator.</p>
                            <a className="detail-text" target="_blank" href="https://my-kitchen-site.netlify.app/">View Site</a>

                            </div>}
                        technologies="React | Ruby | Rails | Tailwind CSS | PostgreSQL | REST API" 
                    />
                        
                    <Project 
                        project="cribbage"
                        title="Cribbage a Classy Card Game" 
                        content={<div className="pl-1 pb-1 pr-1">
                        <p className="detail-text">A single player Cribbage game on the App Store and Google Play.</p><br />
                        <p className="detail-text">It features a full tutorial, pleasant graphics, 3 levels of difficulty, and an adorable AI Turtle as your opponent.</p><br />
                        <p className="detail-text">This was my first coding project and something I'm still very proud of both by the final product and the amount of hard work, learning and discovery that went into it.</p><br />
                        <a className="detail-text" target="_blank" href="https://apps.apple.com/us/app/cribbage-a-classy-card-game/id1521767830">View on the AppStore</a>

                        </div>}
                        technologies="C# | Unity | GooglePlay | AppStore" 
                    />

                    <Project 
                        project="albatross"
                        title="Albatross" 
                        content={<div className="pl-1 pb-1 pr-1">
                        <p className="detail-text">A personal golf scorecard for Traditional, Putt Putt, and Disc Golfers.</p><br />
                        <p className="detail-text">Users create a library of courses, can log games and track their performance over time.</p><br />
                        <p className="detail-text">Courses can be shared with the Albatross community and contributed to the larger library of courses.</p><br />
                        <a className="detail-text" target="_blank" href="https://albatross4golf.herokuapp.com/">View Site</a>
                        </div>}
                        technologies="JavaScript | MongoDB | Express | Auth0"
                        />

                    <Project 
                        project="rp_rover"
                        title="Red Planet Rover Images" 
                        content={<div className="pl-1 pb-1 pr-1">
                        <p className="detail-text">Made as my final project for HarvardX's Intro to Computer Science course, Red Planet Rover Images uses Nasa's Mars Rover API to find images from the Spirit, Curiosity, & Opportunity Rovers.</p><br />
                        <p className="detail-text">Complete with user registration and authentication users are able to create their own library of favorite images from all three rovers and suggestions for interesting dates to look at.</p><br />
                        <a className="detail-text" target="_blank" href="https://github.com/moriarty83/red-planet-rover">View on GitHub</a>
                        </div>}
                        description="Made as my final project for HarvardX's Intro to Computer Science course, Red Planet Rover Images uses Nasa's Mars Rover API to let users lookup and create a gallery of images from the Spirit, Curiosity, & Opportunity Rovers."
                        technologies="Python | Flask | Jquery | HTML | CSS | NASA Mars Rover API" 
                    />

                    <Project 
                        project="sol_trivia"
                        title="Sol System Trivia" 
                        content={<div className="pl-1 pb-1 pr-1">
                        <p className="detail-text">Sol System Trivia is a simple, two players/one device trivia game about the solar system.</p><br />
                        <p className="detail-text">Questions are generated through a headless API hosted on Contentful and the entire game exists on a single page, played without reloads.</p><br />
                        <a className="detail-text" target="_blank" href="https://moriarty83.github.io/sol-system-trivia/">View Site</a>
                        </div>}
                        technologies="TypeScript | Jquery | HTML | CSS | Headless API" 
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects