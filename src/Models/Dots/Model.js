import React, { useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";

const roundedWave = (t, delta = 0.1, a = 1, f = 1 / 10) => {
  return (a / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);
};

function Model({ duration, play, dots = 10000, ...props }) {
  const ref = useRef();
  const { positions, distances, transform, vec } = useMemo(() => {
    const positions = [...Array(dots)].map(() => new THREE.Vector3());
    const distances = [...Array(dots)];
    const transform = new THREE.Matrix4();
    const vec = new THREE.Vector3(); // reusable
    return { positions, distances, transform, vec };
  }, []);
  useLayoutEffect(() => {
    const randomAmount = 0.3;
    const origin = new THREE.Vector3(0, 0, 0);
    const right = new THREE.Vector3(1, 0, 0);
    for (let i = 0; i < dots; ++i) {
      positions[i].set(
        Math.floor(i / 100) - 50 + (i % 2) * 0.5,
        (i % 100) - 50,
        0
      );
      positions[i].x += (Math.random() - 0.5) * randomAmount;
      positions[i].y += (Math.random() - 0.5) * randomAmount;
      distances[i] =
        positions[i].distanceTo(origin) +
        Math.cos(positions[i].angleTo(right) * 8) * 0.5;
      transform.setPosition(positions[i]);
      ref.current.setMatrixAt(i, transform);
    }
  }, [play]);
  useFrame(({ clock }) => {
    if (play) {
      let dist, t, position, wave;
      for (let i = 0; i < dots; ++i) {
        position = positions[i];
        dist = distances[i];
        t = clock.elapsedTime - dist / 25; // wave is offset away from center
        wave = roundedWave(t, 0.15 + (0.2 * dist) / 72, 0.4, 1 / duration);
        vec.copy(position).multiplyScalar(wave + 1.3);
        transform.setPosition(vec);
        ref.current.setMatrixAt(i, transform);
      }
      ref.current.instanceMatrix.needsUpdate = true;
    } else {
      ref.current.instanceMatrix.needsUpdate = false;
    }
  });
  return (
    <instancedMesh args={[null, null, dots]} ref={ref} {...props}>
      <circleBufferGeometry args={[0.15, 8]} />
      <meshBasicMaterial color={"white"} opacity={0.3} transparent />
    </instancedMesh>
  );
}

export default Model;
