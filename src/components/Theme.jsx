"use client";

import { useEffect, useState } from "react";

const Theme = () => {
  const changeTheme = () => {
    setTheme(!theme);
  };

  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (theme) {
      document.querySelector("body").classList.add("light");
      document.getElementById("Page").classList.add("light");
      document.getElementById("Mask_Top").classList.add("light");
      document.getElementById("Mask_Bottom").classList.add("light");
    } else {
      document.querySelector("body").classList.remove("light");
      document.getElementById("Page").classList.remove("light");
      document.getElementById("Mask_Top").classList.remove("light");
      document.getElementById("Mask_Bottom").classList.remove("light");
    }
  }, [theme]);

  return (
    <div className="theme">
      <div onClick={changeTheme} className="theme_btn">
        <div className="_box">{theme ? "■" : "□"}</div>
        <div className="_text">Lıght</div>
      </div>
      <div onClick={changeTheme} className="theme_btn">
        <div className="_box">{theme ? "□" : "■"}</div>
        <div className="_text">Dark</div>
      </div>
    </div>
  );
};

export default Theme;
