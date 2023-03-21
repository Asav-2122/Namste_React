// import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { removeProduct, addProduct } from "../redux/cartSlice";
import { IMG_CDN_URL } from "../constant";
const CartFoodItems = ({ products }) => {
  // const foodItems = useSelector((store)=>store.cart.products);
  let totalPrice = Object.keys(products).reduce(function (previous, key) {
    return previous + products[key].count * (products[key].price / 100);
  }, 0);

  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeProduct(id));
  };
  const handleProductCountIncrement = (item) => {
    dispatch(addProduct({ item }));
  };

  return (
    <div className="min-h-max w-[75vw] flex justify-center  gap-52 mt-5">
      <div>
        {Object.entries(products).map((item, index) => {
          return (
            <div key={item[1].id}>
            <div className="flex gap-8 my-4 h-[18%] justify-center" >
              <img
                src={IMG_CDN_URL + item[1].imageId}
                alt="Food-Image"
                className="w-[20%] h-full rounded-md"
              />
              <div className="flex flex-col justify-center  items-center w-[25%] h-auto">
              <span className="w-full text-center font-semibold">{item[1].name}</span>
              <span className="w-full text-center font-semibold">{item[1].price / 100 + " Rs"}</span>
              
              

              <button className="bg-red-600 text-white rounded-md w-20 flex justify-evenly py-1">
                    <span onClick={() =>handleRemoveItem(item[1].id)}>-</span>
                    <span>{item[1]?.count}</span>
                    <span onClick={() =>handleProductCountIncrement(item[1])}>+</span>
                  </button>
              </div>
            </div>
             <hr/>
             </div>
          );
        })}
       
      </div>
       <div >
      {Object.keys(products).length >= 1 ? (
        <div className="h-auto w-auto flex flex-col justify-center items-center gap-3">
            <h3 className="font-bold">TotalPrice: {Math.round(totalPrice)}Rs </h3>
            <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Place Your Order</button>
        </div>
       
      ) : (
        <div className="flex flex-col justify-center items-center gap-3 h-[76.5vh]">
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="empty-cart" className="h-96"/>
          <h3 className="font-bold text-xl">You have nothing in your cart.</h3>
        </div>
      )}
      </div>
    </div>
  );
};

export default CartFoodItems;
