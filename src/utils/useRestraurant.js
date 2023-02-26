import { useState ,useEffect} from "react";
import { RESTAURANT_URL } from "../constant";

// this is a custom hook;

const useRestraurant=(resId)=>{
     const [restraurant,setRestraurant] = useState();

    useEffect(()=>{
       getRestaurantsDetails();
    },[]);

    const getRestaurantsDetails=async()=>{
        const response = await fetch(`${RESTAURANT_URL}=${resId}`);
        const Menu = await response.json();
        setRestraurant(Menu.data)
    }

    return restraurant;
}
export default useRestraurant;