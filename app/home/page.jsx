


import '@/app/globals.css'
import StoreProvider from "@/app/StoreProvider";
import Products from "@/app/ui/Products";
import { getRoutes } from "@/app/actions/users/getRoute";
import { auth } from '@/auth';


export default async function page(Props) {

  console.log(Props)
  const usersList = await getRoutes()
  
  
  return (
   
    
    
    <StoreProvider>
      <section className="flex min-h-screen mt-0 flex-col items-center">
        <div className="flex flex-col items-center">
         
           <section>
           
          
           <Products data = {typeof usersList !== "undefined" ? JSON.parse(usersList): []}/>
           
           </section>
          
            </div>
      </section>
      </StoreProvider>
      
    
  );
}

