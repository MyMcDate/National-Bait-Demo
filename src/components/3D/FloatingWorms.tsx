
import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface WormProps {
  position: [number, number, number]
  scale: number
  color: string
}

const FloatingWorm: React.FC<WormProps> = ({ position, scale, color }) => {
  const wormRef = useRef<THREE.Group>(null)
  const segments = 8

  useFrame((state) => {
    if (wormRef.current) {
      // Organic floating movement
      wormRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5
      wormRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5 + position[2]) * 0.2
      wormRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3 + position[1]) * 0.1
    }
  })

  const wormSegments = useMemo(() => {
    return Array.from({ length: segments }, (_, i) => (
      <Sphere
        key={i}
        position={[i * 0.3 - (segments * 0.15), 0, 0]}
        args={[0.15 - i * 0.01, 16, 16]}
      >
        <MeshDistortMaterial
          color={color}
          distort={0.2}
          speed={2}
          roughness={0.1}
          metalness={0.6}
          transparent
          opacity={0.8}
        />
      </Sphere>
    ))
  }, [segments, color])

  return (
    <group ref={wormRef} position={position} scale={scale}>
      {wormSegments}
    </group>
  )
}

const FloatingWorms: React.FC = () => {
  const worms = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 15
      ] as [number, number, number],
      scale: 0.5 + Math.random() * 0.8,
      color: `hsl(${120 + Math.random() * 60}, 70%, ${50 + Math.random() * 30}%)`
    }))
  }, [])

  return (
    <>
      {worms.map((worm, i) => (
        <FloatingWorm
          key={i}
          position={worm.position}
          scale={worm.scale}
          color={worm.color}
        />
      ))}
    </>
  )
}

export default FloatingWorms
