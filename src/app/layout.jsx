import { Open_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Theme from "@/components/Theme";

import Test from "@/components/Test";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Berat Berkay",
  description: "Berat Berkay Gökdemir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} `}>
        <div id="Page" className="page">
          <Test />
          <div className="mask">
            <div id="Mask_Top" className="mask_top"></div>
            <div id="Mask_Bottom" className="mask_bottom"></div>
          </div>
          <div className="frame">
            <div className="frame_line frame_line-left"></div>
            <div className="frame_line frame_line-right"></div>
            <div className="frame_line frame_line-top"></div>
            <div className="frame_line frame_line-bottom"></div>
          </div>
          <Theme />
          <Header />
          <main className="content">
            <div className="content_inner">
              <section className="pages">
                <div className="page_content">{children}</div>
              </section>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
