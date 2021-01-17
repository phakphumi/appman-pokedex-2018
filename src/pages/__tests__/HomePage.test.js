import React from 'react';
import { cleanup, render } from '@testing-library/react';

import HomePage from '../HomePage';
import { selectShowSearchModal } from '../../redux/selectors';

import '@testing-library/jest-dom';

jest.mock('../../components/Deck', () => () => <div data-testid="Deck-container"/>);
jest.mock('../../components/Header', () => () => <div data-testid="Header-container"/>);
jest.mock('../../components/Footer', () => () => <div data-testid="Footer-container"/>);
jest.mock('../../components/SearchModal', () => () => <div data-testid="SearchModal-container"/>);

jest.mock('react-redux', () => ({
  useSelector: (selector) => selector(),
}));
jest.mock('../../redux/selectors', () => ({
  selectShowSearchModal: jest.fn(),
}))

afterEach(cleanup);

describe('<HomePage />', () => {
  it('should contain Deck Section', () => {
    const { container, queryByTestId} = render(<HomePage />);

    expect(queryByTestId('Deck-container')).toBeInTheDocument();
  });

  it('should contain Header Section', () => {
    const { container, queryByTestId} = render(<HomePage />);

    expect(queryByTestId('Header-container')).toBeInTheDocument();
  });

  it('should contain Footer Section', () => {
    const { container, queryByTestId} = render(<HomePage />);

    expect(queryByTestId('Footer-container')).toBeInTheDocument();
  });

  it('should contain SearchModal if current state of showSearchModal is true', () => {
    selectShowSearchModal.mockReturnValue(true);

    const { container, queryByTestId} = render(<HomePage />);

    expect(queryByTestId('SearchModal-container')).toBeInTheDocument();
  });

  it('should not contain SearchModal if current state of showSearchModal is false', () => {
    selectShowSearchModal.mockReturnValue(false);

    const { container, queryByTestId} = render(<HomePage />);

    expect(queryByTestId('SearchModal-container')).not.toBeInTheDocument();
  });
});
