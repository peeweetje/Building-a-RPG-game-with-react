import React, { FC } from "react";
import styled from "styled-components";

type spriteProps = {
  data: any;
  spriteSrc: string;
  position?: any;
};

const Sprite: FC<spriteProps> = ({ data, spriteSrc, position }) => {
  const { y, x, w, h } = data;

  return <ContainerDiv
    spriteSrc={spriteSrc}
    width={w}
    height={h}
    xAxis={x}
    yAxis={y}
    position={position}
  >
  </ContainerDiv>;
};

export default Sprite;

const ContainerDiv = styled.div<
  {
    height: number;
    width: number;
    xAxis: number;
    yAxis: number;
    position: { x: number; y: number };
    spriteSrc: string;
  }
>`
  position: absolute;
  top:${(props) => (props.position.y)}px;;
  left: ${(props) => (props.position.x)}px;;
  height: ${(props) => (props.height)}px;
  width: ${(props) => (props.width)}px;
  background-image: url(${(props) => props.spriteSrc});
  background-repeat: no-repeat;
  background-position: ${(props) => `-${props.xAxis}px -${props.yAxis}px`};
`;
