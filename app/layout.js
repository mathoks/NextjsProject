
import { Inter } from "next/font/google";
import "@/app/globals.css";
import StoreProvider from "./StoreProvider";
import ButtomNav from "./ui/buttomNav";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";






const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function Layout({children}) {
  
  // const session = await auth()
  const session = {
    user: {
      name : 'paul'
    }
  }
  
  
  return (
    <html lang="en">
    <SessionProvider baseUrl={"/api/auth"} >
      <StoreProvider>
      
      <body className={`${inter.className} w-full overflow-x-clip h-screen`}>
      
      <main>
      {children}
      </main>
      <footer className="bg-[#4f08ed] w-full bottom-0 static">
        
          <ButtomNav/>
        
      </footer>
      </body>
      
      </StoreProvider>
      </SessionProvider>
    </html>
  );
}
