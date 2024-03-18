import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
export default function Patterns() {
  const snap = useSnapshot(state);
  const images = ["src/assets/pattrerns.png", "src/assets/car.png", "src/assets/car2.png"];
  return (
    <div className="w-full h-full bg-yellow-200">
      <h1 className="text-5xl uppercase">Patterns</h1>
      <button className="bg-red-300 hover:bg-red-400 duration-100"  onClick={()=>(state.isLogoTexture=false)}>        Delete Button
      </button>
      <div className=" grid grid-cols-2 gap-5">
        {images.map((e) => (
          <div>
            <button onClick={() => (state.logoDecal= e,state.isLogoTexture=true)}>
              <img src={e} alt="" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
