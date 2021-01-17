import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'

import SearchItem from '../components/SearchItem';
import { selectDeck } from '../redux/selectors';

const Container = styled.div`
  flex-grow: 1;
  padding: 0 10px 80px 10px;
  width: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
`

export const Deck = React.memo(() => {
  const deck = useSelector(selectDeck);

  const Cards = deck?.map(card => <SearchItem key={card.id} card={card} />);

  return (
    <Container>
      {Cards}
    </Container>
  );
});

export default Deck;
