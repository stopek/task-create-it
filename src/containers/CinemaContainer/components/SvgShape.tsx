import { useFrame, useLoader } from "@react-three/fiber";
import { MeshProps } from "@react-three/fiber/dist/declarations/src/three-types";
import { useMemo, useRef, useState } from "react";
import { Group } from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

interface ITriangle extends MeshProps {
  color: string;
}

const SvgShape = ({ color, ...props }: ITriangle) => {
  const ref = useRef<Group>(null);
  const [r] = useState(() => Math.random() * 10000);

  useFrame((_) => {
    if (!ref.current) {
      return;
    }

    ref.current.position.y = -1.75 + Math.sin(_.clock.elapsedTime + r) / 10;
  });

  const { paths: [path] } = useLoader(SVGLoader, "/textures/triangle.svg");

  const geom = useMemo(() => SVGLoader.pointsToStroke(path.subPaths[0].getPoints(), path?.userData?.style || {}), []);

  return (
    <group ref={ref}>
      <mesh geometry={geom} {...props}>
        <meshBasicMaterial color={color}  toneMapped />
      </mesh>
    </group>
  );
};

export default SvgShape;