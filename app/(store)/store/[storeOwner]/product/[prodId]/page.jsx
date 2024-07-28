
import React from "react";
import { ProTab } from "@/app/ui/proTab";
import ProductPage1 from "@/app/ui/ProductPage1";
import { getProductByIds } from "./layout";
import Page2 from "@/app/ui/Page2";
import Page3 from "@/app/ui/Page3";
import { Page4 } from "@/app/ui/page4";


// function debounce(func, delay) {
//   let timeout;
//   return function debounced() {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func, delay);
//   };
// }

// let throttle = function (func, limit) {
//   let inthrottle;

//   return function () {
//     if (!inthrottle) {
//       debounce(func, 50);
//       inthrottle = true;
//       setTimeout(() => {
//         inthrottle = false;
//       }, limit);
//     }
//   };
// };


const Page = async({params}) => {
  
  const product = await getProductByIds(params)
  
  if(!product.data) return <div>Product not found</div>
  return (
    <div className=" bg-white flex flex-col ">
      <div className="">
        <ProTab/>
      </div>
      <div className=" bg-white flex flex-col space-y-4 mt-[4rem]">
      <div id="Overview" className="view"> 
        <ProductPage1 data = { product.data ||  {}} />
      </div>
      <div id= 'ProductDetails' data-id='ProductDetails' className=" bg-pink-400 view pt-4">
        <Page2/>
        <hr/>
      </div>
     
      <div id='ProductReviews' className="view bg-pink-400">
        <Page3/>
        <hr/>
      </div>
      
      <div id='ProductRecommended' className="view py-8 bg-pink-600">
        <Page4/>
      </div>

      </div>
      <div className="min-h-[5rem] bg-[#6A0DAD]">

      </div>
    </div>
  );
};

export default Page;
