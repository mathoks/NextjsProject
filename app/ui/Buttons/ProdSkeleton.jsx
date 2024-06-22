import * as React from "react";
import Skeleton from "@mui/material/Skeleton";

const Skeletons = function () {
  return (
    <div className="w-screen p-4 bg-white">
      <span className="flex items-start justify-between"
      >
        <Skeleton animation="pulse" variant="circular" width={40} height={40} />
        <span className="flex flex-col space-y-1 w-72">
          <Skeleton animation="pulse" variant="text" sx={{ fontSize: "1rem"}} />
          <Skeleton animation="pulse" variant="text" sx={{ fontSize: "2rem" }} />
        </span>

        <span className="flex flex-col space-y-1">
          <Skeleton animation="pulse" variant="circular" width={5} height={5} />
          <Skeleton animation="pulse" variant="circular" width={5} height={5} />
          <Skeleton animation="pulse" variant="circular" width={5} height={5} />
        </span>
      </span>
      <span className="flex flex-col space-y-4">
        <span className="flex flex-col">
          <span className="flex items-start justify-between p-4">
            <span className="flex flex-col space-y-2">
              <Skeleton animation="pulse" variant="rectangular" width={180} height={150} />
              <span>
                <span className="flex items-center justify-between ">
                  <Skeleton animation="pulse" variant="text" sx={{ fontSize: "0.5rem", width: "3rem"}} />
                  <Skeleton animation="pulse" variant="text" sx={{ fontSize: "0.5rem", width: "2rem" }} />
                </span>
                <span>
                  <Skeleton animation="pulse" variant="text" sx={{ fontSize: "0.5rem" , width: "5rem" }} />
                </span>
              </span>
            </span>
    
            <span className="flex flex-col space-y-1 w-40 pr-2">
          <Skeleton animation="pulse" variant="text" sx={{ fontSize: "2rem"}} />
          <Skeleton animation="pulse" variant="text" sx={{ fontSize: "5rem" }} />
        
            </span>
          </span>
          <span className="mx-auto pt-2">
              <span className="flex space-x-1">
                <Skeleton animation="pulse" variant="circular" width={5} height={5} />
                <Skeleton  animation="pulse" variant="circular" width={5} height={5}  />
                <Skeleton animation="pulse" variant="circular" width={5} height={5} />
              </span>
            </span>
          <span className="flex justify-end ">
            <Skeleton animation="pulse" variant="text" sx={{ fontSize: "0.5rem", width: "4rem"}} />
          </span>
        </span>
      </span>
    </div>
  );
};

export const ProdSkeleton = function(){
  return(
    Array.from(new Array(5)).map((_, index) => (
      <Skeletons key={index} />
    ))
  )
}
