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
    <div className=" py-5 text-xl">
      <p>{age} yaşındayım.</p>
      <p>Ben Berat</p>
      <p>Berkay Gökdemir</p>
      <p>Ben Berat</p>
      <p>Berkay Gökdemir</p>
      <p>Ben Berat</p>
      <p>Berkay Gökdemir</p>
      <p>Ben Berat</p>
      <p>Ben Berat</p>
      <p>Berkay Gökdemir</p>
      <p>Ben Berat</p>
      <p>Berkay Gökdemir</p>
      <p>Ben Berat</p>
      <p>Ben Berat</p>
      <p>Berkay Gökdemir</p>
      <p>Ben Berat</p>
      <p>Berkay Gökdemir</p>
      <p>Ben Berat</p>
      <p>Ben Berat</p>
      <p>Berkay Gökdemir</p>
      <p>Ben Berat</p>
      <p>Berkay Gökdemir</p>
      <p>Ben Berat</p>
    </div>
  );
};

export default Home;
