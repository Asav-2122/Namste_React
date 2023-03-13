import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import useRestraurant from "../utils/useRestraurant";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../redux/cartSlice";
import ShimmerUi from "./ShimmerUi";
const RestraurantMenu = () => {
  const { id } = useParams();
  const { user } = useContext(userContext);
  const { name, email } = user;
  const restraurant = useRestraurant(id);
  const foodItems = useSelector((store)=>store.cart.products);
  const dispatch = useDispatch();
  const handleAddItem=(item,itemName)=>{
       dispatch(addProduct({item,itemName}))
  }
  const handleRemoveItem=(id)=>{
     dispatch(removeProduct(id))
  }
  if (!restraurant) {
    return <ShimmerUi/>;
  }
  return (
    <div className="flex gap-7 flex-col my-5">
      <div className="flex justify-center items-center -mt-5 gap-24 shadow-md bg-gray-50 h-48">
        <img  
          className="w-52 h-32 rounded-md"
          src={IMG_CDN_URL + restraurant.cloudinaryImageId}
        />
        <div className="flex flex-col">
        <h1 className="font-bold text-2xl">{restraurant.name}</h1>
        <h3>{restraurant.city}</h3>
        <h3>{restraurant.costForTwoMsg}</h3>
        <h3>{restraurant.avgRating + " stars"}</h3>
        {/* <h3>{name + " " + email}</h3> */}
        </div>
      </div>
      <div>
        {/* <h2 className="text-center font-bold mb-4">Menu List</h2> */}
        <ul className="grid grid-cols-3 place-items-center">
          {Object.values(restraurant?.menu?.items).map((ele) => {
            return (
            
              <div key={ele.id} className="flex rounded-md my-3  flex-col shadow-lg w-72 hover:cursor-pointer hover:border-2 hover:border-gray-200">
                 
                 <div className="flex gap-3">
                 <li className="w-60"><img src={IMG_CDN_URL+ele.cloudinaryImageId}/></li>
                 <li className="font-bold text-lg">{ele.name}</li>
                 </div>
                <div className="mt-5">
                <li className="text-md font-bold">{ele.description}</li>
                 <li className="font-bold my-1">₹ {ele.price/100}</li>
                </div>
                 {ele.count}
                <button  className="bg-green-200 p-2 m-2 rounded-md"  onClick={() => handleAddItem(ele,ele.name)}>
                  +
                </button>
                <span className="text-center w-full font-bold">{foodItems[ele?.id]?.["count"]||0}</span>
                <button  className="bg-green-200 p-2 m-2 rounded-md"  onClick={() => handleRemoveItem(ele.id)}>
                  -
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
