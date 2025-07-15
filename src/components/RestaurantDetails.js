import { useParams } from "react-router-dom";
import { useState } from "react";
import {CDN_IMG_URL} from "../utils/constants/"
import { useContext } from "react";
import Shimmer from "./Shimmer";
import { IMG_URL } from "../utils/constants";
import restaurantMenu from "../utils/restaurantMenu";
import { CartContext } from "../utils/cartContext";



const RestaurantDetails = () => {
  const params=useParams();
  const { id } = useParams();

  const { addToCart ,cart} = useContext(CartContext);

  // const { menuData } = restaurantMenu(id);
  console.log("params:",params);
  console.log("id",id);

   const menu_data=restaurantMenu(id);
   console.log("menu_data",menu_data);
   if(menu_data===null)return <Shimmer/>;

   console.log("menu_data",menu_data);
   const itemCards = menu_data.length > 0 ? menu_data[0]?.menuItems : [];

   function handleAddItem(item) {
    console.log("Adding item to cart:", item);
    addToCart(item);
  
    // dispatch(addItem(item));
  }

  const getItemQuantity = (itemId) => {
    const cartItem = cart.find(item => item._id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="flex text-center">
            
    

      <div className="rest-menu-list">
        {itemCards.map((item) => (
          <div
            data-testid="foodItems"
            key={item._id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.name}</span>
                <span>
                  - ₹{item.price ? item.price / 100 : item.finalPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add+
                </button>
              </div>
              <img src={IMG_URL + item.imageID} className="w-40" alt={item.name}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetails;
