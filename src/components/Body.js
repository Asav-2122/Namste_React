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
    try {
      await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      )
        .then((res) => res.json())
        .then((json) => {
          setAllRestraurants(json?.data?.cards[2]?.data?.data?.cards),
            setRestarauntList(json?.data?.cards[2]?.data?.data?.cards);
        });
    } catch (error) {
      console.log("Error while fetching data", error);
    }
  };
  const isOnline = useIsOnline();
  if (!isOnline) {
    return <h2>Something Went Wrong,Pls Check Your Internet Connection.</h2>;
  }

  if (!allRestraurants) return null;
  return (allRestraurants.length === 0) ? 
    <ShimmerUi />
   : 
    <>
      <div className="flex justify-center my-3">
        <input
          value={searchText}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-80"
          onChange={(e) => {
            setSearchText(e.target.value);
            if (searchText.length === 1) {
              setRestarauntList(allRestraurants);
            }
          }}
          placeholder="Search Restaraunt"
        />
        <button
          className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {
            const data = searchRestraurants(searchText, allRestraurants);
            setRestarauntList(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-4 place-items-center h-[80vh]">
        {restarauntList.length === 0 ? (
          <h2>No Restaraunt Found</h2>
        ) : (
          restarauntList?.map((restaraunts) => {
            return (
              <Link
                to={"/restraurants/" + restaraunts.data.id}
                key={restaraunts.data.id}
              >
                <RestraurantCard {...restaraunts.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  
};

export default Body;
