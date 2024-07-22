import React from "react";
import ProductBack from "@/app/ui/Buttons/ProductBack";
import { MoreVertOutlined } from "@mui/icons-material";
import { headers } from "next/headers";





export async function getProductByIds(context) {

  if(!context) return
  const { storeOwner, prodId } = context;
  const header = headers()
  const domain = header.get("host");
  const data = await fetch(`http://${domain}/api/store/${storeOwner}/product/${prodId}`)
  const product = await data.json()
  return  product
}
 


export default async function Layout({ children, ...rest }) {
  
  return (
    <div className="flex flex-col space-y-2 text-sm pb-12">
      <header className="z-50 fixed top-0">
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
