import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { openSearchModal } from '../redux/actions';
import { COLORS } from '../styles/colors';

const Container = styled.div`
  background-color: ${COLORS.Fire};
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 0;

  width: 100%;
  height: 80px;
`;

const AddButtonStyled = styled.button`
  color: white;
  background-color: ${COLORS.Fire};
  position: absolute;
  bottom: 0;
  
  width: 160px;
  height: 160px;
  border-radius: 80px;
  border-color: transparent;
  font-size: 100px;

  &:focus {
    outline: unset;
  }
`

const Footer = () => {
  const dispatch = useDispatch();

  return (
  <Container data-testid="footer-container">
    <AddButtonStyled data-testid="footer-addButton" onClick={() => dispatch(openSearchModal())}>+</AddButtonStyled>
  </Container>
)}

export default Footer;
