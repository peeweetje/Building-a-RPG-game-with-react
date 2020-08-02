import React, { FC } from "react";
import Sprite from "../sprite/sprite";

type actorProps = {
  data: any;
  spriteSrc: string;
  step: number;
  direction?: number;
  dir: any;
  position?: any;
};

const Actor: FC<actorProps> = (
  { spriteSrc, data, step = 0, direction = 0, position = { x: 0, y: 0 } },
) => {
  const { w, h } = data;
  return (
    <>
      <Sprite
        spriteSrc={spriteSrc}
        data={{ w, h, x: step * w, y: direction * h }}
        position={position}
      />
    </>
  );
};

export default Actor;
