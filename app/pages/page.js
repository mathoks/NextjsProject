import React from "react";
import { getUsers } from "../actions/users/getUsers";

/**
 * Server Side Rendered Page
 * @returns {JSX.Element} - JSX Element
 */
const page = async () => {
  const userlist = await getUsers();

  return (
    <div className="flex items-center flex-row justify-center">
      <p className="p-4 text-gray-950 m-40">{userlist?.title}</p>
    </div>
  );
};

export default page;
