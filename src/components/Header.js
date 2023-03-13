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
    <div className="flex justify-between p-0 m-0 bg-black h-20 text-white">
     {/* <Link to="/"> <img
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
          <li className="mx-3 px-1 border-2 border-black-300"><Link to="/cart">Cart- {Object.keys(products).length}</Link></li>
        </ul>
      </div> */}
      
<nav className="bg-black px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0   dark:border-gray-600">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <Link to="/" className="flex items-center">
      {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/> */}
      <span className="self-center italic text-2xl font-semibold whitespace-nowrap dark:text-white">Food-House</span>
  </Link>
  <div className="flex md:order-2">
      {/* <Link type="button" to="/cart"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cart-{Object.keys(products).length}</Link> */}
      
   <Link to="/cart"><button type="button" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Cart
  <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
  {Object.keys(products).length}
  </span>
</button></Link>

      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to="/about" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
      </li>

      <li>
        <Link to="/contact" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> Contact</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>

      {!isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      ) : (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      )}
    </div>
  );
};

export default Header;
