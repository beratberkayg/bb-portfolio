import React from "react";

const Hakkimda = () => {
  const contact = [
    {
      name: "GitHub",
      url: "https://github.com/beratberkayg",
      desc: "beratberkayg",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/beratberkayg%C3%B6kdemir/",
      desc: "Berat Berkay Gökdemir",
    },
    {
      name: "Email",
      url: "mailto:berat.1675@gmail.com",
      desc: "berat.1675@gmail.com",
    },
    {
      name: "Telefon",
      url: "tel:+905315686195",
      desc: "0531 568 61 95",
    },
  ];
  return (
    <div className="project">
      {contact.map((item, i) => (
        <div key={i} className="hover:text-gray-300 hover:text-opacity-50">
          <a
            className="text-[8vw] md:text-[6vw]"
            href={item.url}
            target="_blank"
          >
            {item.name}
          </a>
          <div className="text-[3vw] md:text-[14px] mt-2">{item.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default Hakkimda;
