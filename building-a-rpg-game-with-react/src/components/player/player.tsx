import React, { FC } from "react";
import useKeyPress from "./player-helper";
import { useWalk } from "./player-helper";
import Actor from "../actor/actor";

type playerProps = {
  spriteNr: string;
};

const Player: FC<playerProps> = ({ spriteNr }) => {
  const { dir, step, walk, position } = useWalk(3);
  const data = { w: 32, h: 32 };

  useKeyPress((e: any) => {
    walk(e.key.replace("Arrow", "").toLowerCase());

    e.preventDefault();
  });

  return (
    <>
      <Actor
        spriteSrc={`/sprites/${spriteNr}.png`}
        data={data}
        step={step}
        dir={dir}
        position={position}
      />
    </>
  );
};

export default Player;
