import React from "react";
import "./Group9.sass";

function Group9(props) {
  const { className } = props;

  return (
    <div className={`group-9 ${className || ""}`}>
      <div className="text-3 inter-semi-bold-pink-swan-18-3px">СУББОТА, 19 ФЕВРАЛЯ</div>
      <div className="merchy inter-bold-licorice-46-9px">Merchy</div>
    </div>
  );
}

export default Group9;
