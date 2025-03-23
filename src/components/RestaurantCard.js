import { restaurants } from "../utils/Res_dets";
import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const RestaurantCard=(props)=>{
    // console.log("props",props);
    // const{name = 'Unknown', cuisines = 'Unknown', avgRating = '-', images = '', costForTwoString = '-' } = props.details || {};
    const{name,cuisines,avgRating,costForTwoString,cloudinaryImageId,deliveryTime}=props.details;
    console.log("deliveryTime"+deliveryTime);
    return(
        <div className="res-card flex flex-col w-380 h-350 rounded-2xl mb-15 relative">
            
            <div className="res-image w-95% h-60%">
                <img className="res-img m-2 w-full h-90% relative rounded-lg z-[-1]" src={`${IMG_URL}${cloudinaryImageId}`} alt="Restaurant Image"></img>

        
             <div className="float-container">

                <div className="delivery-time">
                <span>{deliveryTime}min </span>
                <span><img className="clock" width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/alarm-clock--v2.png" alt="alarm-clock--v2"/></span>
                </div>
               
                <div className="open_menu">
                    <button className="menu-button">
                    <span>Open Menu</span>
                    <span><img className="menu-arrow" width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/sort-right.png" alt="sort-right"/></span>
                    </button>   
                </div>
              
             </div>
            
            </div>
            
            
            <div className="res-details">
            <div>
            <h2>{name}</h2>
            <h3 className="cuisines">{cuisines}</h3>

            </div>
            <div>
            <h3>{avgRating}</h3>
            <h3>{costForTwoString}</h3> 
            </div>
            </div>

        </div>
    );
};

export default RestaurantCard;