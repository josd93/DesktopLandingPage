import React, { useState } from "react";
import ButtomItem from "./ButtomItem";
import WindowsIcon from "../../Icons/WindowsIcon";
import WindowsMenu from "./WindowsMenu";

export default function MenuBar() {
  const [visibleMenuWindows, setVisibleMenuWindows] = useState(false);

  return (
    <div className="windows-page-menu-bar-container">
      {console.log(visibleMenuWindows)}
      <ButtomItem
        icon={<WindowsIcon fill="white" className="buttom-menu-icon" />}
        callBack={() => {
          setVisibleMenuWindows((estado) => !estado);
        }}
      />
      {visibleMenuWindows && <WindowsMenu />}
    </div>
  );
}
