import React, { useEffect, useState } from "react";
import styles from "styled-components";
import { useDraggable } from "./components/custom-hooks/use-draggable";
import TilePallet from "./components/tile-pallet/tile-pallet";
import MapBuilder from "./components/map/map";

type styledAppProps = {
  width: number;
  height: number;
};

interface IStateObject {
  x: number;
  y: number;
  id: number;
  v: { x: number; y: number };
}

const App = () => {
  const [tileSet, setTileSet] = useState("sprites/rpg-nature-tileset/spring");
  const [tiles, setTiles] = useState<IStateObject[][]>([]);
  const [mapSize, setMapSize] = useState({ width: 800, height: 600 });
  const { position } = useDraggable("handle");

  useEffect(() => {
    const _tiles = [];
    let id = 0;

    for (let y = 0; y < mapSize.height; y = y + 32) {
      const row = [];
      for (let x = 0; x < mapSize.width; x = x + 32) {
        row.push({ x, y, id: id++, v: { x: -32, y: -32 } });
      }
      _tiles.push(row);
    }
    setTiles(_tiles);
  }, [mapSize.height, mapSize.width]);

  return (
    <ContainerDiv width={window.innerWidth} height={window.innerHeight}>
      <TilePallet
        tileSet={tileSet}
        position={position}
        size={{ height: 288, width: 640 }}
      />
      <MapBuilder
        tile={tiles}
        tiles={tiles}
        size={{ height: 576, width: 640 }}
      />
    </ContainerDiv>
  );
};

export default App;

const ContainerDiv = styles.div.attrs<styledAppProps>((props) => ({
  style: {
    width: props.width,
    height: props.height,
  },
}))<styledAppProps>`
  position: relative;
  background-color: grey;
  overflow: hidden;
  border: 1px solid black;
`;
