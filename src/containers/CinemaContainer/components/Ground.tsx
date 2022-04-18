import { Reflector, useTexture } from "@react-three/drei";
import { ReflectorProps } from "@react-three/drei/core/Reflector";

interface IGround extends ReflectorProps {
  textures: string[];
}

const Ground = ({ textures, ...rest }: IGround) => {
  const [floor, normal] = useTexture(textures);

  return (
    <Reflector resolution={1024} args={[8, 8]} {...rest}>
      {(Material, materialProps) => (
        <Material
          {...materialProps}
          color="#f0f0f0"
          metalness={0}
          roughnessMap={floor}
          normalMap={normal}
        />
      )}
    </Reflector>
  );
};

export default Ground;