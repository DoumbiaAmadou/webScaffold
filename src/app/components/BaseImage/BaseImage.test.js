import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BaseImage from './BaseImage';

describe('<BaseImage />', () => {
  test('it should mount', () => {
    render(<BaseImage />);
    
    const baseImage = screen.getByTestId('BaseImage');

    expect(baseImage).toBeInTheDocument();
  });
});