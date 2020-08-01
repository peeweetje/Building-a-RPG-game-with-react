import React from "react";
import Sprite from "./components/sprite";

const App = () => {
  return (
    <>
      <Sprite
        spriteSrc={"/sprites/lanto2.png"}
        data={{ w: 32, h: 32, x: 0, y: 0 }}
      />
    </>
  );
};

export default App;
