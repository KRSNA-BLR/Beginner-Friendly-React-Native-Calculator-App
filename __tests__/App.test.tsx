/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../src/App';

// Note: import explicitly to use the types shipped with jest.
import { it, describe, expect } from '@jest/globals';

describe('App', () => {
  it('renders correctly', () => {
    const { getByText } = render(<App />);
    // The calculator should have a C button
    expect(getByText('C')).toBeTruthy();
  });

  it('renders theme toggle button', () => {
    const { getByText } = render(<App />);
    // Should have either sun or moon emoji for theme toggle
    const toggleButton = getByText(/☀️|🌙/);
    expect(toggleButton).toBeTruthy();
  });

  it('renders clear button', () => {
    const { getByText } = render(<App />);
    expect(getByText('C')).toBeTruthy();
  });

  it('renders equals button', () => {
    const { getByText } = render(<App />);
    expect(getByText('=')).toBeTruthy();
  });
});
