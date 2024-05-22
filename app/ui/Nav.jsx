import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/photo1.jpeg"
import MoreVertIcon from '@mui/icons-material/MoreVert';


export const Nav = () => {
  return (
    <nav className=" bg-slate-900 pb-4 fixed w-full z-50" >
    <div className="sm: flex flex-col space-y-4  md:flex items-center justify-center p-4">
    <section>
      <Link href={"#"} className="flex  gap-4 items-center">
      <p>Mymart</p>
      <Image
        src={Logo}
        alt="logo"
        width={20}
        height={20}
        className="rounded-full"
      />
      </Link>
      </section>
      <section>
      <div className="md:flex">
        <input placeholder="find here" className="placeholder:text-center text-zinc-950 rounded-sm pl-2"/>
      </div>
      </section>
      {/* <section className="md:hidden  text-center mt--10" >
      
        <input className="rounded"/>
      
      </section> */}
      </div>
    </nav>
  );
};
