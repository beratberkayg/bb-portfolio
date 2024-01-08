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
  return <div>sadsad</div>;
};

export default Home;
