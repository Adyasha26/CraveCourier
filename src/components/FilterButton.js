import { restaurants } from "../../utils/Res_dets";

const FilterButton=(props)=>{
    function getTopRatedRestaurants(){
        const topRatedRestaurants = restaurants.filter((restaurant) => parseFloat(restaurant.avgRating) > 4);
        props.filterTopRatedRestaurants(topRatedRestaurants);  
        console.log(topRatedRestaurants);
       
    }
    
    function getFastDelivery(){
        const FastDelivery=restaurants.filter((restaurant)=>restaurant.deliveryTime<30);
        props.filterFastDeliveryRestaurants(FastDelivery);  
        console.log("Fast Delivery",FastDelivery);
    }

    function getPrices(){
        const prices=restaurants.filter((restaurant)=>restaurant.costForTwo<=100000);
        props.filterlLowPriceRestaurants(prices);  
        console.log("prices",prices);
    }
    return (
    <>
     <h1 className="head-text">Explore curated lists of top restaurants</h1>
        <div className="filter-Button flex justify-evenly items-center m-10">
        <span><button onClick={getTopRatedRestaurants}>Rating 4+</button></span>
        <span><button onClick={getFastDelivery}>Fast Delivery</button></span>
        <span><button onClick={getPrices}>Prices</button></span>
        </div>

    </>
    );
};
export default FilterButton;