import * as React from "react";
import AnimistaTypes from "./core/animista.types";

import "./assets/index.css";

export interface IProps {
  type: AnimistaTypes;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Animista: React.FC<IProps> = (props: IProps) => {
  const { type, children, style } = props;

  return (
    <div style={style} className={type}>
      {children}
    </div>
  );
};

export default Animista;
