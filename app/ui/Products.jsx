import React, { memo, Suspense } from "react";
import Usercard from "./Usercard";
import { ProdSkeleton } from "./Buttons/ProdSkeleton";
import { productSort } from "../lib/utills/productSort";
import { is } from "immutable";

/**
 * @component - The Products component
 * @param {object} data - Array of user data objects to display.
 * @returns {jsx} The rendered component.
 */
const Products = memo(function MappedP({ data }){
  if (data === null || data.length === 0) {
    return <ProdSkeleton />; // Show skeleton if no data
  }
 
  return (
   
    
      <Suspense  fallback={<ProdSkeleton/>}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-1 last:pb-0 lg:gap-2 md:px-8">
      
        {productSort(data).map((user, index) => (
      
          <Usercard key={index} {...user} />
         
        ))}
      </div>
      </Suspense>
    
    
  );
},(prev, next)=>is(prev.data, next.data));

export default Products;
