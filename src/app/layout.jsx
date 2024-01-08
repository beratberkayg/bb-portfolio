import { Open_Sans } from "next/font/google";
import "./globals.css";
import Title from "@/components/Title";
import Header from "@/components/Header";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Berat Berkay",
  description: "Berat Berkay Gökdemir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} w-full h-screen  flex justify-center items-center  `}
      >
        <div className="border border-white border-opacity-50 w-full h-full overflow-hidden relative ">
          <Header />
          <section className="absolute bottom-0 right-0 h-2/3 md:h-4/5 w-1/2 overflow-hidden overflow-y-auto md:flex md:items-end ">
            {children}
          </section>
        </div>
      </body>
    </html>
  );
}
