import {Suspense, useRef, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'

function Model(props) {
  const { nodes, materials } = useGLTF('/models/coca-cola/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.Material} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

function ModelCoca(){
  const ref = useRef()
  return (
    <div className="mt-48">
      <Canvas style={{height: 600}}>
        {/* <mesh ref={ref}>
          <boxGeometry arrach='geometry' args={[2,2,2]} />
        </mesh> */}
        <Suspense fallback={null}>
          <ambientLight />
          <spotLight intensity={2000} angle={0.9} penumbra={1} position={[9,4,10]} castShadow/>
          <Model />
          <spotLight intensity={2000} angle={0.9} penumbra={1} position={[-2,4,-10]} castShadow/>
          <spotLight intensity={1000} angle={0.9} penumbra={1} position={[-5,4,10]} castShadow/>
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ModelCoca