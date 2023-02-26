import React from "react";
import { useState, useEffect } from "react";
import "./RestraurantCard.css";

const ShimmerUi = () => {
  const [allRestraurants, setAllRestraurants] = useState([]);
  useEffect(() => {
    getAllRestaurants();
  }, []);

  const getAllRestaurants = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    ).then((data)=>{
       const json = data.json();
      setAllRestraurants(json?.data?.cards[2]?.data?.data?.cards);
    }).catch((error)=>{
      console.log(error.message);
    });
    // const json = await res.json();
   
  };
  return (
    <div className="restaraunts">
      {allRestraurants?.map((restaraunt, index) => (
        <div key={restaraunt.data.id} className="restaraunt-card-shimmer"></div>
      ))}
    </div>
  );
};
export default ShimmerUi;
