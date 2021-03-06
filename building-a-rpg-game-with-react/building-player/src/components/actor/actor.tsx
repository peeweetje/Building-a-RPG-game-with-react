import React, { FC } from 'react';
import Sprite from '../sprite/sprite';

type actorProps = {
  data: Record<string, number>;
  spriteSrc: string;
  step: number;
  direction?: number;
  dir: number;
  position: { x: number; y: number };
};

const Actor: FC<actorProps> = ({
  spriteSrc,
  data,
  step = 0,
  dir = 0,
  position = { x: 0, y: 0 },
}) => {
  const { w, h } = data;
  return (
    <>
      <Sprite
        spriteSrc={spriteSrc}
        data={{ w, h, x: step * w, y: dir * h }}
        position={position}
      />
    </>
  );
};

export default Actor;
