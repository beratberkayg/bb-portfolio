"use client";
import React, { useEffect } from "react";
import * as THREE from "three";

const randomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

const Background = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let spheres = [];
    for (let i = 1; i < 300; i++) {
      let geometry = new THREE.SphereGeometry(
        0.02 * randomArbitrary(0.5, 1),
        6,
        6
      );
      let material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(
          1,
          randomArbitrary(190, 220) / 255,
          Math.round(Math.random())
        ),
      });

      let sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);
      spheres.push(sphere);
      sphere.position.setFromSpherical(
        new THREE.Spherical(
          5 + 5 * Math.random(),
          2 * Math.PI * Math.random(),
          2 * Math.PI * Math.random()
        )
      );
    }
    scene.rotation.x = 0.2;
    scene.rotation.z = 0.6;
    camera.position.z = 5;

    const axesHelper = new THREE.AxesHelper(3);
    scene.add(axesHelper);

    const animate = () => {
      requestAnimationFrame(animate);
      scene.rotation.y += 0.001;
      scene.rotation.z -= 0.001;

      renderer.render(scene, camera);
    };

    animate();

    const handleWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []); // Empty dependency array to ensure the effect runs once on mount

  return null;
};

export default Background;
