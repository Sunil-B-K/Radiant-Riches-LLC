import React from "react";
import "./Tool.css";
import Tools from "../Tools/Tools";

function Tool() {
  return (
    <div className="tool">
      <Tools tool="Tools" />
      <Tools tool="AWS Builder" />
      <Tools tool="Start Build" />
      <Tools tool="Build Supplies" />
      <Tools tool="Tooling" />
      <Tools tool="BlueHosting" />
    </div>
  );
}

export default Tool;
