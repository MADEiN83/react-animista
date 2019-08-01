import * as React from "react";
import AnimationTypes from "./core/animations.enum";

import "./assets/index.css";

export interface IProps {
  type: AnimationTypes;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Animation: React.FC<IProps> = (props: IProps) => {
  const { type, children, style } = props;

  return (
    <div style={style} className={type}>
      {children}
    </div>
  );
};

export default Animation;
