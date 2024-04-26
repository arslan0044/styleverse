import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
export default function Patterns() {
  const snap = useSnapshot(state);
  const images = [
    "/assets/Patterns/1.jpg",
    "/assets/Patterns/2.jpg",
    "/assets/Patterns/3.jpg",
    "/assets/Patterns/4.jpg",
    "/assets/Patterns/5.jpg",
    "/assets/Patterns/6.jpg",
    "/assets/Patterns/7.jpg",
    "/assets/Patterns/8.jpg",
    "/assets/Patterns/9.jpg",
    "/assets/Patterns/10.jpg",
    "/assets/Patterns/11.jpg",
    "/assets/Patterns/12.jpg",
    "/assets/Patterns/13.jpg",
    "/assets/Patterns/14.jpg",
    "/assets/Patterns/15.jpg",
    "/assets/Patterns/16.jpg",
    "/assets/Patterns/17.jpg",
    "/assets/Patterns/18.jpg",
    "/assets/Patterns/19.jpg",
    "/assets/Patterns/20.jpg",
    "/assets/Patterns/21.jpg",
    "/assets/Patterns/22.jpg",
    "/assets/Patterns/23.jpg",
    "/assets/Patterns/24.jpg",
    "/assets/Patterns/25.jpg",
    "/assets/Patterns/26.jpg",
    "/assets/Patterns/27.jpg",
    "/assets/Patterns/28.jpg",
    "/assets/Patterns/29.jpg",
    "/assets/Patterns/30.jpg",
    "/assets/Patterns/31.jpg",
    
    

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
