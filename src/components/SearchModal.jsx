import React from 'react';
import { useDispatch } from 'react-redux'
import styled from 'styled-components';
import { closeSearchModal } from '../redux/actions';


const Container = styled.div`
  position: absolute;
  top: 0;

  background-color: white;
  opacity: 0.7;
  width: 100%;
  height: 100%;
`;

const SearchModal = () => {
  const dispatch = useDispatch();

  return <Container data-testid="SearchModal-container" onClick={() => dispatch(closeSearchModal())} />;
};

export default SearchModal;
