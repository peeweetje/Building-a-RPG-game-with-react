import React, { FC } from "react";
import styled from "styled-components";

type spriteProps = {
  data: any;
  spriteSrc: string;
};

const Sprite: FC<spriteProps> = ({ data, spriteSrc }) => {
  const { y, x, w, h } = data;

  return <ContainerDiv
    spriteSrc={spriteSrc}
    width={w}
    height={h}
    xAxis={x}
    yAxis={y}
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
    spriteSrc: string;
  }
>`
  display: inline-block;
  height: ${(props) => (props.height)}px;
  width: ${(props) => (props.width)}px;
  background-image: url(${(props) => props.spriteSrc});
  background-repeat: no-repeat;
  background-position: ${(props) => `-${props.xAxis}px -${props.yAxis}px`};
`;
