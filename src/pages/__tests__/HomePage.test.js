import React from 'react';
import { render } from '@testing-library/react';

import HomePage from '../HomePage';
import { selectShowSearchModal } from '../../redux/selectors';

import '@testing-library/jest-dom';

jest.mock('../../components/Footer', () => () => <div data-testid="Footer-container"/>);
jest.mock('../../components/SearchModal', () => () => <div data-testid="SearchModal-container"/>);

jest.mock('react-redux', () => ({
  useSelector: (selector) => selector(),
}));
jest.mock('../../redux/selectors', () => ({
  selectShowSearchModal: jest.fn(),
}))

describe('<HomePage />', () => {
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
