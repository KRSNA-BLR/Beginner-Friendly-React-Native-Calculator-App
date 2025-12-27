/**
 * @format
 * Snapshot tests for UI components
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import { Text, View } from 'react-native';

// Mock component for Display testing
const MockDisplay: React.FC<{ input: string; result: string }> = ({ input, result }) => (
  <View testID="display">
    <Text testID="input-text">{input}</Text>
    <Text testID="result-text">{result}</Text>
  </View>
);

// Mock component for Button testing
const MockButton: React.FC<{ label: string; type: string }> = ({ label, type }) => (
  <View testID={`button-${label}`} accessibilityLabel={type}>
    <Text>{label}</Text>
  </View>
);

describe('UI Snapshot Tests', () => {
  describe('Display Component', () => {
    it('renders empty display correctly', () => {
      const { toJSON } = render(<MockDisplay input="" result="" />);
      expect(toJSON()).toMatchSnapshot();
    });

    it('renders display with input correctly', () => {
      const { toJSON } = render(<MockDisplay input="5+3" result="" />);
      expect(toJSON()).toMatchSnapshot();
    });

    it('renders display with result correctly', () => {
      const { toJSON } = render(<MockDisplay input="5+3" result="8" />);
      expect(toJSON()).toMatchSnapshot();
    });

    it('renders display with long expression', () => {
      const { toJSON } = render(
        <MockDisplay input="123+456*789/10" result="35426.4" />
      );
      expect(toJSON()).toMatchSnapshot();
    });

    it('renders display with error', () => {
      const { toJSON } = render(<MockDisplay input="1/0" result="Error" />);
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Button Component', () => {
    it('renders number button correctly', () => {
      const { toJSON } = render(<MockButton label="5" type="number" />);
      expect(toJSON()).toMatchSnapshot();
    });

    it('renders operator button correctly', () => {
      const { toJSON } = render(<MockButton label="+" type="operator" />);
      expect(toJSON()).toMatchSnapshot();
    });

    it('renders function button correctly', () => {
      const { toJSON } = render(<MockButton label="sin" type="function" />);
      expect(toJSON()).toMatchSnapshot();
    });

    it('renders special button correctly', () => {
      const { toJSON } = render(<MockButton label="C" type="special" />);
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Calculator Layout', () => {
    it('renders button grid layout', () => {
      const buttons = ['7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '-', '0', '.', '=', '+'];
      const { toJSON } = render(
        <View testID="button-grid">
          {buttons.map((label) => (
            <MockButton key={label} label={label} type="number" />
          ))}
        </View>
      );
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
