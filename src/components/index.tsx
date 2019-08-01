import React from "react";

import Animation, { AnimationTypes } from "./Animation";

const App: React.FC = () => {
  const items: any[] = [];
  for (let item in AnimationTypes) items.push(item);

  return (
    <div className="App">
      {items.map((item, key) => (
        <Animation
          key={key}
          type={AnimationTypes[item] as AnimationTypes}
          style={squareStyles}
        >
          .{AnimationTypes[item] as AnimationTypes}
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
