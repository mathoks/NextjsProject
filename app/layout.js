import { Inter } from "next/font/google";
import "@/app/globals.css";
import StoreProvider from "./StoreProvider";
import ButtomNav from "./ui/buttomNav";
import { SessionProvider } from "next-auth/react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function Layout({ children }) {
  return (
    <html lang="en">
      
          <body className={`${inter.className}  overflow-x-clip h-fit bg-slate-50`}>
          <SessionProvider baseUrl={"/api/auth"}>
        <StoreProvider>
            <AppRouterCacheProvider>
              <main>{children}</main>
              <footer className="bottom-0 static">
                <ButtomNav />
              </footer>
            </AppRouterCacheProvider>
            </StoreProvider>
            </SessionProvider>
          </body>
       
    </html>
  );
}
