import React from "react";

import "./index.css";
import IAnimation from "../../../../../core";

const ScaleUpRight: React.FC<IAnimation> = (props: IAnimation) => {
  return (
    <div className="scale-up-right" style={props.style}>
      {props.children}
    </div>
  );
};

export default ScaleUpRight;
