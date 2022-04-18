import { CameraShake, OrbitControls } from "@react-three/drei";
import { Canvas as FiberCanvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";

import { colors } from "styles/configs";

import Ground from "./Ground";
import Rig from "./Rig";
import SvgShape from "./SvgShape";

const Canvas = () => (
  <FiberCanvas dpr={[1, 1.5]} camera={{ position: [0, 0, 15] }}>
    <color attach="background" args={[colors.black]} />
    <ambientLight />
    <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />

    <Rig>
      <SvgShape color={colors.theme} scale={0.015} position={[-0.3, 1.9, 0]} rotation={[0, 0, 0]} />

      <SvgShape color="#C2C2C2" scale={0.009} position={[-2.5, 3, -2]} rotation={[0, 0, 0]} />
      <SvgShape color="#C2C2C2" scale={0.009} position={[3.5, 3, -2]} rotation={[0, 0, 0]} />

      <Ground
        textures={["/textures/water.jpg", "/textures/noise.jpg"]}
        mirror={1}
        blur={[500, 100]}
        mixBlur={12}
        mixStrength={1.5}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        position-y={-0.8}
      />
    </Rig>

    <EffectComposer multisampling={8}>
      <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} />
      <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.5} />
    </EffectComposer>

    <CameraShake yawFrequency={0} pitchFrequency={0} rollFrequency={0} />
  </FiberCanvas>
);

export default Canvas;