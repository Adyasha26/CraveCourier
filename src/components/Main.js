import { restaurants } from "../../utils/Res_dets";
import RestaurantCard from "./RestaurantCard";
import Body from "./Body";
import { useState } from "react";
import FilterButton from "./FilterButton";

const Main= ()=>{
  const[searchText,setSearchText]=useState("");
  const[filteredRestaurants,setFilteredRestaurnats]=useState(restaurants);


  function filterRestaurants(){
    const filteredData= restaurants.filter((restaurant)=>
    restaurant.name.toLowerCase().includes(searchText.toLowerCase())
  );

  setFilteredRestaurnats(filteredData);

   console.log("In main file");
  }

   function filterTopRatedRestaurants(restaurants){
    setFilteredRestaurnats(restaurants);
   }

   function filterFastDeliveryRestaurants(restaurants){
    setFilteredRestaurnats(restaurants);
   }

   function filterlLowPriceRestaurants(restaurants){
    setFilteredRestaurnats(restaurants);
   }
   
  
    return(
         <>
         <div className="main-conatiner">
            <img className="mainimg" src="https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food-2048x1366.jpg"></img>
            <h1 className="text-img">Discover the delicious food </h1><br></br>
            <div className="searchBar">
            <input type="search mt-15" placeholder="  Search for a restaurant, cuisine or a dish"
             onChange={(e)=>setSearchText(e.target.value)}
             />
           
           
            <img src="https://cdn-icons-png.flaticon.com/128/3686/3686896.png" className="srchicon"
             onClick={filterRestaurants}
                />
           
           
            </div>

         </div>
         
        
         <FilterButton
                filterTopRatedRestaurants={filterTopRatedRestaurants}
                filterFastDeliveryRestaurants={filterFastDeliveryRestaurants}
                filterlLowPriceRestaurants={filterlLowPriceRestaurants}
            />
         <Body filteredRestaurants={filteredRestaurants}/>
       
         </>
        
    );
};

export default Main;