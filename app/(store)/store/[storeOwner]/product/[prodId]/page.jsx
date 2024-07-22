
import React from "react";
import { ProTab } from "@/app/ui/proTab";
import ProductPage1 from "@/app/ui/ProductPage1";
import { getProductByIds } from "./layout";

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
    <div className=" bg-white flex flex-col">
      {/* <div className="">
        <ProTab visi={null} index={null} />
      </div> */}
      <div className="mt-16">
        
        <ProductPage1 data = { product.data ||  {}} />
      </div>
    </div>
  );
};

export default Page;
