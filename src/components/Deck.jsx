import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'

import CardItem from '../components/CardItem';
import { selectDeck } from '../redux/selectors';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  padding: 0 10px 80px 10px;
  width: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
`

export const Deck = React.memo(() => {
  const deck = useSelector(selectDeck);

  const CardItems = deck?.map(card => <CardItem key={card.id} card={card} />);

  return (
    <Container>
      {CardItems}
    </Container>
  );
});

export default Deck;
