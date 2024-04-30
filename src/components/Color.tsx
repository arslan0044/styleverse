import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import state from "../store";
import { useSnapshot } from "valtio";
// useSnapshot
function Color() {
  const snap = useSnapshot(state);
  const colors = [
    `#FF0000`,
    "#FF8000",
    "#FFFF00",
    "#80FF00",
    "#00FF00",
    "#00FF80",
    "#FF0080",
    "#FF00FF",
    "#8000FF",
    "#0000FF",
    "#0080FF",
    "#00FFFF",
    "#964B00",
    "#FCE2C4",
    "#808080",
  ];
  return (
    <div className="w-full h-full relative">
      <div className="h-12 absolute w-full flex justify-between">
        <img src="/icons/cross-icon.png" alt="" />
        <img src="/icons/cross-icon.png" alt="" />
      </div>

      <div className=" h-fit w-wfit pt-1">
        <h1 className="text-xl text-white   
       uppercase font-extrabold leading-tight tracking-tighter w-[90%] mx-auto h-9 bg-[#2A2D5A]  flex items-center justify-center  border-t-2 border-b-2">colour</h1>
      </div>
      <div className=" p-2 rounded-b-2xl  w-[90%] mx-auto bg-[#2A2D5A]">
        <div className="overflow-y-auto h-[70vh] rounded-b-2xl w-[90%] mx-auto   bg-[#2A2D5A] flex items-center  flex-col pt-2 ">
          <HexColorPicker
            color={state.item[snap.current]}
            onChange={(color) => (state.item[snap.current] = color)}
          />
          <div className=" grid h-72 w-72 grid-cols-3 mt-5 gap-5 items-center justify-center">
            {colors.map((e) => (
              <div className={`w-full h-16`}
                style={{ backgroundColor: `${e}` }}>
                <button className=" w-full h-full"
                  onClick={() => (state.item[snap.current] = e)}
                ></button>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
}

export default Color;
