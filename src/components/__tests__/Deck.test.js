import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Deck from '../Deck';
import { selectDeck } from '../../redux/selectors';

import '@testing-library/jest-dom';

jest.mock('react-redux', () => ({
  useSelector: (selector) => selector(),
}));

jest.mock('../CardItem', () => () => <div data-testid="CardItem-container" />);
jest.mock('../../redux/selectors', () => ({
  selectDeck: jest.fn(),
}))

afterEach(cleanup);

describe('<Deck />', () => {
  it('should render CardItem with excat same number with deck length', () => {
    const cards = [
      { id: 'a1' },
      { id: 'a2' },
      { id: 'a3' },
    ];
    selectDeck.mockReturnValue(cards);

    const { queryAllByTestId } = render(<Deck />);

    expect(queryAllByTestId('CardItem-container')).toHaveLength(cards.length);
  })
});
