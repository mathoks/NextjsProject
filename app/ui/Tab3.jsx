import { cookies } from "next/headers";
import React from "react";
import { locations } from "../lib/utills/allstates";
import { sortPrefernces } from "../lib/utills/productSort";

const Tab3 = ({ data }) => {
  const preferedMarkets = cookies().get("preMarkets");
  const preferedCountry = cookies().get("country");
   const ArrayMart = preferedMarkets !==  undefined ? JSON.parse(preferedMarkets.value) : [];
   console.log(ArrayMart, preferedCountry)
  if (ArrayMart.length === 0) 
    return <div className="p-4">
        <p>Market details not provided</p>
    </div>;
  const MatchedCountry = locations.find(
    ({country}) => country.toLowerCase() === preferedCountry.value.toLowerCase()
  );
  
  const MatchedMarkets = MatchedCountry.state.flatMap(
    ({ markets }) => markets
  ).map(({market})=> market);

  const Tank = sortPrefernces(ArrayMart, MatchedMarkets)
  
 
  const TabItems = Tank[1].map(( market , i) => {
    
   return (<li className="text-nowrap ring-1 px-2 py-1 rounded-full text-sm" value={market} key={i}>
      {market}
    </li>)
});
  return (
    
    <div className="w-[99vw] overflow-scroll">
    
      <ul className="w-[98vw] overflow-x-scroll flex space-x-4 items-center p-2 ">{TabItems}</ul>
    </div>
  );
};

export default Tab3;
