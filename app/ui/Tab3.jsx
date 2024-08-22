import { cookies } from "next/headers";
import React from "react";
import { locations } from "../lib/utills/allstates";
import { sortPrefernces } from "../lib/utills/productSort";

const Tab3 = () => {
  const preferedMarkets = cookies().get("preMarkets");
  const preferedCountry = cookies().get("country");
  const ArrayMart =
    preferedMarkets !== undefined ? JSON.parse(preferedMarkets.value) : [];

  if (ArrayMart.length === 0)
    return <p className="py-4 text-slate-950">Market details not provided</p>;
  const MatchedCountry = locations.find(
    ({ country }) =>
      country.toLowerCase() === preferedCountry.value.toLowerCase()
  );

  const MatchedMarkets = MatchedCountry.state
    .flatMap(({ markets }) => markets)
    .map(({ market }) => market);

  const Tank = sortPrefernces(ArrayMart, MatchedMarkets);
  const TabItems =Tank[1].map((market, i) => {

    return (
      <li
        className="text-nowrap ring-1 px-2 py-1 rounded-full text-sm"
        value={market}
        key={i}
      >
        {market}
      </li>
    );
  });
  return (
    <ul className="w-[95vw] overflow-x-scroll flex space-x-4 items-center py-2 px-1">
      {TabItems}
    </ul>
  );
};

export default Tab3;
