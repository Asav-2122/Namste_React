import { useState ,useEffect} from "react";
import { RESTAURANT_URL } from "../constant";

// this is a custom hook;

const useRestraurant=(resId)=>{
     const [restraurant,setRestraurant] = useState();

    useEffect(()=>{
       getRestaurantsDetails();
    },[]);

    const getRestaurantsDetails=async()=>{
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4594965&lng=77.0266383&submitAction=ENTER&restaurantId=${resId}`);
        const Menu = await response.json();
        // console.log(Menu.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
        setRestraurant(Menu.data.cards)
    }

    return restraurant;
}
export default useRestraurant;