"use client";
import { useEffect, useState } from "react";

const Home = () => {
  const [age, setAge] = useState(0);
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const birthYear = 1999;
    const calculatedAge = currentYear - birthYear;
    setAge(calculatedAge);
  }, []);
  return (
    <p className="home text-right md:text-left text-[15px] md:text-[17px] lg:text-[20px] ">
      <span>Merhaba ben Berat </span>
      <span> Berkay Gökdemir, </span>
      <span>{age} yaşındayım.</span>
      <span>Frontend alanında</span>
      <span>kendimi sürekli </span>
      <span>geliştirmekten büyük</span>
      <span>keyif alıyorum. Öğren-</span>
      <span>meye olan isteğim beni </span>
      <span> her zaman ileriye</span>
      <span>taşıyor ve merakımın </span>
      <span>peşinden heyecanla </span>
      <span>koşuyorum.Yeni macera-</span>
      <span>lara atılmak benim için </span>
      <span>sadece bir başlangıç!</span>
    </p>
  );
};

export default Home;
