import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import CartFoodItems from "./CartFoodItems";


const Cart=()=>{
   const products = useSelector((store)=>store.cart.products);
   const dispatch = useDispatch();
   const handleClearCart=()=>{
     dispatch(clearCart())
   }
    return(
        <div>
            {Object.keys(products).length>0 && <button type="button" onClick={handleClearCart} className="text-red-700 absolute right-0 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Clear Cart</button>}
           
            <CartFoodItems products={products} />
        </div>
    )
}

export default Cart;