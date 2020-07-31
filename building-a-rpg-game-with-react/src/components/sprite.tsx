import React from 'react';
import styled from 'styled-components';
import spriteSrc from '../sprites/lanto2.png';

const Sprite = () => {
  return <ContainerDiv></ContainerDiv>;
};

export default Sprite;

const ContainerDiv = styled.div`
  display: inline-block;
  height: 2rem;
  width: 2rem;
  background-image: url(${spriteSrc});
  background-repeat: no-repeat;
  background-position: 0rem 0rem;
`;
