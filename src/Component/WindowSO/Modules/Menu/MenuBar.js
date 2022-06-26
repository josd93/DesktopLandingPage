import React, { useEffect, useState } from "react";
import ButtomItem from "./ButtomItem";
import WindowsIcon from "../../Icons/WindowsIcon";
import WindowsMenu from "./WindowsMenu";

export default function MenuBar() {
  const [visibleMenuWindows, setVisibleMenuWindows] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", closeMenu);
    return () => {
      document.body.removeEventListener("click", closeMenu);
    };
  }, []);

  const closeMenu = (event) => {
    if (event.path[0].className === "windows-page-desktop-container") {
      setVisibleMenuWindows(false);
    }
  };
  return (
    <div className="windows-page-menu-bar-container">
      <ButtomItem
        icon={<WindowsIcon fill="white" className="buttom-menu-icon" />}
        callBack={() => {
          setVisibleMenuWindows((estado) => !estado);
        }}
      />
      {visibleMenuWindows && (
        <WindowsMenu setVisibleMenuWindows={setVisibleMenuWindows} />
      )}
    </div>
  );
}
