import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import useRestraurant from "../utils/useRestraurant";

const RestraurantMenu = () => {
  const { id } = useParams();

  const restraurant = useRestraurant(id);

  if (!restraurant) {
    return;
  }
  return (
    <div className="restraurants-menu">
      <div>
        <img src={IMG_CDN_URL + restraurant.cloudinaryImageId} />
        <h1>{restraurant.name}</h1>
        <h3>{restraurant.city}</h3>
        <h3>{restraurant.costForTwoMsg}</h3>
        <h3>{restraurant.avgRating + " stars"}</h3>
      </div>
      <div>
        <h2>Menu List</h2>
        <ul>
          {Object.values(restraurant?.menu?.items).map((ele) => {
            return <li key={ele.id}>{ele.name}</li>;
          })}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default RestraurantMenu;
