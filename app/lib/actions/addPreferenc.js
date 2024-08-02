"use server";

import { cookies } from "next/headers";


const addPreferenc = async (formdata = {}) => {
    console.log(formdata)
  const cookie = cookies();
  try {
    const createCookie =  Object.entries(formdata).map((ent) => {
      if (Array.isArray(ent[1])) {
        cookie.set('preMarkets', JSON.stringify(ent[1]));
      } else cookie.set(ent[0], ent[1]);
    });
    if (createCookie) {
      return {
        success: true,
        error: null
      };
    }
  } catch (err) {
    return {
      error: "operation failed",
      sucess: false,
    };
  }
};

export default addPreferenc;
