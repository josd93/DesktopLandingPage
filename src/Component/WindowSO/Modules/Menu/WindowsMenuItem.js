import React from "react";

export default function WindowsMenuItem({ name, icon }) {
  return (
    <div className="windows-menu-item-container">
      <div className="windows-menu-item-icon">{icon}</div>
      <div className="windows-menu-item-name">{name}</div>
    </div>
  );
}
