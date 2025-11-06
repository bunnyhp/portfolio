import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere, Float, Instances, Instance, Html } from '@react-three/drei';
import * as THREE from 'three';

function ShieldMesh() {
  const meshRef = useRef();
  const particlesRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y -= 0.001;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.004;
    }
  });

  // Create particles for cyber effect
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      const onChange = () => setReducedMotion(mq.matches);
      onChange();
      mq.addEventListener?.('change', onChange);
      return () => mq.removeEventListener?.('change', onChange);
    }
  }, []);
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = reducedMotion ? 400 : 1000;
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
            color="#155724"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
            emissive="#155724"
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
          color="#155724"
          emissive="#155724"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Holographic rotating data ring */}
      <mesh ref={ringRef} rotation={[0, 0, 0]}>
        <torusGeometry args={[1.45, 0.02, 16, 200]} />
        <meshStandardMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={0.6}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Floating network nodes around shield */}
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
        <Instances limit={30} range={30}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial color="#9efff5" emissive="#9efff5" emissiveIntensity={0.4} />
          {Array.from({ length: 30 }).map((_, i) => (
            <Instance key={i} position={[(Math.random()-0.5)*4, (Math.random()-0.5)*4, (Math.random()-0.5)*4]} />
          ))}
        </Instances>
      </Float>

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
      <pointLight position={[10, 10, 10]} intensity={1} color="#155724" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0ff" />
    </>
  );
}

export default function CyberShield3D() {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      const onChange = () => setReducedMotion(mq.matches);
      onChange();
      mq.addEventListener?.('change', onChange);
      return () => mq.removeEventListener?.('change', onChange);
    }
  }, []);
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000');
        }}
      >
        <ShieldMesh />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={!reducedMotion}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
      <span aria-hidden className="sr-only">Interactive 3D cyber shield visualization</span>
    </div>
  );
}
