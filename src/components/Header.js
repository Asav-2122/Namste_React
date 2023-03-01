import React, { useState } from "react";
import { useSelector } from "react-redux";
// import "../style.css";
/** inline style takes object and object is js code and inside jsx we have to use curly braces to use js code
 so that's why double curly braces we use while writing inline style in react {{backgroundColor:"red"}} */
 import { Link } from "react-router-dom";
// import store from "../redux/store";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const products = useSelector((store) => store.cart.products);
  
  return (
    <div className="flex justify-between p-0 m-0 bg-orange-300 h-20">
     <Link to="/"> <img
        className="h-20 hover:bg-blue-500"
        src="https://img.freepik.com/premium-vector/restaurant-food-house-logo-template_57516-341.jpg?w=2000"
        alt="logo"
       
      />
      </Link>
      <div className="text-center">
        <ul className="flex my-12">
          <li className="mx-3"><Link to="/">Home</Link></li>
          <li className="mx-3"><Link to="/about">About</Link></li>
          <li className="mx-3"><Link to="/contact">Contact</Link></li>
          <li className="mx-3 px-1 border-2 border-black-300"><Link to="/cart">Cart- {products.length}</Link></li>
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
