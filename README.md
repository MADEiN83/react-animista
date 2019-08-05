# react-animista

![npm](https://img.shields.io/npm/v/react-animista?style=flat-square) ![npm](https://img.shields.io/npm/dm/react-animista?style=flat-square) ![npm](https://img.shields.io/npm/dt/react-animista?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-animista?style=flat-square)

React component to be able to simply use animations from : http://animista.net/play

**218** free animations are available!

[Live demo](https://madein83.github.io/react-animista-demo/)

[Demo (source)](https://github.com/MADEiN83/react-animista-demo)

## Installation

Install with [npm](https://www.npmjs.com/):

```bash
$ npm i -s react-animista
```

## Usage

Import the `Animista` component from library:

```tsx
import Animista from "react-animista";
```

**Parameters:**

| Name             | Type                                                                             | Description                                   |
| ---------------- | -------------------------------------------------------------------------------- | --------------------------------------------- |
| `type`           | `string | AnimistaTypes`                                                         | (required) The type of the wanted animation.  |
| `style`          | `React.CSSProperties`                                                            | (optional) CSS style if needed.               |
| `delay`          | `string` (default: `0ms`)                                                        | (optional) Delay before animation starts.     |
| `duration`       | `string` (default: `0ms`)                                                        | (optional) Duration of the animation.         |
| `hover`          | `boolean`                                                                        | (optional) If animation must starts on hover. |
| `disabled`       | `boolean` (default: `false`)                                                     | (optional) If animation must be stopped.      |
| `tag`            | `string` (default: `div`)                                                        | (optional) The tag to use.                    |
| `className`      | `string`                                                                         | (optional) Aditionnal classes.                |
| `direction`      | `normal|reverse|alternate|alternate-reverse|initial|inherit` (default: `normal`) | (optional) Animation direction                |
| `iterationCount` | `number` (default: `1`)                                                          | (optional) The number of iterations           |
| `onClick`        | `Function`                                                                       | (optional) On click handler                   |

## Example

### Basic animation

```tsx
import React from "react";
import Animista, { AnimistaTypes } from "react-animista";

const App: React.FC = () => {
  return (
    <article>
      <Animista type={AnimistaTypes.SCALE_UP_TOP}>Basic animation</Animista>
    </article>
  );
};

export default App;
```

### Reversed animation

```tsx
import React from "react";
import Animista, { AnimistaTypes } from "react-animista";

const App: React.FC = () => {
  return (
    <article>
      <Animista type={AnimistaTypes.SCALE_UP_TOP} direction="reverse">
        Reversed animation
      </Animista>
    </article>
  );
};

export default App;
```

### Use another HTML tag

```tsx
import React from "react";
import Animista, { AnimistaTypes } from "react-animista";

const App: React.FC = () => {
  return (
    <article>
      <Animista type={AnimistaTypes.SCALE_UP_TOP} tag="h1" direction="reverse">
        Wrapped in H1 tag
      </Animista>
    </article>
  );
};

export default App;
```

### Use delay

```tsx
import React from "react";
import Animista, { AnimistaTypes } from "react-animista";

const App: React.FC = () => {
  return (
    <article>
      <Animista type={AnimistaTypes.SCALE_UP_TOP} delay="5s">
        Animation starts in 5s
      </Animista>
    </article>
  );
};

export default App;
```

### Use duration

```tsx
import React from "react";
import Animista, { AnimistaTypes } from "react-animista";

const App: React.FC = () => {
  return (
    <article>
      <Animista type={AnimistaTypes.SCALE_UP_TOP} duration="5s">
        Animation starts now & will ends in 5s
      </Animista>
    </article>
  );
};

export default App;
```

### Adding custom style(s)

```tsx
import React from "react";
import Animista, { AnimistaTypes } from "react-animista";

const App: React.FC = () => {
  return (
    <article>
      <Animista
        type={AnimistaTypes.SCALE_UP_TOP}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "lightblue"
        }}
      >
        Custom style
      </Animista>
    </article>
  );
};

export default App;
```

### Adding custom classes

```tsx
import React from "react";
import Animista, { AnimistaTypes } from "react-animista";

const App: React.FC = () => {
  return (
    <article>
      <Animista
        type={AnimistaTypes.SCALE_UP_TOP}
        className="my-custom-class and-another-one"
      >
        Custom classes
      </Animista>
    </article>
  );
};

export default App;
```

### On click event handler

```tsx
import React from "react";
import Animista, { AnimistaTypes } from "react-animista";

const App: React.FC = () => {
  return (
    <article>
      <Animista
        type={AnimistaTypes.SCALE_UP_TOP}
        onClick={() => console.log("Do your job")}
      >
        OnClick event handler
      </Animista>
    </article>
  );
};

export default App;
```

## Animations types

```
SCALE_UP_BL
SCALE_UP_BOTTOM
SCALE_UP_BR
SCALE_UP_CENTER
SCALE_UP_HOR_CENTER
SCALE_UP_HOR_LEFT
SCALE_UP_HOR_RIGHT
SCALE_UP_LEFT
SCALE_UP_RIGHT
SCALE_UP_TL
SCALE_UP_TOP
SCALE_UP_TR
SCALE_UP_VER_BOTTOM
SCALE_UP_VER_CENTER
SCALE_UP_VER_TOP
SCALE_DOWN_BL
SCALE_DOWN_BOTTOM
SCALE_DOWN_BR
SCALE_DOWN_CENTER
SCALE_DOWN_HOR_CENTER
SCALE_DOWN_HOR_LEFT
SCALE_DOWN_HOR_RIGHT
SCALE_DOWN_LEFT
SCALE_DOWN_RIGHT
SCALE_DOWN_TL
SCALE_DOWN_TOP
SCALE_DOWN_TR
SCALE_DOWN_VER_BOTTOM
SCALE_DOWN_VER_CENTER
SCALE_DOWN_VER_TOP
ROTATE_BL
ROTATE_BOTTOM
ROTATE_BR
ROTATE_CENTER
ROTATE_DIAGONAL_1
ROTATE_DIAGONAL_2
ROTATE_DIAGONAL_BL
ROTATE_DIAGONAL_BR
ROTATE_DIAGONAL_TL
ROTATE_DIAGONAL_TR
ROTATE_HOR_BOTTOM
ROTATE_HOR_CENTER
ROTATE_HOR_TOP
ROTATE_LEFT
ROTATE_RIGHT
ROTATE_TL
ROTATE_TOP
ROTATE_TR
ROTATE_VERT_CENTER
ROTATE_VERT_LEFT
ROTATE_VERT_RIGHT
ROTATE_SCALE_DOWN
ROTATE_SCALE_DOWN_DIAG_1
ROTATE_SCALE_DOWN_DIAG_2
ROTATE_SCALE_DOWN_HOR
ROTATE_SCALE_DOWN_VER
ROTATE_SCALE_UP
ROTATE_SCALE_UP_DIAG_1
ROTATE_SCALE_UP_DIAG_2
ROTATE_SCALE_UP_HOR
ROTATE_SCALE_UP_VER
ROTATE_90_BL_CCW
ROTATE_90_BL_CW
ROTATE_90_BOTTOM_CCW
ROTATE_90_BOTTOM_CW
ROTATE_90_BR_CCW
ROTATE_90_BR_CW
ROTATE_90_CCW
ROTATE_90_CW
ROTATE_90_HORIZONTAL_BCK
ROTATE_90_HORIZONTAL_FWD
ROTATE_90_LEFT_CCW
ROTATE_90_LEFT_CW
ROTATE_90_RIGHT_CCW
ROTATE_90_RIGHT_CW
ROTATE_90_TL_CCW
ROTATE_90_TL_CW
ROTATE_90_TOP_CCW
ROTATE_90_TOP_CW
ROTATE_90_TR_CCW
ROTATE_90_TR_CW
ROTATE_90_VERTICAL_BCK
ROTATE_90_VERTICAL_FWD
FLIP_DIAGONAL_1_BCK
FLIP_DIAGONAL_1_BL
FLIP_DIAGONAL_1_FWD
FLIP_DIAGONAL_1_TR
FLIP_DIAGONAL_2_BCK
FLIP_DIAGONAL_2_BR
FLIP_DIAGONAL_2_FWD
FLIP_DIAGONAL_2_TL
FLIP_HORIZONTAL_BCK
FLIP_HORIZONTAL_BOTTOM
FLIP_HORIZONTAL_FWD
FLIP_HORIZONTAL_TOP
FLIP_VERTICAL_BCK
FLIP_VERTICAL_FWD
FLIP_VERTICAL_LEFT
FLIP_VERTICAL_RIGHT
FLIP_2_HOR_BOTTOM_1
FLIP_2_HOR_BOTTOM_2
FLIP_2_HOR_BOTTOM_BCK
FLIP_2_HOR_BOTTOM_FWD
FLIP_2_HOR_TOP_1
FLIP_2_HOR_TOP_2
FLIP_2_HOR_TOP_BCK
FLIP_2_HOR_TOP_FWD
FLIP_2_VER_LEFT_1
FLIP_2_VER_LEFT_2
FLIP_2_VER_LEFT_BCK
FLIP_2_VER_LEFT_FWD
FLIP_2_VER_RIGHT_1
FLIP_2_VER_RIGHT_2
FLIP_2_VER_RIGHT_BCK
FLIP_2_VER_RIGHT_FWD
FLIP_SCALE_DOWN_DIAG_1
FLIP_SCALE_DOWN_DIAG_2
FLIP_SCALE_DOWN_HOR
FLIP_SCALE_DOWN_VER
FLIP_SCALE_UP_DIAG_1
FLIP_SCALE_UP_DIAG_2
FLIP_SCALE_UP_HOR
FLIP_SCALE_UP_VER
FLIP_SCALE_2_HOR_BOTTOM
FLIP_SCALE_2_HOR_TOP
FLIP_SCALE_2_VER_LEFT
FLIP_SCALE_2_VER_RIGHT
SWING_BOTTOM_BCK
SWING_BOTTOM_FWD
SWING_BOTTOM_LEFT_BCK
SWING_BOTTOM_LEFT_FWD
SWING_BOTTOM_RIGHT_BCK
SWING_BOTTOM_RIGHT_FWD
SWING_LEFT_BCK
SWING_LEFT_FWD
SWING_RIGHT_BCK
SWING_RIGHT_FWD
SWING_TOP_BCK
SWING_TOP_FWD
SWING_TOP_LEFT_BCK
SWING_TOP_LEFT_FWD
SWING_TOP_RIGHT_BCK
SWING_TOP_RIGHT_FWD
SLIDE_BL
SLIDE_BOTTOM
SLIDE_BR
SLIDE_LEFT
SLIDE_RIGHT
SLIDE_TL
SLIDE_TOP
SLIDE_TR
SLIDE_BCK_BL
SLIDE_BCK_BOTTOM
SLIDE_BCK_BR
SLIDE_BCK_CENTER
SLIDE_BCK_LEFT
SLIDE_BCK_RIGHT
SLIDE_BCK_TL
SLIDE_BCK_TOP
SLIDE_BCK_TR
SLIDE_FWD_BL
SLIDE_FWD_BOTTOM
SLIDE_FWD_BR
SLIDE_FWD_CENTER
SLIDE_FWD_LEFT
SLIDE_FWD_RIGHT
SLIDE_FWD_TL
SLIDE_FWD_TOP
SLIDE_FWD_TR
SLIDE_ROTATE_HOR_B_BCK
SLIDE_ROTATE_HOR_B_FWD
SLIDE_ROTATE_HOR_BOTTOM
SLIDE_ROTATE_HOR_T_BCK
SLIDE_ROTATE_HOR_T_FWD
SLIDE_ROTATE_HOR_TOP
SLIDE_ROTATE_VER_L_BCK
SLIDE_ROTATE_VER_L_FWD
SLIDE_ROTATE_VER_LEFT
SLIDE_ROTATE_VER_R_BCK
SLIDE_ROTATE_VER_R_FWD
SLIDE_ROTATE_VER_RIGHT
SHADOW_DROP_BL
SHADOW_DROP_BOTTOM
SHADOW_DROP_BR
SHADOW_DROP_CENTER
SHADOW_DROP_LEFT
SHADOW_DROP_LR
SHADOW_DROP_RIGHT
SHADOW_DROP_TB
SHADOW_DROP_TL
SHADOW_DROP_TOP
SHADOW_DROP_TR
SHADOW_DROP_2_BL
SHADOW_DROP_2_BOTTOM
SHADOW_DROP_2_BR
SHADOW_DROP_2_CENTER
SHADOW_DROP_2_LEFT
SHADOW_DROP_2_LR
SHADOW_DROP_2_RIGHT
SHADOW_DROP_2_TB
SHADOW_DROP_2_TL
SHADOW_DROP_2_TOP
SHADOW_DROP_2_TR
SHADOW_POP_BL
SHADOW_POP_BR
SHADOW_POP_TL
SHADOW_POP_TR
SHADOW_INSET_BL
SHADOW_INSET_BOTTOM
SHADOW_INSET_BR
SHADOW_INSET_CENTER
SHADOW_INSET_LEFT
SHADOW_INSET_LR
SHADOW_INSET_RIGHT
SHADOW_INSET_TB
SHADOW_INSET_TL
SHADOW_INSET_TOP
SHADOW_INSET_TR
```

# Credits

All amazing CSS animations are made by [Ana Travas](https://twitter.com/ana108) & [Sergej Skrjanec](https://twitter.com/sergej108).
