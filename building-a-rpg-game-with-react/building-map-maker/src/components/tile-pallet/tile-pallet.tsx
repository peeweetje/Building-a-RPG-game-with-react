import React, { FC } from 'react';
import styles from 'styled-components';

type styledToolBarProps = {
  position: { x: number; y: number };
  size: { width: number; height: number };
};

type styledTileProps = {
  spriteSrc: string;
  x: number;
  y: number;
};

const TilePallet: FC<styledToolBarProps> = ({ position, size }) => {
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
    <ToolbarDiv size={size} position={position} id='pallet'>
      <img id='handle' src='/images/drag-handle.png' alt='drag-handle' />
      {tiles.map((row, y) => (
        <RowStyling key={y}>
          {row.map((row, x) => (
            <TileStyling
              key={x}
              x={x}
              y={y}
              spriteSrc={'/sprites/rpg-nature-tileset/spring.png'}
            />
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
    background: `url(${props.spriteSrc}) -${props.x * 32}px -${
      props.y * 32
    }px no-repeat`,
  },
}))<styledTileProps>`
border-top: 1px solid black;
border-right: 1px solid black;
width: 32px;
height: 32px;
`;
