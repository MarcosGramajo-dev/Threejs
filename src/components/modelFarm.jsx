// src/STLViewer.js
import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import * as THREE from 'three';
import farmaciaModel from '../../public/models/farmacia/Farmacia.stl'

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
      <Canvas style={{ height: "100%", width: "100%" }} camera={{ position: [0, 18, 0], fov: 50, rotation:[0,-90,0] }}>
        <Suspense fallback={null}>
          {/* <directionalLight intensity={50} penumbra={1} position={[0,15,0]} /> */}
          <ambientLight intensity={1000} position={[0,10,0]}/>
          <pointLight intensity={500} penumbra={1} position={[-1,3.5,-4]}/> 
          <pointLight intensity={500} penumbra={1} position={[-1,3.5,0]}/> 
          <pointLight intensity={500} penumbra={1} position={[2.8,3.5,0]}/> 
          <pointLight intensity={500} penumbra={1} position={[-3.3,3.5,3.8]}/> 
          <pointLight intensity={500} penumbra={1} position={[0,3.5,4]}/> 
          {/* <perspectiveCamera position={[-14,9,0]}/> */}
          <Model url={farmaciaModel} position={[0, 1.5, 0]} rotation={[0, 0, 0]} scale={[1,1,1]} />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ModelFarm;
