import React from "react";
import { getUsers } from "../actions/users/getUsers";
import { NextResponse } from "next/server";




/**
 * Server Side Rendered Page
 * @returns {JSX.Element} - JSX Element
 */
const page = async () => {
  const userlist = await getUsers();
  
console.log(userlist)
  return (
    <div className="flex items-center flex-row justify-center">
      <p className="p-4 text-gray-950 m-40">hhhh</p>
    </div>
  );
};

export default page;
