


import '@/app/globals.css'
import StoreProvider from "@/app/StoreProvider";
import Products from "@/app/ui/Products";
import { getRoutes } from "@/app/actions/users/getRoute";



export default async function page({searchParams}) {


  const usersList = await getRoutes()
  
  
  return (
   
    
    
    <StoreProvider>

      <section className="flex min-h-screen mt-0 flex-col mx-auto space-y-1">
      <div className="w-full p-4">
        <p className="text-gray-800 font-semibold text-base">Dealers Reel</p>
      </div>
        <div className="flex flex-col items-center">
           <Products data = {typeof usersList !== "undefined" ? JSON.parse(usersList): []}/>
            </div>
      </section>
      </StoreProvider>
      
    
  );
}

