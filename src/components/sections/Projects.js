import Title from "../Title";
import Project from "../Project";
import { Fade } from "@stahl.luke/react-reveal";

function Projects(props) {
  return (
    <div className="section">
      <a id="projects">
        <Fade left>
          <Title title="Projects" />
        </Fade>
      </a>
      <div className={"slide project " + props.mode}>
        <div className={"inner-border " + props.mode}>
          <div className="content table">
            <Project
              project="civic"
              title="Civic Voter Companion"
              content={
                <div className="pl-1 pb-1 pr-1">
                  <p className="detail-text">
                    Civic engagement is of great interest and importance to me.
                    This drove me to create the Civic Voter Companion to enable
                    people to easily learn about their elected officials and
                    find out how to vote and become involved in government.
                  </p>
                  <br />
                  <p className="detail-text">
                    Using this app, can not only access offical's websites and
                    social media profiles but link directly to their state's
                    voter registration and election information.
                  </p>
                  <br />
                  <p className="detail-text">
                    When a user's address matches that of an upcoming election,
                    they can also see what offices are up for election and/or
                    questions will be on the ballot.
                  </p>
                  <br />
                  <a
                    className="detail-text"
                    target="_blank"
                    href="https://apps.apple.com/us/app/civic-voting-companion/id1606433760"
                  >
                    View on the AppStore
                  </a>
                </div>
              }
              technologies="Swift | Firebase Auth | Firestore DB | iOS"
            />

            <Project
              project="outta-pocket"
              title="Outta Pocket"
              content={
                <div className="pl-1 pb-1 pr-1">
                  <p className="detail-text">
                    Outta Pocket is the product of working closely with a team
                    of UX Designers for the General Assembly February 2022
                    Outcomes Hackathon.
                  </p>
                  <br />
                  <p className="detail-text">
                    An original content platform, Outta Pocket aims to provide
                    an informative and safe place for people to learn how to
                    take control of their financial future.{" "}
                  </p>
                  <br />
                  <p className="detail-text">
                    My responsibilities included, Version Control, reconciling
                    merge conflcits and developing major aspects of the
                    front-end functionality, it was a pleasure to deliver a
                    great application in fewer than 72 hours.
                  </p>
                  <a
                    className="detail-text"
                    target="_blank"
                    href="https://outta-pocket.netlify.app/"
                  >
                    View Site
                  </a>
                </div>
              }
              technologies="React | Express | MongoDB | Node.JS | Vimeo"
            />

            <Project
              project="mykitchen"
              title="MyKitchen"
              content={
                <div className="pl-1 pb-1 pr-1">
                  <p className="detail-text">
                    Too many times have I found a recipe online that looked like
                    the perfect use for that piece of salmon I have in the
                    fridge, only to find the only ingredient I had to make the
                    dish was that piece of fish.
                  </p>
                  <br />
                  <p className="detail-text">
                    MyKitchen is a Pantry & Recipe Application to address this
                    issue. Powered by the Edemam Recipe and Food API, users not
                    only search for recipes, but are able to create a personal
                    pantry of items they regularly have on hand.{" "}
                  </p>
                  <br />
                  <p className="detail-text">
                    This makes recipe searches smarter; by showing users what
                    they already have the pantry or refrigerator.
                  </p>
                  <a
                    className="detail-text"
                    target="_blank"
                    href="https://my-kitchen-site.netlify.app/"
                  >
                    View Site
                  </a>
                </div>
              }
              technologies="React | Ruby | Rails | Tailwind CSS | PostgreSQL | REST API"
            />

            <Project
              project="cribbage"
              title="Cribbage a Classy Card Game"
              content={
                <div className="pl-1 pb-1 pr-1">
                  <p className="detail-text">
                    A single player Cribbage game on the App Store and Google
                    Play.
                  </p>
                  <br />
                  <p className="detail-text">
                    It features a full tutorial, pleasant graphics, 3 levels of
                    difficulty, and an adorable AI Turtle as your opponent.
                  </p>
                  <br />
                  <p className="detail-text">
                    This was my first coding project and something I'm still
                    very proud of both by the final product and the amount of
                    hard work, learning and discovery that went into it.
                  </p>
                  <br />
                  <a
                    className="detail-text detail-link"
                    target="_blank"
                    href="https://apps.apple.com/us/app/cribbage-a-classy-card-game/id1521767830"
                  >
                    View on the AppStore
                  </a>
                </div>
              }
              technologies="C# | Unity | GooglePlay | AppStore"
            />
            <Project
              project="rp_rover"
              title="Red Planet Rover Images"
              content={
                <div className="pl-1 pb-1 pr-1">
                  <p className="detail-text">
                    Made as my final project for HarvardX's Intro to Computer
                    Science course, Red Planet Rover Images uses Nasa's Mars
                    Rover API to find images from the Spirit, Curiosity, &
                    Opportunity Rovers.
                  </p>
                  <br />
                  <p className="detail-text">
                    Complete with user registration and authentication users are
                    able to create their own library of favorite images from all
                    three rovers and suggestions for interesting dates to look
                    at.
                  </p>
                  <br />
                  <a
                    className="detail-text"
                    target="_blank"
                    href="https://github.com/moriarty83/red-planet-rover"
                  >
                    View on GitHub
                  </a>
                </div>
              }
              description="Made as my final project for HarvardX's Intro to Computer Science course, Red Planet Rover Images uses Nasa's Mars Rover API to let users lookup and create a gallery of images from the Spirit, Curiosity, & Opportunity Rovers."
              technologies="Python | Flask | Jquery | HTML | CSS | NASA Mars Rover API"
            />

            <Project
              project="sol_trivia"
              title="Sol System Trivia"
              content={
                <div className="pl-1 pb-1 pr-1">
                  <p className="detail-text">
                    Sol System Trivia is a simple, two players/one device trivia
                    game about the solar system.
                  </p>
                  <br />
                  <p className="detail-text">
                    Questions are generated through a headless API hosted on
                    Contentful and the entire game exists on a single page,
                    played without reloads.
                  </p>
                  <br />
                  <a
                    className="detail-text"
                    target="_blank"
                    href="https://moriarty83.github.io/sol-system-trivia/"
                  >
                    View Site
                  </a>
                </div>
              }
              technologies="TypeScript | Jquery | HTML | CSS | Headless API"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
