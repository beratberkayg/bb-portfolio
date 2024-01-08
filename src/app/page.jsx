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
    <div className="w-full py-3 px-3 text-lg lg:text-4xl text-right">
      <p>
        Merhaba ben Berat Berkay Gökdemir, {age} yaşındayım. Web teknolojileri
        alanındaki yenilikleri takip ederek kendimi sürekli olarak
        geliştiriyorum. Web tasarımı ve kodlama alanındaki yeteneklerimi
        güçlendirmek adına yoğun bir şekilde çalışıyorum.
      </p>
    </div>
  );
};

export default Home;
