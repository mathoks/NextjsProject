


import '@/app/globals.css'
import StoreProvider from "@/app/StoreProvider";
import Products from "@/app/ui/Products";
import { getStores } from '../lib/actions/getStores';



export default async function page({searchParams}) {


  // const usersList = await getRoutes()
  const stores = await getStores()
  
  return (
   
    // typeof usersList !== "undefined" ? JSON.parse(usersList): []
    
    <StoreProvider>

      <section className="flex min-h-screen  flex-col mx-auto space-y-1">
     
        <p className="text-gray-800 font-semibold text-base p-4">Dealers Reel</p>
     
       
           <Products data = {stores}/>
           
      </section>
      </StoreProvider>
      
    
  );
}

