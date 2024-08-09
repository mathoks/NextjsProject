import React from "react";
import ProductBack from "@/app/ui/Buttons/ProductBack";
import { MoreVertOutlined } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { headers } from "next/headers";
import Footer from "@/app/ui/utilComp/Footer";

export async function getProductByIds(context) {
  if (!context) return;
  const { storeOwner, prodId } = context;
  const header = headers();
  const domain = header.get("host");
  const data = await fetch(
    `http://${domain}/api/store/${storeOwner}/product/${prodId}`
  );
  const product = await data.json();
  return product;
}

export default async function Layout({ children}) {
  return (
    <div className="flex flex-col space-y-6 text-[15px]  bg-white shadow-md">
      <header
        id="prod_header"
        className="z-50 fixed  space-y-1 flex flex-col  w-full bg-white"
      >
        <div className="h-[3rem] flex justify-between items-center bg-white  text-gray-950 p-4">
          <ProductBack />

          <p className="font-semibold text-lg">Product Information</p>

          <MoreVertOutlined color="primary" />
        </div>
        <Divider variant="fullWidth" />
      </header>

      <main className="bg-white">{children}</main>
      <footer className="bg-white h-16 ">
        <Footer />
      </footer>
    </div>
  );
}
