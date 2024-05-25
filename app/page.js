
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import Products from "./ui/Products";
import { HeroPage } from "./ui/HeroPage";
import { auth } from "@/auth";
import Tab from "./ui/Tab";

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
  if(session?.user){
    session.user = {
      name : session.user.name,
      email: session.user.email,
      image: session.user.image
    }
  }
  return (
    <SessionProvider baseUrl={"/api/auth"} session={session}>
      <section className="flex min-h-screen flex-col items-center space-y-1 w-full">
        <div className="mt-28 flex flex-col space-y-1 items-center">
           
            <section>
            <HeroPage/>
            </section>
           <section className="bg-white ">
           <Products/>
           </section>
          
            </div>
      </section>
    </SessionProvider>
  );
}
