import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import state from "../../store";

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

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/3dmodels/male_tshirt.glb"
  ) as GLTFResult;
  const ref = useRef();
  const [hover, setHover] = useState(null);

  const snap = useSnapshot(state);
  const stateString = JSON.stringify(snap);
  return (
    <group {...props} dispose={null} key={stateString}>
      <group
        rotation={[-Math.PI / 2, 0, 0]}
        ref={ref}
        onPointerOver={(e) => (
          e.stopPropagation(), setHover(e.object.material.name)
        )}
        onPointerOut={(e) => e.intersections.length === 0 && setHover(null)}
        onPointerMissed={() => (state.current = null)}
        onClick={(e) => (
          e.stopPropagation(), (state.current = e.object.material.name)
        )}
      >
        <mesh
          material-color={`${snap.item.Knit_Cotton_Jersey_FRONT_1950}`}
          geometry={nodes.Object_2.geometry}
          material={materials.Knit_Cotton_Jersey_FRONT_1950}
        />
        <mesh
          material-color={`${snap.item.Knit_Cotton_Jersey_FRONT_1950}`}
          geometry={nodes.Object_3.geometry}
          material={materials.Knit_Cotton_Jersey_FRONT_1950}
        />
        <mesh
          material-color={`${snap.item.Knit_Cotton_Jersey_FRONT_1950}`}
          geometry={nodes.Object_4.geometry}
          material={materials.Knit_Cotton_Jersey_FRONT_1950}
        />
        <mesh
          material-color={`${snap.color}`}
          geometry={nodes.Object_5.geometry}
          material={materials.Material2178}
        />
        <mesh
          material-color={`${snap.color}`}
          geometry={nodes.Object_6.geometry}
          material={materials.Material2178}
        />
        <mesh
          material-color={`${snap.color}`}
          geometry={nodes.Object_7.geometry}
          material={materials.Material2178}
        />
        <mesh
          material-color={`${snap.color}`}
          geometry={nodes.Object_8.geometry}
          material={materials.Material2178}
        />
        <mesh
          material-color={`${snap.color}`}
          geometry={nodes.Object_9.geometry}
          material={materials.Material2178}
        />
        <mesh
          material-color={`${snap.color}`}
          geometry={nodes.Object_10.geometry}
          material={materials.Material2178}
        />
        <mesh
          material-color={`${snap.color}`}
          geometry={nodes.Object_11.geometry}
          material={materials.Material2303}
        />
        <mesh
          material-color={`${snap.color}`}
          geometry={nodes.Object_12.geometry}
          material={materials.Material2303}
        />
        <mesh
          material-color={`${snap.color}`}
          geometry={nodes.Object_13.geometry}
          material={materials.Material2303}
        />
        <mesh
          material-color={`${snap.color}`}
          geometry={nodes.Object_14.geometry}
          material={materials.Material2303}
        />
        <mesh
          material-color={`${snap.item.Rib_2X2_468gsm_FRONT_1962}`}
          geometry={nodes.Object_15.geometry}
          material={materials.Rib_2X2_468gsm_FRONT_1962}
        />
        <mesh
          material-color={`${snap.item.Rib_2X2_468gsm_FRONT_1962}`}
          geometry={nodes.Object_16.geometry}
          material={materials.Rib_2X2_468gsm_FRONT_1962}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3dmodels/male_tshirt.glb");
