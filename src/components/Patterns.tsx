import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
export default function Patterns() {
  const snap = useSnapshot(state);
  return (
    <div className="w-full h-full bg-yellow-200">
      <h1 className="text-5xl uppercase">Patterns</h1>
      <div className=" grid grid-cols-2 gap-5">
        <img src={snap.logoDecal} alt="" />
      </div>
    </div>
  );
}
