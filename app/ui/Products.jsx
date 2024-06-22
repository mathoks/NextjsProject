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
   
    <section className="flex flex-col bg-slate-50 pl-4 pr-4 pb-2 pt-4">
      <div className="w-full p-4 bg-white">
        <p className="text-gray-800 font-semibold text-lg">Dealers Reel</p>
      </div>
      <Suspense fallback={<ProdSkeleton/>}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center first:pt-4 gap-2 last:pb-0">
        {data.map((user, index) => (
          
          <Usercard key={index} {...user} />
        ))}
      </div>
      </Suspense>
    </section>
    
  );
};

export default Products;
