import React from "react";
import WriteReview from "./uiForms/WriteReview";
import Reviews from "./utilComp/Reviews";


const Page3 = () => {
  const data = [{review:"This is a great product it fits perfectly just as described ill definitely be buying some more i just hope you can deliver"},];
  if (!data.length)
    return <p className="p-4">No Reviews yet be the first to drop a review</p>;
  return (
    <div className="relative min-h-[18rem]">
      <Reviews reviews={data} />

      <div className="absolute bottom-0 w-full"></div>
    </div>
  );
};

export default Page3;
