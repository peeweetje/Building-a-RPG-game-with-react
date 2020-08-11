import React, { FC } from 'react';
import styles from 'styled-components';

type styledToolBarProps = {
  position: { x: number; y: number };
  size: { width: number; height: number };
  tileSet: string;
};

type styledTileProps = {
  x: number;
  y: number;
  tileSet: string;
};

const TilePallet: FC<styledToolBarProps> = ({ tileSet, position, size }) => {
  const { width, height } = size;
  const tiles = [];
  let id = 0;

  for (let y = 0; y < height; y = y + 32) {
    const row = [];
    for (let x = 0; x < width; x = x + 32) {
      row.push({
        x,
        y,
        id: id++,
      });
    }
    tiles.push(row);
  }

  return (
    <ToolbarDiv tileSet={tileSet} size={size} position={position} id='pallet'>
      <img id='handle' src='/images/drag-handle.png' alt='drag-handle' />
      {tiles.map((row, y) => (
        <RowStyling key={y}>
          {row.map((row, x) => (
            <TileStyling key={x} x={x} y={y} tileSet={tileSet} />
          ))}
        </RowStyling>
      ))}
    </ToolbarDiv>
  );
};

export default TilePallet;

const ToolbarDiv = styles.div.attrs<styledToolBarProps>((props) => ({
  style: {
    top: props.position.y,
    left: props.position.x,
  },
}))<styledToolBarProps>`
  position: absolute;
  border: 1px solid black;
  z-index: 1;
  background-color: white;
  `;

const RowStyling = styles.div`
display: flex;
`;

const TileStyling = styles.div.attrs<styledTileProps>((props) => ({
  style: {
    background: `url(${props.tileSet}.png) -${props.x * 32}px -${
      props.y * 32
    }px no-repeat`,
  },
}))<styledTileProps>`
border-top: 1px solid black;
border-right: 1px solid black;
width: 32px;
height: 32px;
`;
