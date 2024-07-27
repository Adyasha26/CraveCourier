import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext, useState } from "react";
import userContext from "../utils/userContext";
import { CartContext } from "../utils/cartContext";
import Login from "./Login";


const Header=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const currentUser = useContext(userContext);
    const { cart } = useContext(CartContext)|| { cart: [] };;
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
               <ul className="navitems">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">AboutUs</Link></li>
                <li><Link to="/contact">ContactUs</Link></li>
                <li><Link to="/cart">Cart- {cart.length} items</Link></li>
                <li>
            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <button
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={openModal}
              >
                Login
              </button>
            )}
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