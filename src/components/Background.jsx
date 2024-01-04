"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Background = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const material = new THREE.PointsMaterial({ size: 0.02, color: 0xffffff });

    const particles = new THREE.BufferAttribute(new Float32Array(1000 * 3), 4);

    for (let i = 0; i < particles.array.length; i += 3) {
      const radius = 5;
      const theta = Math.random() * Math.PI * 2;

      particles.array[i] = radius * Math.cos(theta);
      particles.array[i + 1] = radius * Math.sin(theta);
      particles.array[i + 2] = (Math.random() - 0.5) * 10;
    }

    geometry.setAttribute("position", particles);

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 15;

    const animate = () => {
      requestAnimationFrame(animate);

      points.rotation.x += 0.001;
      points.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener("resize", () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return <div className="" ref={canvasRef}></div>;
};

export default Background;
