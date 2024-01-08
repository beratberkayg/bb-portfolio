import Link from "next/link";
import React from "react";

const Projeler = () => {
  const project = [
    {
      name: "Sosyal App",
      url: "https://bbsosyal.vercel.app/",
      desc: "2023",
    },
    {
      name: "Movie App",
      url: "https://bbmovie.vercel.app/",
      desc: "2023",
    },
    {
      name: "Store App",
      url: "https://bb-store.vercel.app/",
      desc: "2023",
    },
    {
      name: "Health App",
      url: "https://pendikdogal.vercel.app/",
      desc: "2024",
    },
  ];
  return (
    <div className="w-full py-3 px-3 lg:px-20 gap-5 lg:gap-10 text-right flex flex-col cursor-pointer ">
      {project.map((item, i) => (
        <div key={i} className="hover:text-gray-300 hover:text-opacity-50">
          <a className="text-2xl lg:text-4xl" href={item.url} target="_blank">
            {item.name}
          </a>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Projeler;
