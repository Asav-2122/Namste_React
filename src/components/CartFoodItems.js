// import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/cartSlice";

const CartFoodItems = ({ products }) => {
  // const foodItems = useSelector((store)=>store.cart.products);
  let totalPrice = products.reduce(
    (items, curItems) => items + curItems.price / 100,
    0
  );

 const dispatch= useDispatch();

 const handleRemoveItem=(index)=>{
      dispatch(removeProduct(index));
 }

  return (
    <div className="min-h-max w-60 border-2 border-black  justify-center">
      <div>
        {products.map((items,index) => {
          return (
            <ul key={items.id}>
              <li>
                {items.name}- {items.price / 100+" Rs"} <button className="m-1 p-0.5 bg-red-600 rounded-md" onClick={()=>handleRemoveItem(index)}>Remove Item</button>
              </li>
            </ul>
          );
        })}
      </div>

     {products.length>=1 ? <h3 className="font-bold">TotalPrice: {totalPrice} Rs </h3>:<h3 className="font-bold">You have nothing in your cart.</h3>}
    </div>
  );
};

export default CartFoodItems;
