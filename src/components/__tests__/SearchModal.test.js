import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import SearchModal from '../SearchModal';
import { closeSearchModal } from '../../redux/actions';

import '@testing-library/jest-dom';

const mockDispatchFunc = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatchFunc,
}));
jest.mock('../SearchInput', () => () => <div data-testid="SearchInput-input" />);
jest.mock('../SearchResult', () => () => <div data-testid="SearchResult-container" />);
jest.mock('../../redux/actions', () => ({
  closeSearchModal: jest.fn(),
}));

afterEach(cleanup);

describe('<SearchModal />', () => {
  it('should call dispatch with the return value from closeSearchModal as args when background layer is clicked', () => {
    const actionValue = { type: 'string' };
    closeSearchModal.mockReturnValue(actionValue);

    const { queryByTestId } = render(<SearchModal />);

    fireEvent.click(queryByTestId('SearchModal-background'));
    expect(mockDispatchFunc).toHaveBeenCalledWith(actionValue);
  });

  it('should contain Background with black color, opacity 0.7 and z-index is 0', () => {
    const { queryByTestId } = render(<SearchModal />);

    expect(queryByTestId('SearchModal-background')).toHaveStyle(`
      background-color: black;
      opacity: 0.7;
      z-index: 0;
    `);
  })

  it('should contain Body with white color and z-index is 1', () => {
    const { queryByTestId } = render(<SearchModal />);

    expect(queryByTestId('SearchModal-body')).toHaveStyle(`
      background-color: white;
      z-index: 1;
    `);
  })

  it('should contain SearchInput and SearchResult inside Body', () => {
    const { queryByTestId } = render(<SearchModal />);

    expect(queryByTestId('SearchInput-input')).toBeInTheDocument();
    expect(queryByTestId('SearchResult-container')).toBeInTheDocument();
  })
});
