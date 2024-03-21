import { LOGO_URL } from "../../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {
  const [btn, setBtn] = useState("Login");

  // useEffect(() => {
  //   console.log("usEffect called");
  // }, [btn]);

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
