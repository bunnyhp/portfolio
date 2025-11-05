import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function ShieldMesh() {
  const meshRef = useRef();
  const particlesRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y -= 0.001;
    }
  });

  // Create particles for cyber effect
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1000;
  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 8;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  return (
    <>
      {/* Main Shield Sphere */}
      <mesh ref={meshRef}>
        <Sphere args={[1.2, 64, 64]}>
          <MeshDistortMaterial
            color="#00ff41"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
            emissive="#00ff41"
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </mesh>

      {/* Inner Core */}
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color="#0ff"
          emissive="#0ff"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Outer Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#00ff41"
          emissive="#00ff41"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry attach="geometry" {...particlesGeometry} />
        <pointsMaterial
          attach="material"
          size={0.02}
          color="#0ff"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      {/* Ambient Light */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ff41" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0ff" />
    </>
  );
}

export default function CyberShield3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ShieldMesh />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
