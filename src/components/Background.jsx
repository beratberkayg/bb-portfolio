"use client";
import { useState, useEffect, useRef } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh,
  SphereGeometry,
  Line,
  LineSegments,
} from "three";

const Background = () => {
  const [camera, setCamera] = useState(new PerspectiveCamera(75, 1, 0.1, 1000));

  const canvasRef = useRef();

  const scene = new Scene();
  const renderer = new WebGLRenderer({
    canvas: canvasRef.current,
  });
  const sphereGeometry = new SphereGeometry(10, 32, 32);

  useEffect(() => {
    const handleResize = () => {
      const newCamera = new PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      setCamera(newCamera);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const plane = new PlaneGeometry(500, 500);
    const planeMaterial = new MeshBasicMaterial({ color: 0x0000ff });
    const planeMesh = new Mesh(plane, planeMaterial);

    scene.add(planeMesh);

    for (let i = 0; i < 100; i++) {
      const sphereMaterial = new MeshBasicMaterial({ color: 0xffffff });
      const sphereMesh = new Mesh(sphereGeometry, sphereMaterial);

      sphereMesh.position.x = Math.random() * 500 - 250;
      sphereMesh.position.y = Math.random() * 500 - 250;
      sphereMesh.position.z = Math.random() * 500 - 250;

      scene.add(sphereMesh);
    }

    for (let i = 0; i < 100; i++) {
      const lineMaterial = new MeshBasicMaterial({
        color: Math.random() * 0xffffff,
      });
      const lineGeometry = new SphereGeometry();

      const lineMesh = new LineSegments(lineGeometry, lineMaterial);

      lineMesh.position.x = Math.random() * 500 - 250;
      lineMesh.position.y = Math.random() * 500 - 250;
      lineMesh.position.z = Math.random() * 500 - 250;

      scene.add(lineMesh);
    }

    const animate = () => {
      requestAnimationFrame(animate);

      scene.children.forEach((mesh) => {
        if (mesh instanceof Mesh) {
          const vertices = mesh.geometry.attributes.position.array;

          vertices[0] += Math.random() * 0.1 - 0.05;
          vertices[1] += Math.random() * 0.1 - 0.05;
          vertices[2] += Math.random() * 0.1 - 0.05;

          mesh.geometry.attributes.position.needsUpdate = true;
        } else if (mesh instanceof LineSegments) {
          const vertices = mesh.geometry.attributes.position.array;

          vertices[0] += Math.random() * 0.1 - 0.05;
          vertices[1] += Math.random() * 0.1 - 0.05;
          vertices[2] += Math.random() * 0.1 - 0.05;

          vertices[3] += Math.random() * 0.1 - 0.05;
          vertices[4] += Math.random() * 0.1 - 0.05;
          vertices[5] += Math.random() * 0.1 - 0.05;

          mesh.geometry.attributes.position.needsUpdate = true;
        }
      });

      renderer.render(scene, camera);
    };

    animate();
  }, [camera, scene, sphereGeometry, renderer]);

  return (
    <div>
      <canvas ref={canvasRef} width="500" height="500"></canvas>
    </div>
  );
};

export default Background;
