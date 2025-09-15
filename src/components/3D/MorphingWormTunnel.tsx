
import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Tube, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

const MorphingWormTunnel: React.FC = () => {
  const tunnelRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<any>(null)

  // Create organic tunnel path
  const curve = useMemo(() => {
    const points = []
    for (let i = 0; i <= 100; i++) {
      const t = i / 100
      points.push(new THREE.Vector3(
        Math.sin(t * Math.PI * 4) * 2,
        Math.cos(t * Math.PI * 3) * 1.5,
        t * 20 - 10
      ))
    }
    return new THREE.CatmullRomCurve3(points)
  }, [])

  useFrame((state) => {
    if (tunnelRef.current && materialRef.current) {
      tunnelRef.current.rotation.z = state.clock.elapsedTime * 0.1
      materialRef.current.distort = 0.3 + Math.sin(state.clock.elapsedTime) * 0.2
      materialRef.current.speed = 2 + Math.sin(state.clock.elapsedTime * 0.5) * 1
    }
  })

  return (
    <group position={[0, 0, -5]}>
      <Tube ref={tunnelRef} args={[curve, 64, 1, 16, false]}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#10b981"
          transparent
          opacity={0.6}
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Tube>
      
      {/* Inner glow */}
      <Tube args={[curve, 64, 0.8, 16, false]}>
        <meshBasicMaterial 
          color="#34d399" 
          transparent 
          opacity={0.3}
          side={THREE.BackSide}
        />
      </Tube>
    </group>
  )
}

export default MorphingWormTunnel
