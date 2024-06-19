
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Nav from "../ui/Nav";
import { HeroPage } from "../ui/HeroPage";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";






const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function homeLayout({children, tab, arrivals}) {
    const session = await auth()
  
  
  if(session?.user){
    session.user = {
      name : session.user.name,
      email: session.user.email,
      image: session.user.image
    }
  }
  
  return (
   
    <>
     <SessionProvider baseUrl={"/api/auth"} session={session} >
      <header className="bg-[#6A0DAD] fixed top-0 z-50">
      
      <Nav/>
      
      </header>
      <main className="bg-[#6A0DAD] mt-28">
      <section>
        <HeroPage/>
      </section>
      <section className=" bg-slate-50 text-black flex flex-col space-y-1 w-[100vw]">
      {tab}
      </section>
      <section className=" bg-slate-50 text-black flex flex-col space-y-1 w-[100vw]">
      {arrivals}
      </section>
      <section>
      {children}
      </section>
     
      
      </main>
</SessionProvider>
      </>
    
  );
}
