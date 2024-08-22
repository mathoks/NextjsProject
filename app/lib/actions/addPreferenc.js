"use server";

import { cookies } from "next/headers";


const addPreferenc = async (formdata = {}) => {
  const cookie = cookies();
 
  try {
    const expire = new Date();
    expire.setFullYear(expire.getFullYear() + 100);
    // const futureDate = expire.toTimeString();
    const createCookie =  Object.entries(formdata).map((ent) => {
      if (Array.isArray(ent[1])) {
        cookie.set('preMarkets', JSON.stringify(ent[1]), {expires: expire});
      } else cookie.set(ent[0], ent[1], {expires: expire});
    });
    if (createCookie) {
      return {
        success: true,
        error: null
      };
    }
  } catch (err) {
    console.log(err)
    return {
      error: "operation failed",
      sucess: false,
    };
  }
};

export default addPreferenc;
