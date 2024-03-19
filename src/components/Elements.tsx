import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
export default function Patterns() {
  const snap = useSnapshot(state);
  const images = [
    // "/assets/pattrerns.png",
    // "/assets/car.png",
    "/assets/car2.png",
    "/assets/pkoimon.png",
    "/assets/hacker.png",
    "/assets/naruto.png",
  ];
  return (
    <div className="w-full h-screen bg-yellow-200 overflow-y-auto ">
      <h1 className="text-5xl uppercase">Elements</h1>
      <button
        className="bg-red-300 hover:bg-red-400 duration-100"
        onClick={() => (state.isLogoTexture = false)}
      >
        {" "}
        Delete Button
      </button>
      <div className=" grid grid-cols-2 gap-5">
        {images.map((e) => (
          <div>
            <button
              onClick={() => (
                (state.logoDecal = e), (state.isLogoTexture = true)
              )}
            >
              <img src={e} alt={e} className="transform -scale-x-100" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
