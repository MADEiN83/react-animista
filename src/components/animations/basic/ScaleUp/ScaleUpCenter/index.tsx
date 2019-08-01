import React from "react";

import "./index.css";
import IAnimation from "../../../../../core";

const ScaleUpCenter: React.FC<IAnimation> = (props: IAnimation) => {
  return (
    <div className="scale-up-center" style={props.style}>
      {props.children}
    </div>
  );
};

export default ScaleUpCenter;
