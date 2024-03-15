import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_4002: THREE.Mesh;
    Object_4001: THREE.Mesh;
    Object_4006: THREE.Mesh;
  };
  materials: {};
};

export function TShirt2(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("src/assets/3dmodels/test2.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4002.geometry}
        material={nodes.Object_4002.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.039}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4001.geometry}
        material={nodes.Object_4001.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.039}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4006.geometry}
        material={nodes.Object_4006.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.039}
      />
    </group>
  );
}

useGLTF.preload("src/assets/3dmodels/test2gltf");