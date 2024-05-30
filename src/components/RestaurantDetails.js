import { useParams } from "react-router-dom";

const RestaurantDetails=()=>{
    const params= useParams();

    console.log(params);
    return(
        <>
        
        <h1>RestaurantDetails</h1>
        <h2>Restaurant Id:{params.id}</h2>
        
        
        
        </>
    
    
   

    );
};

export default RestaurantDetails;