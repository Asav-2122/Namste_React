// import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { removeProduct,addProduct } from "../redux/cartSlice";

const CartFoodItems = ({ products }) => {
  // const foodItems = useSelector((store)=>store.cart.products);
  let totalPrice = Object.keys(products).reduce(function (previous, key) {
    return previous + (products[key].count*(products[key].price/100));
}, 0);

 const dispatch= useDispatch();

 const handleRemoveItem=(id)=>{
      dispatch(removeProduct(id));
 }
 const handleProductCountIncrement=(item)=>{
      dispatch(addProduct({item}))
 }

  return (
    <div className="min-h-max w-63 border-2 border-black  justify-center">
      <div>
        {Object.entries(products).map((item,index) => {
          return (
            <ul key={item[1].id}>
             {/* { console.log(items[1].name)} */}
              <li>
                {item[1].name}- {item[1].price / 100+" Rs"} <button className="m-1 p-1 bg-red-600 rounded-md" onClick={()=>handleRemoveItem(item[1].id)}>-</button>{item[1].count}
                <button className="m-1 p-1 bg-green-400 rounded-md" onClick={()=>handleProductCountIncrement(item[1])}>+</button>
              </li>
            </ul>
          );
        })}
      </div>

     {Object.keys(products).length>=1 ? <h3 className="font-bold">TotalPrice: {totalPrice} Rs </h3>:<h3 className="font-bold">You have nothing in your cart.</h3>}
    </div>
  );
};

export default CartFoodItems;
