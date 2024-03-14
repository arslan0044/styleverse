import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, PresentationControls } from "@react-three/drei";
import { Model } from "./modals/MaleTShirt";
import {HexColorPicker} from'react-colorful'; 
export default function Modals() {
  const [color, setColor] = useState("");
  return (
    <>
    <HexColorPicker color={color} onChange={setColor}/>
    {/* </HaxColorPicker> */}
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }} className=" absolute">
        <PresentationControls
          speed={1.2}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage environment={null}>
            <Model scale={-0.5} Color={`${color}`} />
            <ambientLight intensity={5} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </>
  );
}
