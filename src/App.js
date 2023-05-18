
import { Canvas } from '@react-three/fiber'

import './App.css'
import { Suspense } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Map from './Map';
import Floor from './Floor';


function CarShow() {
  const cameraPosition = [3, 20, 35]; // Adjust the camera position
  const cameraFov = 100; // Adjust the field of view
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={cameraFov} position={cameraPosition} />

      <color args={[0, 0, 0]} attach="background" />
      <pointLight color={[1,1,1]} intensity={0.6} position={[0,30,0]} castShadow />
       <spotLight color={[1, 0.25, 0.7]} intensity={6} angle={0.6} penumbra={0.5} position={[5, 5, 0]} castShadow shadow-bias={-0.0001} />
      <spotLight color={[0.14, 0.5, 1]} intensity={6} angle={0.6} penumbra={0.5} position={[-5, 5, 0]} castShadow shadow-bias={-0.0001} /> 
      {/* <Map /> */}
      <Floor />
    </>
  );
}

function App() {
  return (
    <div id="canvas-container">
      <Suspense fallback={null}>
        <Canvas shadows>
          <CarShow />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default App;