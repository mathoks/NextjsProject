


import '@/app/globals.css'
import { Suspense } from "react";
import StoreProvider from "@/app/StoreProvider";
import Products from "@/app/ui/Products";
import { getRoutes } from "@/app/actions/users/getRoute";
import Ads from "@/app/ui/adds";


export default async function page() {
  

  const usersList = await getRoutes()
  
  
  return (
   
    
    
    <StoreProvider>
      <section className="flex min-h-screen mt-0 flex-col items-center">
        <div className="mt-28 flex flex-col items-center">
            
           <section>
           
          
           <Products data = {typeof usersList !== "undefined" ? JSON.parse(usersList): []}/>
           
           </section>
          
            </div>
      </section>
      </StoreProvider>
      
    
  );
}

