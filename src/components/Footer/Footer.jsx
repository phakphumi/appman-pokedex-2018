import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #eb4d4b;
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 0;

  width: 100%;
  height: 80px;
`;

const AddButtonStyled = styled.button`
  color: white;
  background-color: #eb4d4b;
  position: absolute;
  bottom: 0;
  
  width: 160px;
  height: 160px;
  border-radius: 80px;
  border-color: transparent;
  font-size: 100px;
`

const Footer = () => (
  <Container data-testid="footer-container">
    <AddButtonStyled data-testid="footer-addButton">+</AddButtonStyled>
  </Container>
)

export default Footer;
