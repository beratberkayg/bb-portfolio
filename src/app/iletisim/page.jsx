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
    <div className="w-full py-3 px-3 lg:px-20 gap-5 lg:gap-10 text-right flex flex-col cursor-pointer">
      {contact.map((item, i) => (
        <div key={i} className="hover:text-gray-300 hover:text-opacity-50">
          <a className="text-2xl lg:text-4xl" href={item.url} target="_blank">
            {item.name}
          </a>
          <div>{item.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default Hakkimda;
