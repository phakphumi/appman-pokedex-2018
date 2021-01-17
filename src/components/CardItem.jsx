import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import CardItemDescription from './CardItemDescription';
import {
  addCardToDeck,
  removeCardFromDeck,
  removeSearchResult,
} from '../redux/actions';
import { COLORS } from '../styles/colors';

const Container = styled.div`
  position: relative;
  display: flex;
  width: ${props => props.searchResult ? '100%' : 'calc(50% - 20px)'};
  height: 250px;
  border-radius: 10px;
  background-color: ${`${COLORS.Metal}4D`}; /* 4D equals to 30% alpha */
  margin: ${props => props.searchResult ? '20px 0 20px 0' : '10px'};
`;

const Image = styled.img`
  width: auto;
  height: 230px;
  padding: 10px;
`;

const ActionBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;

  background-color: transparent;
  border-color: transparent;
  color: ${COLORS.Fairy};
  font-size: 24px;
  cursor: pointer;

  &:hover {
    font-size: 26px;
  }
  &:focus {
    outline: transparent;
  }
`;

const CardItem = React.memo(({ card, searchResult = false }) => {
  const dispatch = useDispatch();
  const [showActionBtn, setShowActionBtn] = useState(false);

  const onActionBtnClick = useCallback(() => {
    if (searchResult) {
      dispatch(removeSearchResult(card?.id));
      dispatch(addCardToDeck(card));
    } else {
      dispatch(removeCardFromDeck(card?.id))
    }
  }, [card, dispatch, searchResult])

  const actionBtnLabel = searchResult ? 'Add' : 'X';

  return (
    <Container
      data-testid="CartItem-container"
      onMouseOver={() => setShowActionBtn(true)}
      onMouseLeave={() => setShowActionBtn(false)}
      searchResult={searchResult}
    >
      <Image src={card?.imageUrl} alt="Card Img"/>   
      <CardItemDescription
        name={card?.name}
        hp={card?.hp}
        attacks={card?.attacks}
        weaknesses={card?.weaknesses}
        searchResult={searchResult}
      />
      {showActionBtn && (
        <ActionBtn data-testid="CartItem-actionBtn" onClick={onActionBtnClick}>
          {actionBtnLabel}
        </ActionBtn>)}
    </Container>
  );
});

export default CardItem;
