import { useState } from "react";
import { useEffect } from "react";
import { REST_MENU_API } from "./constants";
import { restaurants } from "./Res_dets";

const restaurantMenu=(id)=>{
    const [menuData,setMenuData]=useState(null);
    console.log("id",id);

    const accessToken=localStorage.getItem("accessToken");
     
    useEffect(()=>{
        fetchData();
    },[]);


    const fetchData=async()=>{
        const data=await fetch(REST_MENU_API+id,{
            headers:{
                Authorization:`JWT ${accessToken}`
            }
        }

        );
             console.log("id",id);
            const json=await data.json(); 
             setMenuData(json);
            console.log("json",json);

            };
            console.log("menuData",menuData);
             return menuData;
        };
       
        
  
export default restaurantMenu;