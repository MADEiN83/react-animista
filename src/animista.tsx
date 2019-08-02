import * as React from "react";
import AnimistaTypes from "./core/animista.types";

import "./assets/index.css";

export interface IProps {
  type: AnimistaTypes;
  children: React.ReactNode;
  style?: React.CSSProperties;
  delay?: string;
  hover?: boolean;
}

const Animista: React.FC<IProps> = (props: IProps) => {
  const { type, children, style = {}, delay, hover = false } = props;

  const className = `${type}${hover ? "-hover" : ""}`;
  const mergedStyles: React.CSSProperties = {
    animationDelay: delay,
    ...style
  };

  return (
    <div style={mergedStyles} className={className}>
      {children}
    </div>
  );
};

export default Animista;
