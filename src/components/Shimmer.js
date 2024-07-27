import React from "react";

const Shimmer=({ })=>{
return(
  <div className="shimmers-card flex flex-col w-380 h-350 rounded-2xl mb-15 relative">
  <div class="shimmer-card">
    <div class="shimmerBG media"></div>
     <div class="p-12">
       <div class="shimmerBG title-line"></div>
       <div class="shimmerBG title-line end"></div>
    </div>
    <div class="shimmerBG content-line m-t-24"></div>
    <div class="shimmerBG content-line"></div>
  </div>
  </div>
);
};

export default Shimmer;