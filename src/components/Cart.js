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

            <h1 className="font-bold text-lg">You have {products.length} Food Items In Your Cart.</h1>
            <button className="p-2 m-2 bg-slate-400 rounded-md" onClick={handleClearCart}>Clear Cart</button>
            <CartFoodItems products={products}/>
        </div>
    )
}

export default Cart;