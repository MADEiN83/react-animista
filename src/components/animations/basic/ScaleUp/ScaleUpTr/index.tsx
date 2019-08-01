import React from "react";

import "./index.css";
import IAnimation from "../../../../../core";

const ScaleUpTr: React.FC<IAnimation> = (props: IAnimation) => {
  return (
    <div className="scale-up-tr" style={props.style}>
      {props.children}
    </div>
  );
};

export default ScaleUpTr;
