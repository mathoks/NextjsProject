import React from "react";
import { ProTab } from "@/app/ui/proTab";
import ProductPage1 from "@/app/ui/ProductPage1";
import { getProductByIds } from "./layout";
import Page2 from "@/app/ui/Page2";
import Page3 from "@/app/ui/Page3";
import { Page4 } from "@/app/ui/page4";
import Hints from "@/app/ui/utilComp/Hints";
import RelPost from "@/app/ui/utilComp/RelPost";

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

const Page = async ({ params }) => {
  const product = await getProductByIds(params);

  if (!product.data) return <div>Product not found</div>;
  return (
    <>
      <ProTab data={product.data || {}} />
      <div className=" bg-white flex flex-col space-y-4 mt-[4rem]">
        <div id="Overview" className="view space-y-2">
          <ProductPage1 data={product.data || {}} />
          <hr />
        </div>
        <div
          id="ProductDetails"
          data-id="ProductDetails"
          className=" space-y-4 view pt-4"
        >
          <h1 className="text-lg font-semibold px-4">Product Details</h1>
          <div className=" bg-orange-100 h-fit overflow-y-scroll">
            <Page2 data={product?.data?.attribute || {}} />
            <Hints cat={product?.data?.category || null} />
          </div>
          <hr />
        </div>

        <div id="ProductReviews" className="view">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold px-4">Product Reviews</h1>
            <button className="text-blue-500 px-4 py-2 ">write a review</button>
          </div>

          <Page3 />
          <hr />
        </div>

        <div id="ProductRecommended" className="view py-8">
          <h1 className="text-lg font-semibold px-4">Similar Products</h1>

          <Page4 />
        </div>
      </div>
      <div className="min-h-[5rem]"></div>
    </>
  );
};

export default Page;
