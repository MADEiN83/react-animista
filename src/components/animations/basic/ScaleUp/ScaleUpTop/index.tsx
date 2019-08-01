import React from "react";

import "./index.css";
import IAnimation from "../../../../../core";

const ScaleUpTop: React.FC<IAnimation> = (props: IAnimation) => {
  return (
    <div className="scale-up-top" style={props.style}>
      {props.children}
    </div>
  );
};

export default ScaleUpTop;
