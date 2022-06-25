import React from "react";
import Desktop from "./Modules/Desktop/Desktop";
import MenuBar from "./Modules/Menu/MenuBar";
import "./windows-page.scss";

export default function WindowsPage() {
  return (
    <div className="windows-page-container">
      <Desktop />
      <MenuBar />
    </div>
  );
}
