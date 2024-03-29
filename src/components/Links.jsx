"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = () => {
  const links = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Projeler", url: "/projeler" },

    { name: "İletişim", url: "/iletisim" },
  ];

  const pathname = usePathname();

  return (
    <div className="header_nav">
      {links.map((link, i) => (
        <li
          className={`${pathname.toString() === link.url ? "is_selected" : ""}`}
          key={i}
        >
          <div className="_dot">●</div>
          <Link className="_text" href={link.url}>
            {link.name}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Links;
