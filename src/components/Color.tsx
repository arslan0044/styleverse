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
    <div className="h-full bg-[#2A2D5A] px-12 py-2 ">
      <h1 className="text-xl text-white my-2 uppercase bg-[#2A2D5A] border-[#757BD5] font-extrabold leading-tight tracking-tighter flex items-center justify-center w-full border-t-2 border-b-2">Elements</h1>
      <HexColorPicker
        color={state.item[snap.current]}
        onChange={(color) => (state.item[snap.current] = color)}
      />
      <div className=" py-9 grid grid-cols-5 gap-6">
      {colors.map((e) => (
        <div  className={`w-full h-16`}
        style={{ backgroundColor: `${e}` }}>
          <button className=" w-full h-full"
           onClick={() => (state.item[snap.current] = e)}
         ></button>
        </div>
      ))}
      </div>
      <h1>{snap.current}</h1>
    </div>
  );
}

export default Color;
