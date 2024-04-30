import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, PresentationControls, OrbitControls } from "@react-three/drei";
import { FrontSleeves } from "./modals/FrontSleeves";
import { Model } from "./modals/MaleTShirt";

export default function Modals() {
  const [modal, setModal] = useState();
  return (
    <div className="h-[85%]">
      <div className="w-[70%] mx-2 bg-[#2A2D5A] mt-4 border-[#E76F71] border-4 rounded-xl flex justify-around">
<div className="w-16"> <img src="/icons/crop_icon.png" alt="" /></div>
<div className="w-16"> <img src="/icons/flip_icon.png" alt="" /></div>
<div className="w-16"> <img src="/icons/tile_icon.png" alt="" /></div>
<div className="w-16"> <img src="/icons/duplicate_icon.png" alt="" /></div>
      </div>
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }} className="">
        {/* <OrbitControls /> */}
        <PresentationControls
          speed={1.2}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage position={[0, 0, 10]}>
            {/* // <Model scale={1.5}/>  */}
            <FrontSleeves scale={0.13} />
            <ambientLight intensity={2} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}
