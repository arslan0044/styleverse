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

  ];
  return (
    <div className="w-full h-screen bg-yellow-200 overflow-y-auto ">
      <h1 className="text-5xl uppercase">Patterns</h1>
      <button
        className="bg-red-300 hover:bg-red-400 duration-100"
        onClick={() => (state.isPATTERNSTexture = false)}
      >
        {" "}
        Delete Button
      </button>
      <div className=" grid grid-cols-2 gap-5">
        {images.map((e) => (
          <div>
            <button
              onClick={() => (
                (state.PATTERNSDecal = e), (state.isPATTERNSTexture = true)
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
