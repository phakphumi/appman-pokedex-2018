import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import CartItem from '../CardItem';
import {
  addCardToDeck,
  removeCardFromDeck,
  removeSearchResult,
} from '../../redux/actions';

import '@testing-library/jest-dom';

const mockDispatchFunc = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatchFunc,
}));

jest.mock('../CardItemDescription', () => () => <div data-testid="CardItemDescription-container" />)
jest.mock('../../redux/actions', () => ({
  addCardToDeck: jest.fn(),
  removeCardFromDeck: jest.fn(),
  removeSearchResult: jest.fn(),
}))

afterEach(cleanup);
afterEach(() => mockDispatchFunc.mockClear());

describe('<CartItem />', () => {
  it('should contain CartItemDescription', () => {
    const { queryByTestId } = render(<CartItem />);

    expect(queryByTestId('CardItemDescription-container')).toBeInTheDocument();
  });

  it('should display ActionBtn when mouseOver the container', async () => {
    const { queryByTestId } = render(<CartItem />);
    expect(queryByTestId('CartItem-actionBtn')).not.toBeInTheDocument();

    await fireEvent.mouseOver(queryByTestId('CartItem-container'));
    expect(queryByTestId('CartItem-actionBtn')).toBeInTheDocument();
  });

  it('should hide ActionBtn when mouseLeave the container', async () => {
    const { queryByTestId } = render(<CartItem />);
    expect(queryByTestId('CartItem-actionBtn')).not.toBeInTheDocument();

    await fireEvent.mouseOver(queryByTestId('CartItem-container'));
    expect(queryByTestId('CartItem-actionBtn')).toBeInTheDocument();

    await fireEvent.mouseLeave(queryByTestId('CartItem-container'));
    expect(queryByTestId('CartItem-actionBtn')).not.toBeInTheDocument();
  });

  it('should use X to be ActionBtn label if searchResult prop is false', async () => {
    const { queryByTestId } = render(<CartItem />);

    await fireEvent.mouseOver(queryByTestId('CartItem-container'));

    expect(queryByTestId('CartItem-actionBtn')).toHaveTextContent('X');
  });

  it('should use Add to be ActionBtn label if searchResult prop is true', async () => {
    const { queryByTestId } = render(<CartItem searchResult />);

    await fireEvent.mouseOver(queryByTestId('CartItem-container'));

    expect(queryByTestId('CartItem-actionBtn')).toHaveTextContent('Add');
  });

  it('should call removeCardFromDeck and dispatch when ActionBtn is clicked and searchResult prop is false', async () => {
    const { queryByTestId } = render(<CartItem />);

    await fireEvent.mouseOver(queryByTestId('CartItem-container'));
    expect(removeCardFromDeck).not.toHaveBeenCalled();
    expect(mockDispatchFunc).not.toHaveBeenCalled();

    await fireEvent.click(queryByTestId('CartItem-actionBtn'));
    expect(removeCardFromDeck).toHaveBeenCalled();
    expect(mockDispatchFunc).toHaveBeenCalled();
  });

  it('should call addCardToDeck, removeSearchResults, and dispatch twices when ActionBtn is clicked and searchResult prop is true', async () => {
    const { queryByTestId } = render(<CartItem searchResult/>);

    await fireEvent.mouseOver(queryByTestId('CartItem-container'));
    expect(addCardToDeck).not.toHaveBeenCalled();
    expect(removeSearchResult).not.toHaveBeenCalled();
    expect(mockDispatchFunc).not.toHaveBeenCalled();

    await fireEvent.click(queryByTestId('CartItem-actionBtn'));
    expect(addCardToDeck).toHaveBeenCalled();
    expect(removeSearchResult).toHaveBeenCalled();
    expect(mockDispatchFunc).toHaveBeenCalledTimes(2);
  });
});
