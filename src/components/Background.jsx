"use client";

import { useEffect } from "react";
import * as THREE from "three";

const Background = () => {
  useEffect(() => {
    // Sahneyi oluştur
    const scene = new THREE.Scene();

    // Kamerayı oluştur
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    // Renderer'ı oluştur ve DOM'a ekleyin, alpha özelliğini true olarak ayarlayın
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("Background").appendChild(renderer.domElement);

    // Grid üzerine noktaları yerleştir
    const numPoints = 3000;
    const gridSize = 100;
    const pointsGeometry = new THREE.BufferGeometry();

    const positions = new Float32Array(numPoints * 3);
    const colors = new Float32Array(numPoints * 3);

    for (let i = 0; i < numPoints; i++) {
      const x = (Math.random() - 0.5) * gridSize;
      const y = (Math.random() - 0.5) * gridSize;
      const z = (Math.random() - 0.5) * gridSize;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      colors[i * 3] = 1.0;
      colors[i * 3 + 1] = 1.0;
      colors[i * 3 + 2] = 1.0;
    }

    pointsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    pointsGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: THREE.VertexColors,
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);

    scene.add(points);

    // Kamera pozisyonunu ayarla
    camera.position.z = 5;

    // Sayfa yüklendiğinde ve boyutu değiştiğinde kontrol fonksiyonunu çağır

    window.addEventListener("resize", () => {
      // Ekran boyutu değiştiğinde kamera ve renderer boyutlarını güncelle
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animasyon fonksiyonunu oluşturun
    const animate = () => {
      requestAnimationFrame(animate);

      // Noktaları yavaşça hareket ettir
      const time = Date.now() * 0.001;
      const amplitude = 0.7;
      const frequency = 1;

      for (let i = 0; i < numPoints; i++) {
        const x = pointsGeometry.attributes.position.array[i * 3];
        const y = pointsGeometry.attributes.position.array[i * 3 + 1];
        const z = pointsGeometry.attributes.position.array[i * 3 + 2];

        pointsGeometry.attributes.position.array[i * 3 + 2] =
          z + Math.sin(time * frequency + x + y) * amplitude;
      }

      pointsGeometry.attributes.position.needsUpdate = true;

      // Sahneyi render et
      renderer.render(scene, camera);
    };

    // Animasyonu başlat
    animate();

    // Temizlik işlemleri (componentWillUnmount)
    return () => {
      renderer.dispose();
      document.getElementById("Background").removeChild(renderer.domElement);
    };
  }, []); // Bu boş dependency array ile sadece mount ve unmount anlarında çalışır

  return <div id="Background" className="background"></div>;
};

export default Background;
