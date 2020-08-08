import React, { useState, useEffect } from 'react';
import styles from 'styled-components';

type styledContainerProps = {
  width?: number;
  height?: number;
};

type styledToolBarProps = {
  position: { x: number; y: number };
};

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = document.getElementById('handle');
    handle?.addEventListener('mousedown', function (e) {
      e.preventDefault();
      handle.style.pointerEvents = 'none';

      document.body.addEventListener('mousemove', move);
      document.body.addEventListener('mouseup', () => {
        document.body.removeEventListener('mousemove', move);
        handle.style.pointerEvents = 'initial';
      });
    });
    return () => {
      document.body.removeEventListener('mousedown', move);
      document.body.removeEventListener('mouseup', move);
      document.body.removeEventListener('mousemove', move);
    };
  }, []);

  const move = (e: any) => {
    const pos = {
      x: e.clientX,
      y: e.clientY,
    };
    setPosition(pos);
  };

  return (
    <ContainerDiv width={window.innerWidth} height={window.innerHeight}>
      <ToolbarDiv position={position}>
        <img id='handle' src='/images/drag-handle.png' alt='drag-handle' />
      </ToolbarDiv>
    </ContainerDiv>
  );
};

export default App;

const ContainerDiv = styles.div.attrs<styledContainerProps>((props) => ({
  style: {
    width: `${props.width}px`,
    height: `${props.height}px`,
  },
}))<styledContainerProps>`
  position: relative;
  background-color: grey;
  overflow: hidden;
  border: 1px solid black;
`;

const ToolbarDiv = styles.div.attrs<styledToolBarProps>((props) => ({
  style: {
    top: props.position.y,
    left: props.position.x,
  },
}))<styledToolBarProps>`
position: absolute;
border: 1px solid black;
z-index: 1;
width: 200;
height: 200;
background-color: white;
`;
