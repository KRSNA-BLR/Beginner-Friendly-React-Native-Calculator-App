/**
 * Calculator utility functions using mathjs
 * @author Danilo Viteri - KB Asesorías
 */

import { evaluate, pi, e } from 'mathjs';

/**
 * Sanitizes the input expression for mathjs evaluation
 * @param input - The raw input string from the calculator
 * @returns Sanitized expression ready for evaluation
 */
export const sanitizeExpression = (input: string): string => {
  return input
    .replace(/√\(/g, 'sqrt(') // Convert √ symbol to sqrt function
    .replace(/π/g, String(pi)) // Replace π with its value
    .replace(/×/g, '*') // Replace × with *
    .replace(/÷/g, '/') // Replace ÷ with /
    .replace(/²/g, '^2') // Replace ² with ^2
    .replace(/³/g, '^3') // Replace ³ with ^3
    .replace(/ln\(/g, 'log(') // mathjs uses log() for natural log
    .replace(/e(?![a-zA-Z])/g, String(e)); // Replace e (only when not part of another word)
};

/**
 * Evaluates a mathematical expression safely using mathjs
 * @param expression - The expression to evaluate
 * @returns The result as a string, or 'Error' if evaluation fails
 */
export const evaluateExpression = (expression: string): string => {
  try {
    if (!expression || expression.trim() === '') {
      return 'Error';
    }

    const sanitized = sanitizeExpression(expression);
    const result = evaluate(sanitized);

    if (result === undefined || result === null) {
      return 'Error';
    }

    // Handle Infinity
    if (typeof result === 'number' && !isFinite(result)) {
      return result > 0 ? 'Infinity' : '-Infinity';
    }

    // Format result: limit decimals if too long
    if (typeof result === 'number') {
      if (Number.isInteger(result)) {
        return String(result);
      }
      // Round to avoid floating point issues, then remove trailing zeros
      const rounded = Math.round(result * 1e10) / 1e10;
      return rounded.toString();
    }

    return String(result);
  } catch (error) {
    return 'Error';
  }
};

/**
 * Validates if a character can be added to the current input
 * @param currentInput - The current input string
 * @param newChar - The character to add
 * @returns Whether the character can be added
 */
export const canAddCharacter = (currentInput: string, newChar: string): boolean => {
  // Prevent multiple consecutive decimals
  if (newChar === '.' && currentInput.endsWith('.')) {
    return false;
  }

  // Prevent multiple consecutive operators
  const operators = ['+', '-', '*', '/', '^'];
  const lastChar = currentInput.slice(-1);
  if (operators.includes(newChar) && operators.includes(lastChar)) {
    return false;
  }

  return true;
};

/**
 * Removes the last character from input (backspace functionality)
 * @param input - The current input string
 * @returns Input with last character removed
 */
export const removeLastCharacter = (input: string): string => {
  if (!input || input.length === 0) {
    return '';
  }

  // Check if last part is a function like 'sin(' or 'cos('
  const functions = ['sin(', 'cos(', 'tan(', 'log10(', 'sqrt(', '√('];
  for (const func of functions) {
    if (input.endsWith(func)) {
      return input.slice(0, -func.length);
    }
  }

  return input.slice(0, -1);
};

/**
 * Mathematical constants
 */
export const MATH_CONSTANTS = {
  PI: pi,
  E: e,
};

/**
 * Preprocesses an expression for mathjs evaluation
 * Converts calculator symbols to mathjs-compatible syntax
 * @param expression - The raw expression
 * @returns Preprocessed expression
 */
export const preprocessExpression = (expression: string): string => {
  return expression
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/√\(/g, 'sqrt(')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/π/g, 'pi')
    .replace(/ln\(/g, 'log('); // mathjs uses log() for natural log
};

/**
 * Validates if an expression contains only allowed characters
 * @param expression - The expression to validate
 * @returns Whether the expression is valid
 */
export const isValidExpression = (expression: string): boolean => {
  if (!expression || expression.trim() === '') {
    return false;
  }

  // Allow digits, operators, parentheses, decimal point, and function names
  const validPattern = /^[0-9+\-*/().^%!a-zA-Z√πe²³, ]+$/;
  return validPattern.test(expression);
};

/**
 * Formats a number with thousands separators
 * @param num - The number to format
 * @returns Formatted string
 */
export const formatNumber = (num: number): string => {
  if (!isFinite(num)) {
    return String(num);
  }

  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};
