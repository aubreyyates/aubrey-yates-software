import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from '@mui/material/styles';

const ThreeComponent = () => {
  const ref = useRef();
  const theme = useTheme();

  useEffect(() => {
    const parent = ref.current;
    const width = parent.clientWidth - 22;
    const height = 900;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(width, height);
    renderer.setClearColor(theme.palette.background.default, 1); // Set background color to white

    ref.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({
      color: parseInt(theme.palette.primary.main.slice(1), 16),
      wireframe: true
    });

    const cube1 = new THREE.Mesh(geometry, material);
    cube1.position.set(6, 3, 0);
    scene.add(cube1);

    const cube2 = new THREE.Mesh(geometry, material);
    cube2.position.set(-18, 3, -16);
    scene.add(cube2);

    const coneGeometry = new THREE.ConeGeometry(1, 2, 3);
    const cone1 = new THREE.Mesh(coneGeometry, material);
    cone1.position.set(-9, 8, -6);
    scene.add(cone1);

    const cone2 = new THREE.Mesh(coneGeometry, material);
    cone2.position.set(13, 1, -11);
    scene.add(cone2);

    const cone3 = new THREE.Mesh(coneGeometry, material);
    cone3.position.set(-5, -11, -18);
    scene.add(cone3);

    // IcosahedronGeometry

    const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0);
    const icosahedron = new THREE.Mesh(icosahedronGeometry, material);
    icosahedron.position.set(-8, -3, -4);
    scene.add(icosahedron);

    const octahedronGeometry = new THREE.OctahedronGeometry(1, 0);
    const octahedron1 = new THREE.Mesh(octahedronGeometry, material);
    octahedron1.position.set(4, -4, -2);
    scene.add(octahedron1);

    const octahedron2 = new THREE.Mesh(octahedronGeometry, material);
    octahedron2.position.set(2, 11, -9);
    scene.add(octahedron2);

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      cube1.rotation.x += 0.01;
      cube1.rotation.y += 0.01;
      cube2.rotation.x += 0.01;
      cube2.rotation.y += 0.01;

      cone1.rotation.x += 0.01;
      cone1.rotation.y += 0.01;
      cone2.rotation.x += 0.01;
      cone2.rotation.y += 0.01;
      cone3.rotation.x += 0.01;
      cone3.rotation.y += 0.01;

      icosahedron.rotation.x += 0.01;
      icosahedron.rotation.y += 0.01;

      octahedron1.rotation.x += 0.01;
      octahedron1.rotation.y += 0.01;
      octahedron2.rotation.x += 0.01;
      octahedron2.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      parent.removeChild(renderer.domElement);
    };
  }, [theme.palette.primary.main, theme.palette.background.default]);

  return <div ref={ref} />;
};

export default ThreeComponent;
