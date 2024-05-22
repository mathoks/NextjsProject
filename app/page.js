"use client";
import Image from "next/image";
import Button from "@/app/ui/button";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import Products from "./ui/Products";
import { HeroPage } from "./ui/HeroPage";

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return children;
}
export default function Home({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps?.session}>
      <section className="flex min-h-screen flex-col items-center justify-between space-y-2">
        
        
          {Component?.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (<div className="mt-28 ">
           <HeroPage/>
           
            <Products/>
            </div>
          )}
        
      </section>
    </SessionProvider>
  );
}
