import React from 'react';
import { cleanup, render } from '@testing-library/react';

import CardItemDescription from '../CardItemDescription';

import {
  convertStatusToWidth,
} from '../../utils/statusCalculator';


import '@testing-library/jest-dom';

jest.mock('../../utils/statusCalculator', () => ({
  calculateHp: jest.fn(),
  calculateStr: jest.fn(),
  calculateWeak: jest.fn(),
  calculateDamage: jest.fn(),
  convertStatusToWidth: jest.fn(),
}))

afterEach(cleanup);

describe(('<CartItemDescription />'), () => {
  describe('HP StatusBar and Value', () => {
    it('should have width equals to 150px on HP StatusBar if searchResult prop is false', () => {
      const { queryByTestId } = render(<CardItemDescription />);
  
      expect(queryByTestId('CartItemDescription-statusBar-hp')).toHaveStyle(`
        width: ${150}px;
      `);
    });
  
    it('should have width equals to 400px on HP StatusBar if searchResult prop is true', () => {
      const { queryByTestId } = render(<CardItemDescription searchResult />);
  
      expect(queryByTestId('CartItemDescription-statusBar-hp')).toHaveStyle(`
        width: ${400}px;
      `);
    });
  
    it('should have width equal to the return value from convertStatusToWidth on HP StatusValue', () => {
      const hpWidth = 50;
      convertStatusToWidth.mockReturnValue(hpWidth);
  
      const { queryByTestId } = render(<CardItemDescription />);
  
      expect(queryByTestId('CartItemDescription-statusValue-hp')).toHaveStyle(`
        width: ${hpWidth}px;
      `);
    });
  });

  describe('Str StatusBar and Value', () => {
    it('should have width equals to 150px Str HP StatusBar if searchResult prop is false', () => {
      const { queryByTestId } = render(<CardItemDescription />);
  
      expect(queryByTestId('CartItemDescription-statusBar-str')).toHaveStyle(`
        width: ${150}px;
      `);
    });
  
    it('should have width equals to 400px on Str StatusBar if searchResult prop is true', () => {
      const { queryByTestId } = render(<CardItemDescription searchResult />);
  
      expect(queryByTestId('CartItemDescription-statusBar-str')).toHaveStyle(`
        width: ${400}px;
      `);
    });
  
    it('should have width equal to the return value from convertStatusToWidth on HP StatusValue', () => {
      const strWidth = 60;
      convertStatusToWidth.mockReturnValue(strWidth);
  
      const { queryByTestId } = render(<CardItemDescription />);
  
      expect(queryByTestId('CartItemDescription-statusValue-str')).toHaveStyle(`
        width: ${strWidth}px;
      `);
    });
  });

  describe('Weak StatusBar and Value', () => {
    it('should have width equals to 150px Weak HP StatusBar if searchResult prop is false', () => {
      const { queryByTestId } = render(<CardItemDescription />);
  
      expect(queryByTestId('CartItemDescription-statusBar-weak')).toHaveStyle(`
        width: ${150}px;
      `);
    });
  
    it('should have width equals to 400px on Weak StatusBar if searchResult prop is true', () => {
      const { queryByTestId } = render(<CardItemDescription searchResult />);
  
      expect(queryByTestId('CartItemDescription-statusBar-weak')).toHaveStyle(`
        width: ${400}px;
      `);
    });
  
    it('should have width equal to the return value from convertStatusToWidth on HP StatusValue', () => {
      const weakWidth = 70;
      convertStatusToWidth.mockReturnValue(weakWidth);
  
      const { queryByTestId } = render(<CardItemDescription />);
  
      expect(queryByTestId('CartItemDescription-statusValue-weak')).toHaveStyle(`
        width: ${weakWidth}px;
      `);
    });
  });
});
