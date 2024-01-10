"use client";
import { useEffect } from "react";
import * as THREE from "three";

const Test = () => {
  useEffect(() => {
    // Sahneyi oluştur
    const scene = new THREE.Scene();

    // Kamerayı oluştur
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 0.5;

    // Renderer'ı oluştur ve DOM'a ekleyin
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("test").appendChild(renderer.domElement);

    // Küre geometrisi oluştur ve detail değerini artır
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    // Temel renkli malzeme oluştur
    const material = new THREE.PointsMaterial({
      // color: 0xffffff, // Başlangıç rengi beyaz
      size: 0.005,
      vertexColors: THREE.VertexColors,
    });

    // Kürenin noktalarını içeren Points objesini oluştur
    const points = new THREE.Points(geometry, material);
    // Sahneye ekle
    scene.add(points);

    window.addEventListener("resize", () => {
      // Ekran boyutu değiştiğinde kamera ve renderer boyutlarını güncelle
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animasyon fonksiyonunu oluştur
    const animate = () => {
      requestAnimationFrame(animate);

      // Küreyi döndür

      points.rotation.y += 0.05;

      // Sahneyi render et
      renderer.render(scene, camera);
    };

    // Animasyonu başlat
    animate();

    // Temizlik işlemleri (componentWillUnmount)
    return () => {
      renderer.dispose();
      document.getElementById("test").removeChild(renderer.domElement);
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return <div id="test" className="background" />;
};

export default Test;
