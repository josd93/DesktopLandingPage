import React from "react";

export default function ButtomItem({ icon, callBack }) {
  return (
    <div className="windows-page-menu-button-item" onClick={callBack}>
      {icon}
    </div>
  );
}
