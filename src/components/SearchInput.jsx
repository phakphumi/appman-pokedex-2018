import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../styles/colors'

const InputStyled = styled.input`
  background: white url(/../search.png) right no-repeat;
  background-size: 50px 50px;
  padding-right: 50px;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  font-size: 30px;

  border-color: ${COLORS.Metal};
`;

const SearchInput = () => {
  return (
    <InputStyled placeholder="Find pokemon" />
  );
};

export default SearchInput;
