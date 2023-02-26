import React, { useState } from "react";
import "../style.css";
/** inline style takes object and object is js code and inside jsx we have to use curly braces to use js code
 so that's why double curly braces we use while writing inline style in react {{backgroundColor:"red"}} */
 import { Link } from "react-router-dom";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
     <Link to="/"> <img
        src="https://img.freepik.com/premium-vector/restaurant-food-house-logo-template_57516-341.jpg?w=2000"
        alt="logo"
        className="logo"
      />
      </Link>
      <div className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
        </ul>
      </div>
      {!isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      ) : (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      )}
    </div>
  );
};

export default Header;
