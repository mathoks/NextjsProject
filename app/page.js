
import { SessionProvider } from "next-auth/react";

import { auth } from "@/auth";

import '@/app/globals.css'
import { Suspense } from "react";
import { HeroPage } from "@/app/ui/HeroPage";
import Loading from "@/app/loading";
import StoreProvider from "@/app/StoreProvider";
import Products from "@/app/ui/Products";
import { getUsers } from "./actions/users/getUsers";
import { getRoutes } from "./actions/users/getRoute";


// function Auth({ children }) {
//   // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
//   const { status } = useSession({ required: true });

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   return children;
// }
// export default function Home({ Component, pageProps }) {
//   return (
//     <SessionProvider session={pageProps?.session}>
//       <section className="flex min-h-screen flex-col items-center justify-between space-y-2">
        
        
//           {Component?.auth ? (
//             <Auth>
//               <Component {...pageProps} />
//             </Auth>
//           ) : (<div className="mt-28 ">
//            <HeroPage/>
           
//             <Products/>
//             </div>
//           )}
        
//       </section>
//     </SessionProvider>
//   );
// }

// function Auth({ children }) {
//   // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
//   const { status } = useSession({ required: true });

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   return children;
// }

export default async function Home() {
  const session = await auth()
  const usersList = await getRoutes()
  console.log(usersList)
  if(session?.user){
    session.user = {
      name : session.user.name,
      email: session.user.email,
      image: session.user.image
    }
  }

  return (
    <SessionProvider baseUrl={"/api/auth"} session={session} >
    
    
    <StoreProvider>
      <section className="flex min-h-screen flex-col items-center space-y-1 w-full bg-gray-400">
        <div className="mt-28 flex flex-col space-y-1 items-center">
           
            <section>
            <HeroPage/>
            </section>
            <section className="h-14 bg-white w-full flex justify-center items-center">
            <Suspense fallback={<p>hhhhh</p>}>
              <p className=" text-gray-900">advert Panel</p>
            </Suspense>
          </section>
           <section className="bg-white ">
           
            <Suspense fallback={<Loading/>}>
           <Products users={usersList}/>
           </Suspense>
           </section>
          
            </div>
      </section>
      </StoreProvider>
      
    </SessionProvider>
  );
}

