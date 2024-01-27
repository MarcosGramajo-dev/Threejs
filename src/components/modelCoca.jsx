import {Suspense, useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'

function Model(props) {
  const { nodes, materials } = useGLTF('models/coca-cola/scene.gltf')
  const myMesh = useRef()
  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime() / 2
  })
  return (
    <group {...props} ref={myMesh} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.Material} position={[-0.2,-2.5,-0.2]} scale={1.8} rotation={[-Math.PI / 2.2, 0, 0.2]} />
    </group>
  )
}

function ModelCoca(){
  const ref = useRef()
  
  return (
    <div className="w-80 h-80 lg:w-80 lg:h-80">
      <Canvas style={{height:"100%", width: "100%"}}>
        {/* <mesh ref={ref}>
          <boxGeometry arrach='geometry' args={[2,2,2]} />
        </mesh> */}
        <Suspense  fallback={null}>
          <ambientLight />
          <spotLight intensity={2000} angle={0.9} penumbra={1} position={[9,4,10]} castShadow/>
          <Model />
          <spotLight intensity={2000} angle={0.9} penumbra={1} position={[-2,4,-10]} castShadow/>
          <spotLight intensity={1000} angle={0.9} penumbra={1} position={[-5,4,10]} castShadow/>
          <OrbitControls enablePan={true} enableZoom={false} enableRotate={true}/>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ModelCoca