import ButtomNav from "@/app/ui/buttomNav";
import { ArrowBack, More } from "@mui/icons-material";
import React from "react";

export default async function Layout({ children }) {
  return (
    <div>
      <header>
        <div className="h-16 flex justify-between items-center fixed bg-white w-full text-gray-950 p-4">
          <div>
            <ArrowBack />
          </div>
          <div>
            <p className=" text-xl font-semibold">Product Information</p>
          </div>
          <div>
            <More />
          </div>
        </div>
      </header>
      <main>{children}</main>
      
      
    </div>
  );
}
