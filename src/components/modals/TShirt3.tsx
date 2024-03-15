import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import state from "../../store";
type GLTFResult = GLTF & {
  nodes: {
    Object_4001: THREE.Mesh;
    Object_4002: THREE.Mesh;
    Object_4003: THREE.Mesh;
  };
  materials: {};
};

export function TShirt3(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "src/assets/3dmodels/test3.gltf"
  ) as GLTFResult;
  const ref = useRef();
  const snap = useSnapshot(state);
  const stateString = JSON.stringify(snap);
  const [hover, setHover] = useState(null);
  return (
    <group
      {...props}
      dispose={null}
      // rotation={[-Math.PI / -5, 1, -1]}
      key={stateString}
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
        material-color={`${snap.color}`}
        geometry={nodes.Object_4001.geometry}
        material={nodes.Object_4001.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.039}
      />
      <mesh
        material-color={`${snap.color}`}
        geometry={nodes.Object_4002.geometry}
        material={nodes.Object_4002.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.039}
      />
      <mesh
        material-color={`#00FFF`}
        geometry={nodes.Object_4003.geometry}
        material={nodes.Object_4003.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.039}
      />
    </group>
  );
}

useGLTF.preload("src/assets/3dmodels/test3.gltf");
