import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import useRestraurant from "../utils/useRestraurant";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";
const RestraurantMenu = () => {
  const { id } = useParams();
  const { user } = useContext(userContext);
  const { name, email } = user;
  const restraurant = useRestraurant(id);
  const dispatch = useDispatch();
  const handleAddItem=(item,itemName)=>{
       dispatch(addProduct({item,itemName}))
  }
  if (!restraurant) {
    return;
  }
  return (
    <div className="flex gap-7">
      <div>
        <img
          className="w-60 h-26"
          src={IMG_CDN_URL + restraurant.cloudinaryImageId}
        />
        <h1>{restraurant.name}</h1>
        <h3>{restraurant.city}</h3>
        <h3>{restraurant.costForTwoMsg}</h3>
        <h3>{restraurant.avgRating + " stars"}</h3>
        <h3>{name + " " + email}</h3>
      </div>
      <div>
        <h2>Menu List</h2>
        <ul>
          {Object.values(restraurant?.menu?.items).map((ele) => {
            return (
              <div key={ele.id}>
                <li>{ele.name}</li>
                <button  className="bg-green-200 p-2 m-2 rounded-md"  onClick={() => handleAddItem(ele,ele.name)}>
                  Add Item
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestraurantMenu;
