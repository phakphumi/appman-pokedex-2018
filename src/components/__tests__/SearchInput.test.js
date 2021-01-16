import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';

import SearchInput from '../SearchInput';
import { searchCard } from '../../apis/card';
import { setSearchResults } from '../../redux/actions';

import '@testing-library/jest-dom';

const mockDispatchFunc = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatchFunc,
}));
jest.mock('../../apis/card', () => ({
  searchCard: jest.fn(),
}))
jest.mock('../../redux/actions', () => ({
  setSearchResults: jest.fn(),
}));
jest.mock('../../utils/useDebounce', () => ({
  useDebounce: value => value,
}));


describe('<SearchInput />', () => {
  it('should contain text input', () => {
    const { queryByTestId } = render(<SearchInput />);
    
    expect(queryByTestId('SearchInput-input')).toBeInTheDocument();
  });

  it('should call searchCard when text input was changed', () => {
    const searchTerm = 'search term';

    const { queryByTestId } = render(<SearchInput />);

    fireEvent.change(queryByTestId('SearchInput-input'), { target: { value: searchTerm}});
    expect(searchCard).toHaveBeenCalledWith(searchTerm);
  })

  it('should call dispatch with the return value from setSearchResults as args when text input was changed', async () => {
    const actionValue = { type: 'string', payload: { cards: []} };
    setSearchResults.mockReturnValue(actionValue);
  
    await act(async () => {
      render(<SearchInput />)
    });

    expect(mockDispatchFunc).toHaveBeenCalledWith(actionValue);
  })
});
