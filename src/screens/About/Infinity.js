import { Canvas, useFrame as useRender } from "react-three-fiber";

import { OrbitControls } from "drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Stars({ count = 2000 }) {
  let group = useRef();
  let theta = 0;
  useRender(() => {
    const r = Math.sin(THREE.Math.degToRad((theta += 0.1)));
    const s = 3 * Math.cos(THREE.Math.degToRad(theta * 2));

    group.current.rotation.set(0, 0, r);
    group.current.scale.set(s, s, s);
  });
  const [geo, mat, vertices, coords] = useMemo(() => {
    const geo = new THREE.SphereBufferGeometry(1, 10, 10);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("white"),
    });
    const coords = new Array(count)
      .fill()
      .map((i) => [
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
      ]);
    return [geo, mat, vertices, coords];
  }, []);

  return (
    <group ref={group}>
      {coords.map(([p1, p2, p3], i) => (
        <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
      ))}
    </group>
  );
}

const Infinity = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={5} />
        <pointLight position={[40, 40, 40]} />
        <OrbitControls maxZoom={100} minZoom={10} />
        <Stars />
      </Canvas>
    </>
  );
};

export default Infinity;
