import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, PresentationControls } from "@react-three/drei";
import { TShirt3 } from './modals/TShirt3';
import { Model } from './modals/MaleTShirt';


export default function Modals() {

  const [modal,setModal] = useState()
  return (
    <>
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }} className=" absolute">
        <PresentationControls
          speed={1.2}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage position={[0, 0, 10]}>
           {/* <TShirt3 scale={1.5}/> */}
           <Model scale={1.5}/>
            <ambientLight intensity={1} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </>
  );
}
