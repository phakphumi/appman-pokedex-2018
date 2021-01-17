import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import { openSearchModal } from '../../redux/actions';
import { COLORS } from '../../styles/colors';
import Footer from '../Footer';

import '@testing-library/jest-dom';

const mockDispatchFunc = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatchFunc,
}));
jest.mock('../../redux/actions', () => ({
  openSearchModal: jest.fn(),
}));

afterEach(cleanup);

describe('<Footer />', () => {
  it('should contains AddButton component', () => {
    const { queryByTestId } = render(<Footer />);

    expect(queryByTestId('footer-addButton')).toBeInTheDocument();
  })
  it('should use Fire as background-color both footer and addButton', () => {
    const { queryByTestId } = render(<Footer />);

    expect(queryByTestId('footer-container')).toHaveStyle(`background-color: ${COLORS.Fire};`);
    expect(queryByTestId('footer-addButton')).toHaveStyle(`background-color: ${COLORS.Fire};`);
  })

  it('should call dispatch with the return value from openSearchModal as args when AddButton is clicked', () => {
    const actionValue = { type: 'string' };
    openSearchModal.mockReturnValue(actionValue);

    const { queryByTestId } = render(<Footer />);

    fireEvent.click(queryByTestId('footer-addButton'))
    expect(mockDispatchFunc).toHaveBeenCalledWith(actionValue);
  })
});
