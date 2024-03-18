import * as THREE from "three";
import React, { useRef, useState } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import state from "../../store";
import { useControls } from "leva";
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
    "src/assets/3dmodels/front+sleeves.gltf"
  ) as GLTFResult;
  const snap = useSnapshot(state);
  const uvTextture = new THREE.TextureLoader().load(snap.logoDecal);
  const ref: any = useRef();
  const [hover, setHover] = useState(null);
  const logoTexture = useTexture(snap.logoDecal);
  const decal: any = useRef();
  // useControls({
  //   angle: {
  //     min: 0,

  //     max: Math.PI * 2,
  //     value: 0,
  //     step: 0.01,
  //     onChange: (value: any) => {
  //       decal.current.rotation.y = value;
  //     },
  //   },
  //   scale: {
  //     min: 1,
  //     value: 0,
  //     onChange: (value: any) => {
  //       decal.current.scale.x = value;
  //       decal.current.scale.y = value;
  //       decal.current.scale.z = value;
  //     },
  //   },
  // });
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
            position={[0, 120, -150]} // Position of the decal[x,z,y]
            rotation={3.15} // Rotation of the decal (can be a vector or a degree in radians)
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
      >
        {/* <Decal
          debug // Makes "bounding box" of the decal visible
          position={[0, 214, 0]} // Position of the decal
          rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={100} // Scale of the decal
        >
          <ambientLight intensity={20} />
            transparent
            map={logoTexture}
            polygonOffset
            polygonOffsetFactor={-1} // The material should take precedence over the original
          />
        </Decal> */}

        {/* {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={1}
            map={uvTextture}
          />
        )} */}
      </mesh>
    </group>
  );
}

useGLTF.preload("src/assets/3dmodels/front+sleeves.gltf");
