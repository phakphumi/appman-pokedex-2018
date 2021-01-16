import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import SearchItem from './SearchItem';
import { selectSearchResults } from '../redux/selectors';

const Container = styled.div`
  flex-grow: 1;
  padding: 10px;
  overflow-y: scroll;
`;

const SearchResult = () => {
  const cards = useSelector(selectSearchResults);

  const SearchItems = cards?.map(card => <SearchItem key={card.id} card={card} />);

  return (
    <Container data-testid="SearchResult-container">
      { SearchItems }
    </Container>
  );
};

export default SearchResult;
