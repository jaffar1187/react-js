import Team from "./Team";
import TeamClass from "./TeamClass";
import React from "react";
import UserContext from "../../utils/UserContext";

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is a food ordering app, Made with ❤️ in India.</h2>
//       {/* <Team name={"Jaffar Sharieff"} location={"Bangalore"} /> */}
//       <TeamClass name={"Jaffar Sharieff"} location={"Bangalore"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is a food ordering app, Made with ❤️ in India.</h2>
        <TeamClass />
      </div>
    );
  }
}

export default About;
