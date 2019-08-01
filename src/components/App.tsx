import React from "react";

import {
  ScaleUpCenter,
  ScaleUpTop,
  ScaleUpTr,
  ScaleUpRight,
  FlipHorizontalBottom
} from "./animations";
import IAnimation from "../core";

const animations: React.FunctionComponent<IAnimation>[] = [
  ScaleUpCenter,
  ScaleUpTop,
  ScaleUpTr,
  ScaleUpRight,
  FlipHorizontalBottom
];

const App: React.FC = () => {
  return (
    <div className="App">
      {animations.map((Animation, key) => (
        <Animation key={key} style={squareStyles}>
          A
        </Animation>
      ))}
    </div>
  );
};

const squareStyles: React.CSSProperties = {
  width: 170,
  height: 170,
  backgroundColor: "#53a3dc",
  textAlign: "center",
  color: "white",
  borderRadius: 10,
  display: "inline-block",
  margin: 5
};

export default App;
