import React from "react";
import "./RestraurantCard.css";
import {IMG_CDN_URL} from "../constant"

const RestraurantCard=({name,costForTwoString,area,cloudinaryImageId,cuisines,locality})=>{
    // console.log(props)
    // name,costForTwoString,area,cloudinaryImageId,cuisines,locality
   return(
    <div className="restaraunt-card">
        <img src={IMG_CDN_URL + cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <p>{locality}</p>
        <h4>{costForTwoString}</h4>
    </div>
   )
}

export default RestraurantCard;