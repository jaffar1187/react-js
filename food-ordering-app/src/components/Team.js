//Not in use

import { useState, useEffect } from "react";
const Team = () => {
  const [userData, setUserData] = useState({
    userInfo: {
      name: "",
      location: "",
      contact: "",
      avatar_url: "",
    },
  });

  const fetchData = async () => {
    let user = await fetch("https://api.github.com/users/jaffar1187");
    user = await user.json();
    this.setState({
      userInfo: user,
    });
  };

  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h4>Location: {location}</h4>
      <h4>Contact: @jaffar1187</h4>
    </div>
  );
};

export default Team;
