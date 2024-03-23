import Team from "./Team";
import TeamClass from "./TeamClass";
import React from "react";

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
        <h2>This is a food ordering app, Made with ❤️ in India.</h2>
        <TeamClass />
      </div>
    );
  }
}

export default About;
