import { useFrame, useThree } from "@react-three/fiber";
import { ReactNode, useRef } from "react";
import * as THREE from "three";
import { Group } from "three";

interface IRig {
  children: ReactNode;
}

const Rig = ({ children }: IRig) => {
  const ref = useRef<Group>(null);
  const vec = new THREE.Vector3();
  const { camera, mouse } = useThree();

  useFrame(() => {
    if (!camera || !ref.current) {
      return;
    }

    camera.position.lerp(vec.set(mouse.x * 2, 0, 3.5), 0.05);
    ref.current.position.lerp(vec.set(mouse.x, mouse.y * 0.1, 0), 0.1);
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 20, 0.1);
  });

  return <group ref={ref}>{children}</group>;
};

export default Rig;