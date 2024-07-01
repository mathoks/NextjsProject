
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Nav from "../ui/Nav";
import { HeroPage } from "../ui/HeroPage";
import Footer from "../ui/utilComp/Footer";
import { SessionProvider } from "next-auth/react";






const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome To Mymart",
  description: "Generated by create next app",
};

export default async function homeLayout({children, tab, arrivals, ...rest}) {
 
  
  
//   if(session?.user){
//     session.user = {
//       name : session.user.name,
//       email: session.user.email,
//       image: session.user.image
//     }
//   }
  
  return (
   
    <>
      <SessionProvider baseUrl={"/api/auth"}>
      <header className="bg-[#6A0DAD] fixed  top-0 z-50">
      
      <Nav/>
      
      </header>
      <section className="bg-[#6A0DAD] pt-28">
        <HeroPage/>
      </section>
      <main className="">
      <section className=" bg-slate-50 text-black flex flex-col space-y-1 w-[100vw]">
      {tab}
      </section>
      <section className=" bg-slate-50 text-black flex flex-col space-y-1 w-[100vw]">
      {arrivals}
      </section>
      <section>
      {children}
      </section>
      <Footer/>
      
      
      </main>
      </SessionProvider>
      </>
    
  );
}
