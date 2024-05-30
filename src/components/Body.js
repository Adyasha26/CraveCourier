
import { useState } from "react";
import { useEffect } from "react";
import { restaurants } from "../../utils/Res_dets";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";



const Body =({filteredRestaurants}) =>{
    filteredRestaurants = filteredRestaurants || [];
    const[isLoading,setIsLoading]=useState(true);

    useEffect(() => {
        // Simulating data fetching delay with setTimeout
        const fetchData = () => {
          setTimeout(() => {
            setIsLoading(false);
          }, 1000); // Simulating 2 seconds delay
        };
    
        fetchData();
      }, []);
    console.log("body",filteredRestaurants.length);
    console.log("body",filteredRestaurants);
    return(
        <>
      
            <div className="res-cards">
            {isLoading?
            (Array.from({length:9}).map(()=>(
                <Shimmer height={350} width={380} rounded />
            ))
        ) : (
              
                filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} details={restaurant} />
                ))
           
        )}
         </div>
    </>
    );
};

export default Body;