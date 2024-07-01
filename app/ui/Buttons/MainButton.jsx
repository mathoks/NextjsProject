"use client";
import { CircularProgress } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";


const MainButton = () => {
  const router = useRouter()
  const [child, setchild] = useState('loading..');
  const session = useSession();
  const user = session?.data?.user?.name
  const handleCreateStore = useCallback(
    (e) => {
      console.log(e)
      if (session?.status === "loading")
        setchild(<CircularProgress size={18} color="primary" className=" text-cyan-50 " />);
      if (session?.status === "authenticated") {
        setchild("OPEN A STORE");
         if(e?.target?.innerText === 'OPEN A STORE'){
          router.push(`/Dashboard/${user}/createstore/`)
        }
      }
      if (session?.status === "unauthenticated") {
        setchild("SIGN IN");

        if (e?.target?.innerText === 'SIGN IN') {
        signIn();
        }
      }
        
    },
    [session]
  );

  useEffect(() => {
    handleCreateStore();
  }, [handleCreateStore]);
  // #FF4500
  return (
    <button
      className="p-2 rounded bg-[#FF4500] text-sm text_shadow"
      onClick={handleCreateStore}
      title="hero"
      disabled= {session?.status === 'loading'}
    >
      {child}
    </button>
  );
};

export default MainButton;
