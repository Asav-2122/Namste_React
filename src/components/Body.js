import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestraurantCard from "./RestraurantCard.Js";
import ShimmerUi from "./ShimmerUi";
import { searchRestraurants } from "../utils/helper";
import useIsOnline from "../utils/useIsOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestraurants, setAllRestraurants] = useState([]);
  const [restarauntList, setRestarauntList] = useState([]);

  useEffect(() => {
    getAllRestaurants();
  }, []);

  const getAllRestaurants = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();
    setAllRestraurants(json?.data?.cards[2]?.data?.data?.cards);
    setRestarauntList(json?.data?.cards[2]?.data?.data?.cards);
  };
   const isOnline = useIsOnline();
   if (!isOnline) {
    return <h2>Something Went Wrong,Pls Check Your Internet Connection.</h2>
   }
   
  if(!allRestraurants) return null;
  return (
    <div className="body-container">
      {allRestraurants.length===0 ? (
        <ShimmerUi />
      ) : (
        // <h1>loading....</h1>
        <>
          <div className="text-center">
            <input
              value={searchText}
              className="px-6"
              onChange={(e) => {
                setSearchText(e.target.value);
                if (searchText.length === 1) {
                  setRestarauntList(allRestraurants);
                }
              }}
              placeholder="Search Restaraunt"
            />
            <button 
            className="px-6 py-0.5 ml-3 bg-gray-100"
            onClick={() => {
              const data = searchRestraurants(searchText,allRestraurants);
              setRestarauntList(data);
            }}>
              Search
            </button>
          </div>
          <div className="grid grid-cols-3 w-[100%] gap-2">
            {restarauntList.length===0 ? (
              <h2>No Restaraunt Found</h2>
            ) : (
              restarauntList?.map((restaraunts) => {
                return (
                  <Link
                    to={"/restraurants/"+restaraunts.data.id}
                    key={restaraunts.data.id}
                    
                  >
                   <RestraurantCard {...restaraunts.data} />
                  </Link>
                );
              })
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
