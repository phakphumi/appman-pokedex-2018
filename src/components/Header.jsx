import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100px;

  line-height: 100px;
  font-size: 40px;
  font-weight: bold;
`;

const Header = () => (<Container data-testid="Header-container">My Pokedex</Container>);

export default Header;