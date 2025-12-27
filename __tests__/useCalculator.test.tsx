/**
 * @format
 * Tests para el hook useCalculator
 */

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import { useCalculator } from '../src/hooks/useCalculator';

// Test component that uses the hook
const TestCalculator: React.FC = () => {
  const { input, result, history, handlePress, handleClear, handleBackspace, handleEquals } =
    useCalculator();

  return (
    <View>
      <Text testID="input">{input}</Text>
      <Text testID="result">{result}</Text>
      <Text testID="historyLength">{history.length}</Text>
      <TouchableOpacity testID="btn-1" onPress={() => handlePress('1')}>
        <Text>1</Text>
      </TouchableOpacity>
      <TouchableOpacity testID="btn-2" onPress={() => handlePress('2')}>
        <Text>2</Text>
      </TouchableOpacity>
      <TouchableOpacity testID="btn-3" onPress={() => handlePress('3')}>
        <Text>3</Text>
      </TouchableOpacity>
      <TouchableOpacity testID="btn-5" onPress={() => handlePress('5')}>
        <Text>5</Text>
      </TouchableOpacity>
      <TouchableOpacity testID="btn-plus" onPress={() => handlePress('+')}>
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity testID="btn-dot" onPress={() => handlePress('.')}>
        <Text>.</Text>
      </TouchableOpacity>
      <TouchableOpacity testID="btn-4" onPress={() => handlePress('4')}>
        <Text>4</Text>
      </TouchableOpacity>
      <TouchableOpacity testID="btn-open" onPress={() => handlePress('(')}>
        <Text>(</Text>
      </TouchableOpacity>
      <TouchableOpacity testID="btn-close" onPress={() => handlePress(')')}>
        <Text>)</Text>
      </TouchableOpacity>
      <TouchableOpacity testID="btn-0" onPress={() => handlePress('0')}>
        <Text>0</Text>
      </TouchableOpacity>
      <TouchableOpacity testID="btn-times" onPress={() => handlePress('*')}>
        <Text>*</Text>
      </TouchableOpacity>
      <TouchableOpacity testID="btn-clear" onPress={handleClear}>
        <Text>C</Text>
      </TouchableOpacity>
      <TouchableOpacity testID="btn-backspace" onPress={handleBackspace}>
        <Text>⌫</Text>
      </TouchableOpacity>
      <TouchableOpacity testID="btn-equals" onPress={handleEquals}>
        <Text>=</Text>
      </TouchableOpacity>
    </View>
  );
};

describe('useCalculator Hook', () => {
  describe('Estado inicial', () => {
    it('inicia con input vacío', () => {
      const { getByTestId } = render(<TestCalculator />);
      expect(getByTestId('input').props.children).toBe('');
    });

    it('inicia con resultado vacío', () => {
      const { getByTestId } = render(<TestCalculator />);
      expect(getByTestId('result').props.children).toBe('');
    });

    it('inicia con historial vacío', () => {
      const { getByTestId } = render(<TestCalculator />);
      expect(getByTestId('historyLength').props.children).toBe(0);
    });
  });

  describe('handlePress', () => {
    it('agrega número al input', () => {
      const { getByTestId } = render(<TestCalculator />);

      fireEvent.press(getByTestId('btn-5'));

      expect(getByTestId('input').props.children).toBe('5');
    });

    it('agrega múltiples números', () => {
      const { getByTestId } = render(<TestCalculator />);

      fireEvent.press(getByTestId('btn-1'));
      fireEvent.press(getByTestId('btn-2'));
      fireEvent.press(getByTestId('btn-3'));

      expect(getByTestId('input').props.children).toBe('123');
    });

    it('agrega operadores', () => {
      const { getByTestId } = render(<TestCalculator />);

      fireEvent.press(getByTestId('btn-5'));
      fireEvent.press(getByTestId('btn-plus'));
      fireEvent.press(getByTestId('btn-3'));

      expect(getByTestId('input').props.children).toBe('5+3');
    });

    it('agrega decimales', () => {
      const { getByTestId } = render(<TestCalculator />);

      fireEvent.press(getByTestId('btn-3'));
      fireEvent.press(getByTestId('btn-dot'));
      fireEvent.press(getByTestId('btn-1'));
      fireEvent.press(getByTestId('btn-4'));

      expect(getByTestId('input').props.children).toBe('3.14');
    });
  });

  describe('handleClear', () => {
    it('limpia el input', () => {
      const { getByTestId } = render(<TestCalculator />);

      fireEvent.press(getByTestId('btn-1'));
      fireEvent.press(getByTestId('btn-2'));
      fireEvent.press(getByTestId('btn-3'));
      fireEvent.press(getByTestId('btn-clear'));

      expect(getByTestId('input').props.children).toBe('');
    });

    it('limpia el resultado', () => {
      const { getByTestId } = render(<TestCalculator />);

      fireEvent.press(getByTestId('btn-5'));
      fireEvent.press(getByTestId('btn-plus'));
      fireEvent.press(getByTestId('btn-3'));
      fireEvent.press(getByTestId('btn-equals'));
      fireEvent.press(getByTestId('btn-clear'));

      expect(getByTestId('result').props.children).toBe('');
    });
  });

  describe('handleBackspace', () => {
    it('borra el último carácter', () => {
      const { getByTestId } = render(<TestCalculator />);

      fireEvent.press(getByTestId('btn-1'));
      fireEvent.press(getByTestId('btn-2'));
      fireEvent.press(getByTestId('btn-3'));
      fireEvent.press(getByTestId('btn-backspace'));

      expect(getByTestId('input').props.children).toBe('12');
    });

    it('no hace nada si el input está vacío', () => {
      const { getByTestId } = render(<TestCalculator />);

      fireEvent.press(getByTestId('btn-backspace'));

      expect(getByTestId('input').props.children).toBe('');
    });
  });

  describe('handleEquals', () => {
    it('calcula suma correctamente', () => {
      const { getByTestId } = render(<TestCalculator />);

      fireEvent.press(getByTestId('btn-5'));
      fireEvent.press(getByTestId('btn-plus'));
      fireEvent.press(getByTestId('btn-3'));
      fireEvent.press(getByTestId('btn-equals'));

      expect(getByTestId('result').props.children).toBe('8');
    });

    it('calcula expresión compleja', () => {
      const { getByTestId } = render(<TestCalculator />);

      fireEvent.press(getByTestId('btn-open'));
      fireEvent.press(getByTestId('btn-1'));
      fireEvent.press(getByTestId('btn-0'));
      fireEvent.press(getByTestId('btn-plus'));
      fireEvent.press(getByTestId('btn-5'));
      fireEvent.press(getByTestId('btn-close'));
      fireEvent.press(getByTestId('btn-times'));
      fireEvent.press(getByTestId('btn-2'));
      fireEvent.press(getByTestId('btn-equals'));

      expect(getByTestId('result').props.children).toBe('30');
    });

    it('agrega al historial', () => {
      const { getByTestId } = render(<TestCalculator />);

      fireEvent.press(getByTestId('btn-5'));
      fireEvent.press(getByTestId('btn-plus'));
      fireEvent.press(getByTestId('btn-3'));
      fireEvent.press(getByTestId('btn-equals'));

      expect(getByTestId('historyLength').props.children).toBe(1);
    });
  });
});
