import React from "react";

import "./index.css";
import IAnimation from "../../../../../core";

const FlipHorizontalBottom: React.FC<IAnimation> = (props: IAnimation) => {
  return (
    <div className="flip-horizontal-bottom" style={props.style}>
      {props.children}
    </div>
  );
};

export default FlipHorizontalBottom;
