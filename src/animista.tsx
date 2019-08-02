import * as React from "react";
import ViewportListener from "./core/ViewportListener";
import AnimistaTypes from "./core/animista.types";

import "./assets/index.css";

export interface IProps {
  type: AnimistaTypes;
  children: React.ReactNode;
  style?: React.CSSProperties;
  delay?: string;
  hover?: boolean;
  viewport?: boolean;
}

const Animista: React.FC<IProps> = (props: IProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const {
    type,
    children,
    style = {},
    delay,
    hover = false,
    viewport = false
  } = props;

  const id = `Animista-${Math.random()}`;
  let className = type.toString();
  if (hover) className += "-hover";
  if (viewport && !isVisible) {
    className = "";
  }

  const mergedStyles: React.CSSProperties = {
    animationDelay: delay,
    ...style
  };

  return (
    <ViewportListener
      id={id}
      enabled={viewport && !isVisible}
      onViewportVisible={() => setIsVisible(true)}
    >
      <div id={id} style={mergedStyles} className={className}>
        {children}
      </div>
    </ViewportListener>
  );
};

export default Animista;
