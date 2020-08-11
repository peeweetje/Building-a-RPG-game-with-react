import React from "react";
import styles from "styled-components";

type styledMapProps = {
  size: { width: number; height: number };
};

type styledTileProps = {
  x?: number;
  y?: number;
  tileset?: string;
  v?: number;
  tile?: any;
};

type mapProps = {
  x?: number;
  y?: number;
  tileset?: string;
  v?: number;
  tile?: any;
  tiles: any;
  size: { width: number; height: number };
};

const MapBuilder: React.FC<mapProps> = (
  { tiles, tileset, size },
) => {
  return (
    <MapStyling size={size}>
      {tiles.map((row: any[], y: number) =>
        <TileStyling key={y}>
          {row.map((tile: number, x: number) =>
            <TilesStyling key={x} tile={tile} tileset={tileset}></TilesStyling>
          )}
        </TileStyling>
      )}
    </MapStyling>
  );
};

export default MapBuilder;

const MapStyling = styles.div.attrs<styledMapProps>((props) => ({
  style: {
    width: props.size,
  },
}))<styledMapProps>`
    box-sizing: border-box;
    background-color: white;
    `;

const TileStyling = styles.div`
     display: flex;
    `;

const TilesStyling = styles.div.attrs<styledTileProps>((props) => ({
  style: {
    background: `url(${props.tileset}.png) -${props.tile.v.x *
      32}px -${props.tile.v.y *
      32}px no-repeat`,
  },
}))<styledTileProps>`
      border-top: 1px solid black;
      border-right: 1px solid black;
      width: 32px;
      height: 32px;
      `;
