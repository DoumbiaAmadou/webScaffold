import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BaseContainer from './BaseContainer';

describe('<BaseContainer />', () => {
  test('it should mount', () => {
    render(<BaseContainer />);
    
    const baseContainer = screen.getByTestId('BaseContainer');

    expect(baseContainer).toBeInTheDocument();
  });
});