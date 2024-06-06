import React from "react";
import ProductBack from "@/app/ui/Buttons/ProductBack";
import { MoreVertOutlined } from "@mui/icons-material";




export default async function Layout({ children }) {
    
  return (
    <div>
      <header>
        <div className="h-16 flex justify-between items-center fixed bg-white w-full text-gray-950 p-4">
          <ProductBack/>
          <div>
            <p className=" text-sm font-semibold">Product Information</p>
          </div>
          <div>
            <MoreVertOutlined color="primary" />
          </div>
        </div>
      </header>
      <main>{children}</main>
      
      
    </div>
  );
}
