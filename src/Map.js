import React, { useEffect,useMemo  } from 'react';
import { useLoader,useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh, SphereBufferGeometry, BackSide, MeshBasicMaterial, TextureLoader  } from 'three';
const Map = () => {


    const { scene } = useThree();
    const backgroundTexture = useMemo(() => {
        const textureLoader = new TextureLoader();
        const texture = textureLoader.load([
          'textures/sky.jpg'
        ]);
        return texture;
      }, []);
    
      useEffect(() => {
        const geometry = new SphereBufferGeometry(200,32,32);
        const material = new MeshBasicMaterial({map: backgroundTexture, side: BackSide});
        const sphere = new Mesh(geometry, material);
        scene.add(sphere);

        return () => {
          scene.remove(sphere);
        };
      }, [backgroundTexture, scene]);

  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + 'models/Map/scene.gltf');
  useEffect(() => {
    gltf.scene.scale.set(0.05, 0.05, 0.05);
    gltf.scene.position.set(0, -0.4, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
  }, [gltf.scene]);

  return <primitive object={gltf.scene} />;
};

export default Map;