import React from 'react';
import { render } from '@testing-library/react';

import SearchResult from '../SearchResult';
import { selectSearchResults } from '../../redux/selectors';

import '@testing-library/jest-dom';

jest.mock('react-redux', () => ({
  useSelector: (selector) => selector(),
}));

jest.mock('../SearchItem', () => () => <div data-testid="SearchItem-container" />);
jest.mock('../../redux/selectors', () => ({
  selectSearchResults: jest.fn(),
}))

describe('<SearchResult />', () => {
  it('should render SearchItem with excat same number with searchResult length', () => {
    const cards = [
      { id: 'a1' },
      { id: 'a2' },
      { id: 'a3' },
    ];
    selectSearchResults.mockReturnValue(cards);

    const { queryAllByTestId } = render(<SearchResult />);

    expect(queryAllByTestId('SearchItem-container')).toHaveLength(cards.length);
  })
});
