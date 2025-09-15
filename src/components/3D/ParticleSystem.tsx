
import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const ParticleSystem: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null!)
  const particleCount = 1000
  
  const [positions, velocities] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      
      // Random positions
      positions[i3] = (Math.random() - 0.5) * 30
      positions[i3 + 1] = (Math.random() - 0.5) * 20
      positions[i3 + 2] = (Math.random() - 0.5) * 30
      
      // Random velocities
      velocities[i3] = (Math.random() - 0.5) * 0.02
      velocities[i3 + 1] = Math.random() * 0.01
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02
    }
    
    return [positions, velocities]
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        
        // Update positions with flow
        positions[i3] += velocities[i3] + Math.sin(state.clock.elapsedTime + i * 0.1) * 0.001
        positions[i3 + 1] += velocities[i3 + 1]
        positions[i3 + 2] += velocities[i3 + 2] + Math.cos(state.clock.elapsedTime + i * 0.1) * 0.001
        
        // Wrap around boundaries
        if (positions[i3 + 1] > 10) {
          positions[i3 + 1] = -10
          positions[i3] = (Math.random() - 0.5) * 30
          positions[i3 + 2] = (Math.random() - 0.5) * 30
        }
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  const particleTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 32
    canvas.height = 32
    const ctx = canvas.getContext('2d')!
    
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
    gradient.addColorStop(0, 'rgba(135, 206, 235, 1)')
    gradient.addColorStop(0.5, 'rgba(135, 206, 235, 0.5)')
    gradient.addColorStop(1, 'rgba(135, 206, 235, 0)')
    
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 32, 32)
    
    return new THREE.CanvasTexture(canvas)
  }, [])

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        transparent
        opacity={0.6}
        map={particleTexture}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        vertexColors={false}
      />
    </points>
  )
}

export default ParticleSystem
