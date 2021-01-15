import React from 'react';
import { render } from '@testing-library/react';

import HomePage from '../HomePage';

import '@testing-library/jest-dom';

jest.mock('../../../components/Footer', () => () => <div data-testid="Footer-container"/>)

describe('<HomePage />', () => {
  it('should contain Footer Section', () => {
    const { container, queryByTestId} = render(<HomePage />);

    expect(queryByTestId('Footer-container')).toBeInTheDocument();
  });
});
