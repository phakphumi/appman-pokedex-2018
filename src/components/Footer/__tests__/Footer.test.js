import React from 'react';
import { render } from '@testing-library/react';

import Footer from '../Footer';

import '@testing-library/jest-dom';

describe('<Footer />', () => {
  it('should contains AddButton component', () => {
    const { container, queryByTestId } = render(<Footer />);

    expect(queryByTestId('footer-addButton')).toBeInTheDocument();
  })
  it('should use #eb4d4b as background-color both footer and addButton', () => {
    const { container, queryByTestId } = render(<Footer />);

    expect(queryByTestId('footer-container')).toHaveStyle('background-color: #eb4d4b');
    expect(queryByTestId('footer-addButton')).toHaveStyle('background-color: #eb4d4b');
  })
});
