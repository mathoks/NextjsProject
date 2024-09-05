import React from "react";
import Reviews from "./utilComp/Reviews";
import { auth } from "@/auth";


const Page3 = async({data, prod}) => {
 
  // const data = [{review:"This is a great product it fits perfectly just as described ill definitely be buying some more i just hope you can deliver"},];
 
  return (
    <div className={`relative ${data.length > 0 ? "min-h-[18rem]" : ""}`}>
      <Reviews comment={data} prod={prod}/>
      
      <div className="absolute bottom-0 w-full"></div>
    </div>
  );
};

export default Page3;
