import React, { Suspense } from "react";
import Usercard from "./Usercard";
import { ProdSkeleton } from "./Buttons/ProdSkeleton";
import { productSort } from "../lib/utills/productSort";

/**
 * @component - The Products component
 * @param {object} data - Array of user data objects to display.
 * @returns {jsx} The rendered component.
 */
const Products = ({ data }) => {
  if (!data || !data.length) {
    return <ProdSkeleton />; // Show skeleton if no data
  }
 
  return (
   
    <section className="flex flex-col py-1 md:px-8">
      <Suspense fallback={<ProdSkeleton/>}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-1 last:pb-0 lg:gap-2">
      
        {productSort(data).map((user, index) => (
      
          <Usercard key={index} {...user} />
         
        ))}
      </div>
      </Suspense>
    </section>
    
  );
};

export default Products;
