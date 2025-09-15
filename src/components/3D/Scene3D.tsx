
import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { 
  OrbitControls, 
  Environment, 
  Float, 
  Text3D, 
  Center,
  Sparkles,
  Cloud,
  Sky,
  Ocean
} from '@react-three/drei'
import * as THREE from 'three'
import FloatingWorms from './FloatingWorms'

const AnimatedText: React.FC<{ text: string; position: [number, number, number] }> = ({ text, position }) => {
  const textRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      textRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
      <Center>
        <Text3D
          ref={textRef}
          position={position}
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.01}
          bevelOffset={0}
          bevelSegments={5}
        >
          {text}
          <meshStandardMaterial
            color="#1a5f4a"
            metalness={0.3}
            roughness={0.2}
            emissive="#0a3d2a"
            emissiveIntensity={0.1}
          />
        </Text3D>
      </Center>
    </Float>
  )
}

const UnderwaterBubbles: React.FC = () => {
  const bubblesRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (bubblesRef.current) {
      bubblesRef.current.rotation.y = state.clock.elapsedTime * 0.1
      bubblesRef.current.children.forEach((bubble, i) => {
        bubble.position.y += 0.01
        if (bubble.position.y > 5) {
          bubble.position.y = -5
        }
      })
    }
  })

  const bubbles = Array.from({ length: 50 }, (_, i) => (
    <mesh
      key={i}
      position={[
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 20
      ]}
    >
      <sphereGeometry args={[0.05 + Math.random() * 0.1, 8, 8]} />
      <meshStandardMaterial
        color="#87CEEB"
        transparent
        opacity={0.3}
        metalness={0.1}
        roughness={0.1}
      />
    </mesh>
  ))

  return <group ref={bubblesRef}>{bubbles}</group>
}

const Scene3D: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 2, 8], fov: 60 }}
        shadows
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          {/* Dynamic Lighting */}
          <ambientLight intensity={0.4} color="#4a90e2" />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            color="#ffffff"
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1a5f4a" />
          
          {/* Underwater Environment */}
          <fog attach="fog" args={['#4a90e2', 5, 25]} />
          
          {/* 3D Elements */}
          <FloatingWorms />
          <UnderwaterBubbles />
          
          {/* Magical Sparkles */}
          <Sparkles
            count={100}
            scale={[20, 20, 20]}
            size={2}
            speed={0.4}
            color="#87CEEB"
          />
          
          {/* Floating Clouds */}
          <Cloud
            position={[0, 8, -10]}
            speed={0.4}
            opacity={0.3}
            color="#87CEEB"
          />
          
          {/* Environment */}
          <Environment preset="sunset" />
          
          {/* Interactive Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene3D
