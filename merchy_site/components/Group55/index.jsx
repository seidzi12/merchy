import React from "react";
import "./Group55.sass";

function Group55(props) {
  const { children, className } = props;

  return (
    <div className={`group-55 ${className || ""}`}>
      <div className="overlap-group-1">
        <div className="e-mail inter-semi-bold-licorice-34-5px">{children}</div>
      </div>
    </div>
  );
}

export default Group55;
