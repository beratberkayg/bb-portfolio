import { Open_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Berat Berkay",
  description: "Berat Berkay Gökdemir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <div id="Page">
          <div className="mask">
            <div className="mask_top"></div>
            <div className="mask_bottom"></div>
          </div>
          <div className="frame">
            <div className="frame_line frame_line-left"></div>
            <div className="frame_line frame_line-right"></div>
            <div className="frame_line frame_line-top"></div>
            <div className="frame_line frame_line-bottom"></div>
          </div>
          <div className="theme">
            <div className="theme_btn">
              <div className="_box"></div>
              <div className="_text">Lıght</div>
            </div>
            <div className="theme_btn">
              <div className="_box"></div>
              <div className="_text">Dark</div>
            </div>
          </div>
          <Header />
          <main className="content">
            <div className="content_inner">
              <section className="page">
                <div className="page_content">{children}</div>
              </section>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
