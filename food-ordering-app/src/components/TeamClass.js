import React from "react";

class TeamClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
        contact: "",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    let user = await fetch("https://api.github.com/users/jaffar1187");
    user = await user.json();
    this.setState({
      userInfo: user,
    });
  }

  render() {
    const { avatar_url, name, location, login } = this.state.userInfo;
    return (
      <div className="user-card m-4 p-4 bg-red-200 rounded-lg w-96">
        <img src={avatar_url} className="rounded-lg w-24"></img>
        <h2>Name: {name}</h2>
        <h4>Location: {location}</h4>
        <h4>Contact: @{login}</h4>
      </div>
    );
  }
}

export default TeamClass;
