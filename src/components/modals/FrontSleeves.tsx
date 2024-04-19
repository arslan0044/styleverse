import * as THREE from "three";
import React, { useRef, useState } from "react";
import { Decal, Text, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import state from "../../store";
import { useControls } from "leva";
import { useOnDraw } from "../../hooks";
import { degToRad } from "three/src/math/MathUtils";
// import { scale } from "maath/dist/declarations/src/vector2";

type GLTFResult = GLTF & {
  nodes: {
    front_main: THREE.Mesh;
    sleves_L_R: THREE.Mesh;
  };
  materials: {
    front_main: THREE.MeshStandardMaterial;
    sleves_L_R: THREE.MeshStandardMaterial;
  };
};

export function FrontSleeves(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/assets/3dmodels/front+sleeves.gltf"
  ) as GLTFResult;
  const snap = useSnapshot(state);
  const ref: any = useRef();
  const [hover, setHover] = useState(null);
  const logoTexture = useTexture(snap.logoDecal);
  const PATTERNSTexture = useTexture(snap.PATTERNSDecal);
  // const decal: any = useRef();
  // const snap = useSnapshot(state);
  const { setCanvasRef, onCanvasMouseDown } = useOnDraw(onDraw);
  function onDraw(ctx: any, point: any, prevPoint: any) {
    drawLine(prevPoint, point, ctx, "#ff0000", 2);
  }
  function drawLine(start: any, end: any, ctx: any, color: any, width: any) {
    start = start ?? end;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
  }
  const stateString = JSON.stringify(snap);
  return (
    <group
      {...props}
      key={stateString}
      dispose={null}
      ref={ref}
      onPointerOver={(e) => (
        e.stopPropagation(), setHover(e.object["material"].name)
      )}
      onPointerOut={(e) => e.intersections.length === 0 && setHover(null)}
      onPointerMissed={() => (state.current = null)}
      onClick={(e) => (
        e.stopPropagation(), (state.current = e.object["material"].name)
      )}
    >
      <mesh
        material-color={`${snap.item.front_main}`}
        castShadow
        receiveShadow
        geometry={nodes.front_main.geometry}
        material={materials.front_main}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.039}
        dispose={null}
      >
        {snap.isLogoTexture && (
          <Decal
            // ref={decal}
            // debug // Makes "bounding box" of the decal visible
            position={[0, 120, -140]} // Position of the decal[x,z,y]
            rotation={degToRad(180)} // Rotation of the decal (can be a vector or a degree in radians)
            scale={180} // Scale of the decal[x,z,y]
          >
            <meshBasicMaterial
              transparent
              map={logoTexture}
              polygonOffset
              polygonOffsetFactor={-1} // The material should take precedence over the original
            />
          </Decal>
        )}

        {snap.isPATTERNSTexture && (
          <Decal
            // ref={decal}
            // debug // Makes "bounding box" of the decal visible
            position={[0, 120, -140]} // Position of the decal[x,z,y]
            rotation={degToRad(180)} // Rotation of the decal (can be a vector or a degree in radians)
            scale={1000} // Scale of the decal[x,z,y]
          >
            <meshBasicMaterial
              transparent
              map={PATTERNSTexture}
              polygonOffset
              polygonOffsetFactor={-1} // The material should take precedence over the original
            />
          </Decal>
        )}
        
      </mesh>
      <mesh
        material-color={`${snap.item.sleves_L_R}`}
        castShadow
        receiveShadow
        geometry={nodes.sleves_L_R.geometry}
        material={materials.sleves_L_R}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.039}
        // dispose={null}
        // map={uvTextture}
      />
      {/* <canvas
     width={window.innerWidth}
     height={window.innerHeight}
      className="border border-black"
      ref={setCanvasRef}
      onMouseDown={onCanvasMouseDown}
    /> */}
    </group>
  );
}

useGLTF.preload("/assets/3dmodels/front+sleeves.gltf");
