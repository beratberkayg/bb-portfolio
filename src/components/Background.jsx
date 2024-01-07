"use client";
import * as THREE from "three";

const Background = () => {
  const stars = [];

  // Yıldızları oluştur
  for (let i = 0; i < 1000; i++) {
    const star = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 10, 10),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );

    star.position.x = (Math.random() - 0.5) * 2000; // Rastgele x konumu
    star.position.y = (Math.random() - 0.5) * 2000; // Rastgele y konumu
    star.position.z = (Math.random() - 0.5) * 2000; // Rastgele z konumu

    stars.push(star);
  }

  const update = (time) => {
    // Zamanla yıldızları hareket ettir
    stars.forEach((star) => {
      star.rotation.x += 0.001;
      star.rotation.y += 0.001;
      star.rotation.z += 0.001;
    });
  };
  return (
    <canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {stars.map((star, index) => (
        <primitive key={index} object={star} />
      ))}
      <group rotation={[0, 0, 0]} position={[0, 0, 0]}>
        <mesh>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshBasicMaterial color="red" />
        </mesh>
      </group>
    </canvas>
  );
};

export default Background;
