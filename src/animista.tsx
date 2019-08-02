import * as React from "react";
import AnimistaTypes from "./core/animista.types";

import "./assets/index.css";

export interface IProps {
  type: AnimistaTypes;
  children: React.ReactNode;
  style?: React.CSSProperties;
  delay?: string;
}

const Animista: React.FC<IProps> = (props: IProps) => {
  const { type, children, style = {}, delay } = props;

  const mergedStyles: React.CSSProperties = {
    animationDelay: delay,
    ...style
  };

  return (
    <div style={mergedStyles} className={type}>
      {children}
    </div>
  );
};

export default Animista;
