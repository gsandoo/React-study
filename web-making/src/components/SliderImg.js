import React from 'react';
import styled from 'styled-components';

export default function SliderImg({ img }) {
  return <IMG src={img} />;
}

const IMG = styled.img`
  width: 25vw;
  height: auto;
`;

