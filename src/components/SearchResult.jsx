import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import CardItem from './CardItem';
import { selectSearchResults } from '../redux/selectors';

const Container = styled.div`
  flex-grow: 1;
  margin: 10px;
  overflow-y: scroll;
`;

const SearchResult = React.memo(() => {
  const cards = useSelector(selectSearchResults);

  const SearchItems = cards?.map(card => (
    <CardItem
      key={card.id}
      card={card}
      searchResult
    />
  ));

  return (
    <Container data-testid="SearchResult-container">
      { SearchItems }
    </Container>
  );
});

export default SearchResult;
