import React from "react";
import WindowsMenuItem from "./WindowsMenuItem";
import WindowsIcon from "../../Icons/WindowsIcon";

export default function WindowsMenu({ setVisibleMenuWindows }) {
  return (
    <div className="windows-page-lateral-meanu">
      <WindowsMenuItem
        icon={<WindowsIcon fill="white" className="buttom-menu-icon" />}
        name={"Proyecto1"}
      />
    </div>
  );
}
