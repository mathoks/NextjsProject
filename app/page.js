


import '@/app/globals.css'


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
  // const session = await auth()
  // const usersList = await getRoutes()
  
  // if(session?.user){
  //   session.user = {
  //     name : session.user.name,
  //     email: session.user.email,
  //     image: session.user.image
  //   }
  // }

  return null
}
//   return (
    
//       <section className="flex min-h-screen mt-0 flex-col items-center">
//         <div className="mt-28 flex flex-col items-center">
           
//             <section>
//             <HeroPage/>
//             </section>
//             <section className=" bg-slate-50 text-black flex flex-col space-y-1 w-[100vw]">
//             <div className="p-4 pb-0 font-semibold text-lg"><p>Discount Sales</p></div>
//             <Suspense fallback={<ProdSkeleton/>}>
//               <Ads/>
//             </Suspense>
//           </section>
//              <section className="w-screen bg-slate-50 text-black flex flex-col space-y-1">
//              <div className="p-4 pb-0 font-semibold text-lg"><p>New Arrivals</p></div>
//             <Suspense fallback={"loading"}>
//               <Ads/>
//             </Suspense>
//           </section> 
//            <section>
           
          
//            <Products data = {typeof usersList !== "undefined" ? JSON.parse(usersList): []}/>
           
//            </section>
          
//             </div>
//       </section>
//   );
// }

