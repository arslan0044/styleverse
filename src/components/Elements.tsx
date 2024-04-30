import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
export default function Patterns() {
  const snap = useSnapshot(state);
  const images = [
    // "/assets/pattrerns.png",
    // "/assets/car.png",
    // "/assets/car2.png",
    // "/assets/pkoimon.png",
    // "/assets/hacker.png",
    // "/assets/naruto.png",
    // "/assets/Micki.png",
    // "/assets/cute-tweety.png",
    // "/assets/superman.png",
    // "https://freepngimg.com/thumb/cartoon/4-2-cartoon-transparent-thumb.png",
    '/assets/Elements/1/1.png',
    '/assets/Elements/1/2.png',
    '/assets/Elements/1/3.png',
    '/assets/Elements/1/4.png',
  ];
  return (
   
    <div className="w-full h-full relative">
    <div className="h-12 absolute w-full flex justify-between">
      <img src="/icons/cross-icon.png" alt="" />
      <img src="/icons/cross-icon.png" alt="" />
            </div>

      <div className=" h-fit w-wfit pt-1">
      <h1 className="text-xl text-white   
       uppercase font-extrabold leading-tight tracking-tighter w-[90%] mx-auto h-9 bg-[#2A2D5A]  flex items-center justify-center  border-t-2 border-b-2">Elements</h1>
      </div> {/* <button
        className="bg-red-300 hover:bg-red-400 duration-100"
        onClick={() => (state.isPATTERNSTexture = false)}
      >
        Delete Button
      </button> */}
        <div className=" p-2 rounded-b-2xl  w-[90%] mx-auto bg-[#2A2D5A]">
        <div className="overflow-y-auto h-[70vh] rounded-b-2xl w-[90%] mx-auto   bg-[#2A2D5A] flex items-center  flex-col pt-2 ">

          <div className=" grid h-72 w-72 grid-cols-2 gap-5 items-center justify-center">
          {images.map((e) => (
          <div>
            <button
              onClick={() => (
                (state.logoDecal = e), (state.isLogoTexture = true)
              )}
            >
              <img src={e} alt={e} className="transform -scale-x-100  rounded-3xl border border-yellow-300" />
            </button>
          </div>
        ))}
          </div>
        </div>
      </div>
    </div>
    
  );
}
