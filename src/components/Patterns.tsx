import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
export default function Patterns() {
  const snap = useSnapshot(state);
  const images = [
    "/assets/pattrerns.png",
    "/assets/PATTERNS2.jpg",
    "/assets/PATTERNS3.png",
    "/assets/PATTERNS4.png",
    "/assets/Pattrerns5.jpg",
    "/assets/pattrerns6.png",
    // "",
    // "",
    // "https://clipart-library.com/img/1353863.png",
    // "https://i.pinimg.com/736x/9d/2d/9d/9d2d9d6760c10fcf5fa6bfc66679f087.jpg",

  ];
  return (
    <div className="w-full h-full ">
            <h1 className="text-xl text-white uppercase bg-[#2A2D5A] border-[#757BD5] font-extrabold leading-tight tracking-tighter flex items-center justify-center w-full border-t-2 border-b-2">Patterns</h1>
      {/* <button
        className="bg-red-300 hover:bg-red-400 duration-100"
        onClick={() => (state.isPATTERNSTexture = false)}
      >
        Delete Button
      </button> */}
    <div className="overflow-y-auto h-[70vh] rounded-2xl   bg-[#2A2D5A]   flex items-center  flex-col pt-2 ">

      <div className=" grid h-72 w-72 grid-cols-2 gap-5 items-center justify-center">
        {images.map((e) => (
          <div>
            <button
              onClick={() => (
                (state.PATTERNSDecal = e), (state.isPATTERNSTexture = true)
              )}
            >
              <img src={e} alt={e} className="transform -scale-x-100  rounded-3xl border border-yellow-300" />
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
