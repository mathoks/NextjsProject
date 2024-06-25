"use client";
import React from "react";

const error = ({ error }) => {
  if (error.type === "CallbackRouteError") {
    return <span className="mx-auto flex h-screen">Something went wrong</span>;
  }
  return (
    <div className="mx-auto flex h-screen">
      <p>something happened</p>
    </div>
  );
};

export default error;
