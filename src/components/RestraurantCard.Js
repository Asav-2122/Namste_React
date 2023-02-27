import React from "react";

import {IMG_CDN_URL} from "../constant"

const RestraurantCard=({name,costForTwoString,area,cloudinaryImageId,cuisines,locality})=>{
    // console.log(props)
    // name,costForTwoString,area,cloudinaryImageId,cuisines,locality
   return(
    <div className="border-2 border-blue-400">
        <img  src={IMG_CDN_URL + cloudinaryImageId}/>
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="w-1">{cuisines.join(", ")}</div>
        <p>{locality}</p>
        <h4>{costForTwoString}</h4>
    </div>
   )
}

export default RestraurantCard;