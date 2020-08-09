import React from 'react';
import styles from 'styled-components';
import { useDraggable } from './components/custom-hooks/use-draggable';
import TilePallet from './components/tile-pallet/tile-pallet';

type styledAppProps = {
  width?: number;
  height?: number;
};

const App = () => {
  const { position } = useDraggable('handle');
  return (
    <ContainerDiv width={window.innerWidth} height={window.innerHeight}>
      <TilePallet position={position} size={{ height: 288, width: 640 }} />
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
