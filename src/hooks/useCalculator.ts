/**
 * Custom hook for calculator logic
 * @author Danilo Viteri - KB Asesorías
 */

import { useState, useCallback } from 'react';
import { evaluateExpression, canAddCharacter, removeLastCharacter } from '../utils/calculator';
import { HistoryEntry } from '../types';

interface UseCalculatorReturn {
  input: string;
  result: string;
  history: HistoryEntry[];
  handlePress: (value: string) => void;
  handleClear: () => void;
  handleBackspace: () => void;
  handleEquals: () => void;
  clearHistory: () => void;
}

/**
 * Custom hook that manages calculator state and operations
 * @returns Calculator state and handler functions
 */
export const useCalculator = (): UseCalculatorReturn => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  /**
   * Handles button press for numbers and operators
   */
  const handlePress = useCallback((value: string) => {
    // Handle special actions
    if (value === 'clear') {
      setInput('');
      setResult('');
      return;
    }

    if (value === 'backspace') {
      setInput(prev => removeLastCharacter(prev));
      return;
    }

    if (value === 'equals') {
      if (input.trim() !== '') {
        const calculatedResult = evaluateExpression(input);
        setResult(calculatedResult);

        // Add to history if valid result
        if (calculatedResult !== 'Error' && calculatedResult !== '') {
          const entry: HistoryEntry = {
            expression: input,
            result: calculatedResult,
            timestamp: new Date(),
          };
          setHistory(prev => [entry, ...prev].slice(0, 10)); // Keep last 10
        }
      }
      return;
    }

    // Validate character before adding
    if (canAddCharacter(input, value)) {
      setInput(prev => prev + value);
    }
  }, [input]);

  /**
   * Clears the current input and result
   */
  const handleClear = useCallback(() => {
    setInput('');
    setResult('');
  }, []);

  /**
   * Removes the last character from input
   */
  const handleBackspace = useCallback(() => {
    setInput(prev => removeLastCharacter(prev));
  }, []);

  /**
   * Calculates and displays the result
   */
  const handleEquals = useCallback(() => {
    if (input.trim() !== '') {
      const calculatedResult = evaluateExpression(input);
      setResult(calculatedResult);

      if (calculatedResult !== 'Error' && calculatedResult !== '') {
        const entry: HistoryEntry = {
          expression: input,
          result: calculatedResult,
          timestamp: new Date(),
        };
        setHistory(prev => [entry, ...prev].slice(0, 10));
      }
    }
  }, [input]);

  /**
   * Clears the calculation history
   */
  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return {
    input,
    result,
    history,
    handlePress,
    handleClear,
    handleBackspace,
    handleEquals,
    clearHistory,
  };
};

export default useCalculator;
