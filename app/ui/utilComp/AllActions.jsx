import React from "react";
import LinkButton from "../Buttons/LinkButton";

const Template = ({ tag, path, status, icon }) => {
  return (
    <span className="flex justify-between items-center text-sm">
      <span className="flex space-x-2">
        {icon}
        <span>{tag}</span>
      </span>
      <LinkButton path={path} unRead={status} />
    </span>
  );
};

const AllActions = function({ tabs = [] }){
  return (
    <section className="flex flex-col space-y-8 bg-white rounded-md p-4 mx-4 text-black">
      {tabs.map((item) => (
        <Template key={item.id} {...item} />
      ))}
    </section>
  );
};

export default AllActions;
