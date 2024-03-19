import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, PresentationControls, OrbitControls } from "@react-three/drei";
import { FrontSleeves } from './modals/FrontSleeves';
import { Model } from './modals/MaleTShirt';


export default function Modals() {

  const [modal,setModal] = useState()
  return (
    <>
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }} className=" absolute">
        <FrontSleeves scale={.13}/>
    <ambientLight intensity={3.6} />
        <OrbitControls />
        {/* <PresentationControls
          speed={1.2}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage position={[0, 0, 10]}>
            <Model scale={1.5}/> 
          </Stage>
        </PresentationControls> */}
      </Canvas>
    </>
  );
}
