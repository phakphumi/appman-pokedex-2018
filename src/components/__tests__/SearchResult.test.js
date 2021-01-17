import React from 'react';
import { cleanup, render } from '@testing-library/react';

import SearchResult from '../SearchResult';
import { selectSearchResults } from '../../redux/selectors';

import '@testing-library/jest-dom';

afterEach(cleanup);

jest.mock('react-redux', () => ({
  useSelector: (selector) => selector(),
}));

jest.mock('../CardItem', () => () => <div data-testid="CardItem-container" />);
jest.mock('../../redux/selectors', () => ({
  selectSearchResults: jest.fn(),
}))

describe('<SearchResult />', () => {
  it('should render CardItem with excat same number with searchResult length', () => {
    const cards = [
      { id: 'a1' },
      { id: 'a2' },
      { id: 'a3' },
    ];
    selectSearchResults.mockReturnValue(cards);

    const { queryAllByTestId } = render(<SearchResult />);

    expect(queryAllByTestId('CardItem-container')).toHaveLength(cards.length);
  })
});
