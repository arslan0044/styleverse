import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { proxy } from "valtio";
import { useProxy } from 'valtio/utils'
const state = proxy({
  current: null,
  item: "#7f3667",
});

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_16: THREE.Mesh;
  };
  materials: {
    Knit_Cotton_Jersey_FRONT_1950: THREE.MeshStandardMaterial;
    Material2178: THREE.MeshStandardMaterial;
    Material2303: THREE.MeshStandardMaterial;
    Rib_2X2_468gsm_FRONT_1962: THREE.MeshStandardMaterial;
  };
};

export function Model({props,Color}:{props: JSX.IntrinsicElements["group"];Color:String}) {
  const { nodes, materials } = useGLTF(
    "/3dmodels/male_tshirt.glb"
  ) as GLTFResult;
  const snap = useProxy(state);
//   const 
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          material-color={`${Color}`}
          geometry={nodes.Object_2.geometry}
          material={materials.Knit_Cotton_Jersey_FRONT_1950}
        />
        <mesh
          material-color={`${Color}`}
          geometry={nodes.Object_3.geometry}
          material={materials.Knit_Cotton_Jersey_FRONT_1950}
        />
        <mesh
          material-color={`${Color}`}
          geometry={nodes.Object_4.geometry}
          material={materials.Knit_Cotton_Jersey_FRONT_1950}
        />
        <mesh
          material-color={`${Color}`}
          geometry={nodes.Object_5.geometry}
          material={materials.Material2178}
        />
        <mesh
          material-color={`${Color}`}
          geometry={nodes.Object_6.geometry}
          material={materials.Material2178}
        />
        <mesh
          material-color={`${Color}`}
          geometry={nodes.Object_7.geometry}
          material={materials.Material2178}
        />
        <mesh
          material-color={`${Color}`}
          geometry={nodes.Object_8.geometry}
          material={materials.Material2178}
        />
        <mesh
          material-color={`${Color}`}
          geometry={nodes.Object_9.geometry}
          material={materials.Material2178}
        />
        <mesh
          material-color={`${Color}`}
          geometry={nodes.Object_10.geometry}
          material={materials.Material2178}
        />
        <mesh
          material-color={`${Color}`}
          geometry={nodes.Object_11.geometry}
          material={materials.Material2303}
        />
        <mesh
          material-color={`${Color}`}
          geometry={nodes.Object_12.geometry}
          material={materials.Material2303}
        />
        <mesh
          material-color={`${Color}`}
          geometry={nodes.Object_13.geometry}
          material={materials.Material2303}
        />
        <mesh
          material-color={`${Color}`}
          geometry={nodes.Object_14.geometry}
          material={materials.Material2303}
        />
        <mesh
          material-color={`${Color}`}
          geometry={nodes.Object_15.geometry}
          material={materials.Rib_2X2_468gsm_FRONT_1962}
        />
        <mesh
          material-color={`${Color}`}
          geometry={nodes.Object_16.geometry}
          material={materials.Rib_2X2_468gsm_FRONT_1962}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3dmodels/male_tshirt.glb");
