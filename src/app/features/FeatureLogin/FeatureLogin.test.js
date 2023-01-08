import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatureLogin from './FeatureLogin';

describe('<FeatureLogin />', () => {
  test('it should mount', () => {
    render(<FeatureLogin />);
    
    const featureLogin = screen.getByTestId('FeatureLogin');

    expect(featureLogin).toBeInTheDocument();
  });
});