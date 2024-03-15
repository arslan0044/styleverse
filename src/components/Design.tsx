import React from "react";
import Modals from "./Modals";

function Design() {
  return (
    <div className=" bg-red-500 w-full h-screen">
      <h1 className=" text-5xl text-white font-black uppercase ">
        Blocking Patterns
      </h1>
      <div className=" grid grid-cols-2 gap-9">
        <div className="h-72 w-full bg-white ">
          <Modals />
        </div>
        <div className="h-72 w-full bg-white">
          <Modals />
        </div>
      </div>
    </div>
  );
}

export default Design;
