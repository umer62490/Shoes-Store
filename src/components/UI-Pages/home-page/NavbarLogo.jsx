import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const SneakerModel = () => {
  const gltf = useGLTF('/models/red-snicker-logo.glb');
  return <primitive object={gltf.scene} scale={2} />;
};

const NavbarLogo = () => {
  const [canRenderWebGL, setCanRenderWebGL] = useState(false);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl && gl instanceof WebGLRenderingContext) {
      setCanRenderWebGL(true);
    }
  }, []);

  if (!canRenderWebGL) {
    return (
      <div className="navbar-logo w-40 h-24 flex items-center justify-center text-white font-bold">
        ShoeLogo
      </div>
    );
  }

  return (
    <div className="navbar-logo w-40 h-24">
      <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
        <ambientLight intensity={2.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <SneakerModel />
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default NavbarLogo;
