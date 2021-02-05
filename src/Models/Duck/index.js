import { useRef } from "react";

import { useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Bird = ({ url = "/glb/duck/scene.gltf", ...props }) => {
  const { nodes } = useLoader(GLTFLoader, url);
  const group = useRef();

  return (
    <group ref={group} rotation={[0, 0.2, 0.01]} position={[0, 0, 1.5]}>
      <mesh
        material={nodes.defaultMaterial.material}
        geometry={nodes.defaultMaterial.geometry}
      />
      <mesh
        material={nodes.defaultMaterial_1.material}
        geometry={nodes.defaultMaterial_1.geometry}
      />
      <mesh
        material={nodes.defaultMaterial_2.material}
        geometry={nodes.defaultMaterial_2.geometry}
      />
      <mesh
        material={nodes.defaultMaterial_3.material}
        geometry={nodes.defaultMaterial_3.geometry}
      />
      <mesh
        material={nodes.defaultMaterial_4.material}
        geometry={nodes.defaultMaterial_4.geometry}
      />
      <mesh
        material={nodes.defaultMaterial_5.material}
        geometry={nodes.defaultMaterial_5.geometry}
      />
      <mesh
        material={nodes.defaultMaterial_6.material}
        geometry={nodes.defaultMaterial_6.geometry}
      />
      <mesh
        material={nodes.defaultMaterial_7.material}
        geometry={nodes.defaultMaterial_7.geometry}
      />
      <mesh
        material={nodes.defaultMaterial_8.material}
        geometry={nodes.defaultMaterial_8.geometry}
      />
    </group>
  );
};

export default Bird;
