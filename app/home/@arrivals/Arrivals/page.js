
import React from "react";
import { InboxOutlined} from "@mui/icons-material";
import { Divider } from "@mui/material";





// const page = () => {
  
//   return (
//     
//   );
// }





const page = () => {
  return (
    <section className="flex justify-between text-[12px] items-center bg-white text-black p-4 rounded-md mt-10  mx-4">
         <div className="flex  flex-col justify-center items-center ">
         <span>
             <InboxOutlined fontSize="medium" />
           </span>
           <span>Subscription</span>
         </div>
         <hr style={{borderLeft: '1px solid #ddd', height: '3rem'}}/>
           
         
         <div className="flex flex-col justify-center items-center">
           <span>
             <InboxOutlined fontSize="medium" />
           </span>
          <span>My Favorites</span>
         </div>
         <hr style={{borderLeft: '1px solid #ddd', height: '3rem'}}/>
           {/* <Divider variant="inset"  orientation="vertical" sx={{}}  flexItem/> */}
          
         <div className="flex flex-col justify-center items-center">
           <span>
             <InboxOutlined fontSize="medium" />
           </span>
           <span>Preference</span>
         </div>

        
         <hr style={{borderLeft: '1px solid #ddd', height: '3rem'}}/>
          
         <div className="flex flex-col justify-center items-center">
         <span>
             <InboxOutlined fontSize="medium"/>
           </span>
         <span>Viewed</span>
         </div>
      </section>
  )
}

export default page





