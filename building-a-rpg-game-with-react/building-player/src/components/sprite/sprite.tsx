import React, { FC } from 'react';
import styled from 'styled-components';

type spriteProps = {
  data: Record<string, number>;
  spriteSrc?: string;
  position: { x: number; y: number };
};

type styledProps = {
  height: number;
  width: number;
  xAxis: number;
  yAxis: number;
  position: { x: number; y: number };
  spriteSrc?: string;
};

const Sprite: FC<spriteProps> = ({ data, spriteSrc, position }) => {
  const { y, x, w, h } = data;

  return (
    <ContainerDiv
      spriteSrc={spriteSrc}
      width={w}
      height={h}
      xAxis={x}
      yAxis={y}
      position={position}
    ></ContainerDiv>
  );
};

export default Sprite;

const ContainerDiv = styled.div.attrs<styledProps>((props) => ({
  style: {
    height: props.height,
    top: props.position.y,
    left: props.position.x,
    width: props.width,
    backgroundImage: `url(${props.spriteSrc})`,
    backgroundPosition: `-${props.xAxis}px -${props.yAxis}px`,
  },
}))<styledProps>`
  background-repeat: no-repeat;
  position: absolute;
`;
