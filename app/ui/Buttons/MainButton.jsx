"use client";
import { CircularProgress } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import React, { useCallback, useEffect, useState } from "react";


const MainButton = () => {
  const [child, setchild] = useState('loading..');
  const session = useSession();

  const handleCreateStore = useCallback(
    (e) => {
      if (session?.status === "loading")
        setchild(<CircularProgress size={18} color="primary" className=" text-cyan-50 " />);
      if (session?.status === "authenticated") setchild("OPEN A STORE");
      if (session?.status === "unauthenticated") {
        setchild("SIGN IN");

        if (e?.target) {
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
