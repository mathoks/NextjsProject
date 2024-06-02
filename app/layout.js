
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Nav from "@/app/ui/Nav";
import ButtomNav from "@/app/ui/buttomNav";
import StoreProvider from "@/app/StoreProvider";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {

  //const pathname = await getRoute()
  return (
    <html lang="en">
      {/* <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{inter.css}</style>
      </head> */}
      <body className={inter.className}>
      
      <header>
      <StoreProvider>
      <Nav/>
      </StoreProvider>
      </header>
      <main>
      {children}
      </main>
      <footer className="static bottom-0">
        <div>
          <ButtomNav/>
        </div>
      </footer>
      </body>
    </html>
  );
}
