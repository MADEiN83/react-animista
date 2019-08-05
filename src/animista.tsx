import * as React from "react";

import ViewportListener from "./core/ViewportListener";
import AnimistaTypes from "./core/animista.types";
import { Direction } from "./core";

import "./assets/index.css";

export interface IProps {
  type: AnimistaTypes;
  children: React.ReactNode;
  style?: React.CSSProperties;
  delay?: string;
  hover?: boolean;
  viewport?: boolean;
  disabled?: boolean;
  tag?: string;
  className?: string;
  onClick?: Function;
  direction?: Direction;
  iterationCount?: number;
  duration?: string;
}

const Animista: React.FC<IProps> = (props: IProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const {
    children,
    style = {},
    delay,
    disabled = false,
    tag = "div",
    className = "",
    onClick = () => {},
    direction = "normal",
    iterationCount = 1,
    duration = "0.5s"
  } = props;

  const id = generateUniqId();
  const finalClassName =
    !disabled && buildClassName(props, isVisible, className);

  const tagStyle: React.CSSProperties = {
    ...style,
    animationDelay: disabled ? undefined : delay,
    animationDirection: direction,
    animationIterationCount: iterationCount,
    animationDuration: duration
  };

  const AnimistaComponent = React.createElement<any>(
    tag,
    {
      id,
      style: tagStyle,
      className: finalClassName,
      onClick
    },
    children
  );

  return (
    <ViewportListener
      id={id}
      enabled={!disabled && !isVisible}
      onViewportVisible={() => setIsVisible(true)}
    >
      {AnimistaComponent}
    </ViewportListener>
  );
};

/* UTILS */
const generateUniqId = () => `Animista-${Math.random()}`;
const buildClassName = (
  props: IProps,
  isVisible: boolean,
  other?: string
): string => {
  const { type, hover = false } = props;

  if (!isVisible) return "";

  let className = type.toString();
  if (hover) className += "-hover";
  if (other && other.length) className += ` ${other}`;
  return className;
};

export default Animista;
