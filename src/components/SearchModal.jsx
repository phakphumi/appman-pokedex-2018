import React from 'react';
import { useDispatch } from 'react-redux'
import styled from 'styled-components';

import SearchInput from './SearchInput';
import SearchResult from './SearchResult';
import { closeSearchModal } from '../redux/actions';


const Container = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  z-index: 0;

  background-color: black;
  opacity: 0.7;
  width: 100%;
  height: 100%;
`;

const Body = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;

  padding: 10px;
  width: 90%;
  height: 90%;
  background-color: white;
  border-radius: 5px;
`

const SearchModal = React.memo(() => {
  const dispatch = useDispatch();

  return (
    <Container data-testid="SearchModal-container">
      <Body data-testid="SearchModal-body">
        <SearchInput />
        <SearchResult />
      </Body>
      <Background
        data-testid="SearchModal-background"
        onClick={() => dispatch(closeSearchModal())}
      />
    </Container>
  );
});

export default SearchModal;
