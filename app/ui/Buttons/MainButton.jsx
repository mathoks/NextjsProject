"use client";
import { getStoreStatus } from "@/app/actions/users/getStoreStatus";
import { CircularProgress } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";


const MainButton = () => {
  const router = useRouter()
  const [child, setchild] = useState('loading..');
  const session = useSession();
  const user = session?.data?.user?.name
  const handleCreateStore = useCallback(
    (e) => {
    
      if (session?.status === "loading")
        setchild(<CircularProgress size={18} color="primary" className=" text-cyan-50 " />);
        
         if(e?.target?.innerText === 'OPEN A STORE'){
          router.push(`/Dashboard/${user}/createstore`)
        }
         if(e?.target?.innerText === 'ADD A PRODUCT'){
          router.push(`Dashboard/${encodeURIComponent(user)}/settings/product`)
        }
        if (e?.target?.innerText === 'SIGN IN') {
        signIn();
        }    
    },
    [session.status]
  );

  useEffect(() => {
    async function checkHasStore() {
      if (session?.data?.user?.id && session.status === "authenticated") {
        const status = localStorage.getItem("hasStore");
        if (status === null) {
          const hasStore = await getStoreStatus(session?.data?.user?.id);
          console.log(hasStore, status);
          if (hasStore.data !== null) {
            localStorage.setItem("hasStore", hasStore.data);
            if (hasStore.data) setchild("ADD A PRODUCT");
            else setchild("OPEN A STORE");
          }
          return;
        }
       else if(status)
        setchild("ADD A PRODUCT");
      else setchild("OPEN A STORE")
      }
      else if(session.status === "unauthenticated")
      setchild("SIGN IN");
    }
    checkHasStore();
    handleCreateStore();
  }, [handleCreateStore, session?.data?.user?.id, session?.status]);
  
  return (
    <button
      className="px-6 py-[10px] rounded-full bg-[#FF4500] text-sm text_shadow"
      onClick={handleCreateStore}
      title="hero"
      disabled= {session?.status === 'loading'}
    >
      {child}
    </button>
  );
};

export default MainButton;
