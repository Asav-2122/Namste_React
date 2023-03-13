import React from "react";
import { IMG_CDN_URL } from "../constant";

const RestraurantCard = ({
  name,
  costForTwoString,
  area,
  cloudinaryImageId,
  cuisines,
  locality,
}) => {
  return (
    <div className="w-60 h-48 mb-4 hover:shadow-2xl hover:border-2 hover:border-black">
      <img className="rounded-md w-full" src={IMG_CDN_URL + cloudinaryImageId} alt="Food-Image"/>
      <h3 className="text-xl font-bold">{name}</h3>
      <div className="w-1">{cuisines.join(", ").slice(0,30)+"..."}</div>
      <p>{locality}</p>
      <h4>{costForTwoString}</h4>
    </div>
  );
};

export default RestraurantCard;
