import * as React from "react";

import ViewportListener from "./core/ViewportListener";
import "./assets/index.css";

export interface IProps {
  type: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  delay?: string;
  hover?: boolean;
  viewport?: boolean;
  disabled?: boolean;
  tag?: string;
}

const Animista: React.FC<IProps> = (props: IProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const {
    children,
    style = {},
    delay,
    viewport = true,
    disabled = false,
    tag = "div"
  } = props;

  const id = generateUniqId();
  const className = disabled ? "" : buildClassName(props, isVisible);
  const mergedStyles: React.CSSProperties = {
    animationDelay: disabled ? undefined : delay,
    ...style
  };

  const AnimistaComponent = React.createElement<any>(
    tag,
    { id, style: mergedStyles, className },
    children
  );

  return (
    <ViewportListener
      id={id}
      enabled={!disabled && viewport && !isVisible}
      onViewportVisible={() => setIsVisible(true)}
    >
      {AnimistaComponent}
    </ViewportListener>
  );
};

/* UTILS */
const generateUniqId = () => `Animista-${Math.random()}`;
const buildClassName = (props: IProps, isVisible: boolean): string => {
  const { type, hover = false, viewport = false } = props;

  if (viewport && !isVisible) return "";

  let className = type.toString();
  if (hover) className += "-hover";
  return className;
};

export default Animista;
