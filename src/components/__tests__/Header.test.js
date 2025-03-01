import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Header from '../Header';

import '@testing-library/jest-dom';

afterEach(cleanup);

describe('<Header />', () => {
  it('should contain text content "My Pokedex"', () => {
    const { container, queryByTestId } = render(<Header />);

    expect(queryByTestId('Header-container')).toHaveTextContent('My Pokedex');

    expect(container).toMatchSnapshot()
  })  
});
