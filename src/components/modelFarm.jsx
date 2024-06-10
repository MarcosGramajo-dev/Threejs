// src/STLViewer.js
import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import * as THREE from 'three';

function Model({ url, position, rotation, scale }) {
  const ref = useRef();
  const [geometry, setGeometry] = useState(null);

  useEffect(() => {
    const loader = new STLLoader();
    loader.load(url, (geometry) => {
      setGeometry(geometry);
    });
  }, [url]);

//   useFrame(({ clock }) => {
//     if (ref.current) {
//       ref.current.rotation.y = clock.getElapsedTime() / 2;
//     //   console.log(ref.current.rotation.y)
//     }
//   });

  return geometry ? (
    <mesh ref={ref} geometry={geometry}  position={position} rotation={rotation} scale={scale} >
      <meshStandardMaterial color="black" />
    </mesh>
  ) : null;
}

function ModelFarm() {
  return (
    <div className="w-full h-full">
      <Canvas style={{ height: "100%", width: "100%" }} camera={{ position: [-14, 9, 0], fov: 50 }}>
        <Suspense fallback={null}>
          <directionalLight intensity={50} penumbra={1} position={[5,10,7.5]} />
          {/* <perspectiveCamera position={[-14,9,0]}/> */}
          <Model url="/src/assets/estructuras/farmacia/Farmacia.stl" position={[0, 1.5, 0]} rotation={[0, 0, 0]} scale={[1,1,1]} />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ModelFarm;
