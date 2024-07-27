
import { useState } from "react";
import { useEffect } from "react";
import { restaurants } from "../utils/Res_dets";
import { Link, useNavigate  } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { useContext, useState } from "react";
import userContext from "../utils/userContext";
import Shimmer from "./Shimmer";
import Login from "./Login";



const Body =({filteredRestaurants}) =>{
    filteredRestaurants = filteredRestaurants || [];
    const[isLoading,setIsLoading]=useState(true);
    

    console.log("Restaurant ID:", restaurants.id);
    

    useEffect(() => {
      // Simulating a 2 seconds delay
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    },[]);

 


    console.log("body",filteredRestaurants.length);
    console.log("body",filteredRestaurants);
    
    
    return(
        <>
            {isLoading?(
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {Array.from({length:9}).map((_,index)=>(
                <Shimmer key={index} height={350} width={380} rounded />
            ))} </div>): (
          <div className="res-cards">
                {filteredRestaurants.map((restaurant) => {
                             console.log("Restaurant :", restaurant);
                          console.log("Restaurant ID:", restaurant.id);
                          return(
                          //   <div key={restaurant._id} onClick={() => handleCardClick(restaurant._id)}>
                          //   <RestaurantCard details={restaurant} />
                          // </div>  
                        
                  <Link to={`/restaurant/${restaurant._id}`}>
                    <RestaurantCard 
                        key={restaurant._id}  
                     details={restaurant} />
                     </Link>
                          );
})}
                </div>
        )}
         

       
      {/* <Login 
                isVisible={visible}
                onClose={closeModal}
                setLoggedIn={setLoggedIn}
                /> */}
    </>
    );

  };
export default Body;