import React, { useEffect, useState } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh } from 'three';
import { SphereBufferGeometry, MeshBasicMaterial, MeshStandardMaterial, DoubleSide } from 'three';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';

const Point = ({ position, onClick }) => {
    const [hovered, setHovered] = useState(false);
  
    const handlePointerEnter = () => {
      setHovered(true);
    };
  
    const handlePointerLeave = () => {
      setHovered(false);
    };
  
    const handleClick = () => {
      onClick(position);
    };
  
    return (
      <mesh
        position={position}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={handleClick}
      >
        <sphereBufferGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color={hovered ? 'green' : 'red'} />
      </mesh>
    );
  };