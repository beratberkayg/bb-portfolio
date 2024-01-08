"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = () => {
  const links = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Projeler", url: "/projeler" },
    { name: "Hakkımda", url: "/hakkimda" },
    { name: "İletişim", url: "/iletisim" },
  ];

  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="px-1 mt-10 flex flex-col gap-2">
      {links.map((link, i) => (
        <Link
          className=" hover:text-gray-300 hover:text-opacity-50 text-2xl transition-all"
          key={i}
          href={link.url}
        >
          {pathname.toString() === link.url ? "●" : link.name}
        </Link>
      ))}
    </div>
  );
};

export default Links;
