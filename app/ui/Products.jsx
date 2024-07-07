import React, { Suspense } from "react";
import Usercard from "./Usercard";
import { ProdSkeleton } from "./Buttons/ProdSkeleton";

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
   
    <section className="flex flex-col bg-slate-50 p-1">
      <Suspense fallback={<ProdSkeleton/>}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 last:pb-0 lg:gap-2">
      
        {data.map((user, index) => (
          
          <Usercard key={index} {...user} />
        ))}
      </div>
      </Suspense>
    </section>
    
  );
};

export default Products;
