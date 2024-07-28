import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext, useState } from "react";
import userContext from "../utils/userContext";
import { CartContext } from "../utils/cartContext";

import Login from "./Login";


const Header=({ setCartOpen })=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const currentUser = useContext(userContext);
    const { cart } = useContext(CartContext)|| { cart: [] };

    console.log("cart", cart);
    console.log("cart-length", cart.length);
    console.log("logged", currentUser);
  
    const [visible, setVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const openModal = () => {
      setVisible(true);
    };
  
    const closeModal = () => {
      setVisible(false);
    };
  
    const setLoggedIn = (val) => {
      setIsLoggedIn(val);
    };
  
    const handleLogout = () => {
      setLoggedIn(false);
      localStorage.removeItem("accessToken");
    };
  

    return (
        <>
        <div className="navbar">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_mLV1R0U7LZxJXac9Yv5j8Aohtk-rzZO2A&usqp=CAU"></img>
               <ul className="navitems font-bold">
                <li className= "hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:focus:ring-blue-800"><Link to="/home">Home</Link></li>
                <li className= "hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:focus:ring-blue-800"><Link to="/about">AboutUs</Link></li>
                <li className= "hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:focus:ring-blue-800"><Link to="/help">Help</Link></li>
              
                <li>
            {isLoggedIn ? (
              <button className= "hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:focus:ring-blue-800" onClick={handleLogout}>Logout</button>
            ) : (
              <button
                className="block  text-black hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:white font-medium rounded-lg text-base px-5 py-2.5 text-center dark:focus:ring-blue-800"
                type="button"
                onClick={openModal}
              >
                Login
              </button>
            )}
          </li>

          <li className="relative">
            <button onClick={() => setCartOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-9 w-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <div className="absolute top-0 left-7 bg-red-500 text-white text-sm rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </div>
            </button>
          </li>
                </ul> 
                </div>   

                <Login 
                isVisible={visible}
                onClose={closeModal}
                setLoggedIn={setLoggedIn}
                />
                </>
        
    );
};

export default Header;