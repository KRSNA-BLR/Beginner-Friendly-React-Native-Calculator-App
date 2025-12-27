/**
 * Button configuration for the Calculator
 * @author Danilo Viteri - KB Asesorías
 * 
 * PORTRAIT: Basic calculator (5 rows x 4 columns)
 * LANDSCAPE: Scientific calculator (6 rows x 6 columns)
 */

import { ButtonConfig } from '../types';

/**
 * Extended ButtonConfig with optional wide property for double-width buttons
 */
export interface ExtendedButtonConfig extends ButtonConfig {
  wide?: boolean; // If true, button takes 2 column spaces
}

// ============================================
// PORTRAIT MODE - Basic Calculator (4 columns)
// ============================================

/**
 * Portrait Row 1: Clear, Backspace, Percent, Divide
 */
export const portraitRow1: ExtendedButtonConfig[] = [
  { label: 'C', value: 'clear', type: 'action', testID: 'btn-clear' },
  { label: '⌫', value: 'backspace', type: 'action', testID: 'btn-backspace' },
  { label: '%', value: '%', type: 'operator', testID: 'btn-percent' },
  { label: '÷', value: '/', type: 'operator', testID: 'btn-divide' },
];

/**
 * Portrait Row 2: 7, 8, 9, Multiply
 */
export const portraitRow2: ExtendedButtonConfig[] = [
  { label: '7', value: '7', type: 'number', testID: 'btn-7' },
  { label: '8', value: '8', type: 'number', testID: 'btn-8' },
  { label: '9', value: '9', type: 'number', testID: 'btn-9' },
  { label: '×', value: '*', type: 'operator', testID: 'btn-multiply' },
];

/**
 * Portrait Row 3: 4, 5, 6, Subtract
 */
export const portraitRow3: ExtendedButtonConfig[] = [
  { label: '4', value: '4', type: 'number', testID: 'btn-4' },
  { label: '5', value: '5', type: 'number', testID: 'btn-5' },
  { label: '6', value: '6', type: 'number', testID: 'btn-6' },
  { label: '-', value: '-', type: 'operator', testID: 'btn-subtract' },
];

/**
 * Portrait Row 4: 1, 2, 3, Add
 */
export const portraitRow4: ExtendedButtonConfig[] = [
  { label: '1', value: '1', type: 'number', testID: 'btn-1' },
  { label: '2', value: '2', type: 'number', testID: 'btn-2' },
  { label: '3', value: '3', type: 'number', testID: 'btn-3' },
  { label: '+', value: '+', type: 'operator', testID: 'btn-add' },
];

/**
 * Portrait Row 5: 0 (wide), Decimal, Equals
 */
export const portraitRow5: ExtendedButtonConfig[] = [
  { label: '0', value: '0', type: 'number', testID: 'btn-0', wide: true },
  { label: '.', value: '.', type: 'number', testID: 'btn-decimal' },
  { label: '=', value: 'equals', type: 'equals', testID: 'btn-equals' },
];

/**
 * All portrait rows - Basic calculator layout
 */
export const PORTRAIT_ROWS: ExtendedButtonConfig[][] = [
  portraitRow1,
  portraitRow2,
  portraitRow3,
  portraitRow4,
  portraitRow5,
];

// ============================================
// LANDSCAPE MODE - Scientific Calculator (6 columns)
// ============================================

/**
 * Landscape Row 1: Scientific functions
 */
export const landscapeRow1: ExtendedButtonConfig[] = [
  { label: 'sin', value: 'sin(', type: 'function', testID: 'btn-sin' },
  { label: 'cos', value: 'cos(', type: 'function', testID: 'btn-cos' },
  { label: 'tan', value: 'tan(', type: 'function', testID: 'btn-tan' },
  { label: '√', value: '√(', type: 'function', testID: 'btn-sqrt' },
  { label: 'ln', value: 'log(', type: 'function', testID: 'btn-ln' },
  { label: 'log', value: 'log10(', type: 'function', testID: 'btn-log' },
];

/**
 * Landscape Row 2: More scientific functions + parentheses
 */
export const landscapeRow2: ExtendedButtonConfig[] = [
  { label: 'n!', value: 'factorial(', type: 'function', testID: 'btn-factorial' },
  { label: '|x|', value: 'abs(', type: 'function', testID: 'btn-abs' },
  { label: '^', value: '^', type: 'function', testID: 'btn-power' },
  { label: '(', value: '(', type: 'function', testID: 'btn-paren-open' },
  { label: ')', value: ')', type: 'function', testID: 'btn-paren-close' },
  { label: 'π', value: 'π', type: 'function', testID: 'btn-pi' },
];

/**
 * Landscape Row 3: Actions + first numbers
 */
export const landscapeRow3: ExtendedButtonConfig[] = [
  { label: 'C', value: 'clear', type: 'action', testID: 'btn-clear' },
  { label: '⌫', value: 'backspace', type: 'action', testID: 'btn-backspace' },
  { label: '%', value: '%', type: 'operator', testID: 'btn-percent' },
  { label: '7', value: '7', type: 'number', testID: 'btn-7' },
  { label: '8', value: '8', type: 'number', testID: 'btn-8' },
  { label: '9', value: '9', type: 'number', testID: 'btn-9' },
];

/**
 * Landscape Row 4: Operators + middle numbers
 */
export const landscapeRow4: ExtendedButtonConfig[] = [
  { label: '÷', value: '/', type: 'operator', testID: 'btn-divide' },
  { label: '×', value: '*', type: 'operator', testID: 'btn-multiply' },
  { label: '-', value: '-', type: 'operator', testID: 'btn-subtract' },
  { label: '4', value: '4', type: 'number', testID: 'btn-4' },
  { label: '5', value: '5', type: 'number', testID: 'btn-5' },
  { label: '6', value: '6', type: 'number', testID: 'btn-6' },
];

/**
 * Landscape Row 5: More operators + bottom numbers
 */
export const landscapeRow5: ExtendedButtonConfig[] = [
  { label: '+', value: '+', type: 'operator', testID: 'btn-add' },
  { label: 'e', value: 'e', type: 'function', testID: 'btn-e' },
  { label: 'mod', value: ' mod ', type: 'operator', testID: 'btn-mod' },
  { label: '1', value: '1', type: 'number', testID: 'btn-1' },
  { label: '2', value: '2', type: 'number', testID: 'btn-2' },
  { label: '3', value: '3', type: 'number', testID: 'btn-3' },
];

/**
 * Landscape Row 6: Final row with 0 and equals
 */
export const landscapeRow6: ExtendedButtonConfig[] = [
  { label: '0', value: '0', type: 'number', testID: 'btn-0', wide: true },
  { label: '.', value: '.', type: 'number', testID: 'btn-decimal' },
  { label: '=', value: 'equals', type: 'equals', testID: 'btn-equals', wide: true },
];

/**
 * All landscape rows - Scientific calculator layout
 */
export const LANDSCAPE_ROWS: ExtendedButtonConfig[][] = [
  landscapeRow1,
  landscapeRow2,
  landscapeRow3,
  landscapeRow4,
  landscapeRow5,
  landscapeRow6,
];

// ============================================
// LEGACY - Keep for backward compatibility with tests
// ============================================

/**
 * Scientific functions row (legacy)
 */
export const scientificRow1: ButtonConfig[] = [
  { label: 'sin', value: 'sin(', type: 'function', testID: 'btn-sin' },
  { label: 'cos', value: 'cos(', type: 'function', testID: 'btn-cos' },
  { label: 'tan', value: 'tan(', type: 'function', testID: 'btn-tan' },
  { label: '√', value: '√(', type: 'function', testID: 'btn-sqrt' },
];

export const scientificRow2: ButtonConfig[] = [
  { label: 'ln', value: 'log(', type: 'function', testID: 'btn-ln' },
  { label: 'log', value: 'log10(', type: 'function', testID: 'btn-log' },
  { label: 'n!', value: 'factorial(', type: 'function', testID: 'btn-factorial' },
  { label: '|x|', value: 'abs(', type: 'function', testID: 'btn-abs' },
];

export const numberRow1: ButtonConfig[] = [
  { label: '1', value: '1', type: 'number', testID: 'btn-1' },
  { label: '2', value: '2', type: 'number', testID: 'btn-2' },
  { label: '3', value: '3', type: 'number', testID: 'btn-3' },
  { label: '+', value: '+', type: 'operator', testID: 'btn-add' },
];

export const numberRow2: ButtonConfig[] = [
  { label: '4', value: '4', type: 'number', testID: 'btn-4' },
  { label: '5', value: '5', type: 'number', testID: 'btn-5' },
  { label: '6', value: '6', type: 'number', testID: 'btn-6' },
  { label: '-', value: '-', type: 'operator', testID: 'btn-subtract' },
];

export const numberRow3: ButtonConfig[] = [
  { label: '7', value: '7', type: 'number', testID: 'btn-7' },
  { label: '8', value: '8', type: 'number', testID: 'btn-8' },
  { label: '9', value: '9', type: 'number', testID: 'btn-9' },
  { label: '×', value: '*', type: 'operator', testID: 'btn-multiply' },
];

export const actionRow: ButtonConfig[] = [
  { label: 'C', value: 'clear', type: 'action', testID: 'btn-clear' },
  { label: '0', value: '0', type: 'number', testID: 'btn-0' },
  { label: '.', value: '.', type: 'number', testID: 'btn-decimal' },
  { label: '=', value: 'equals', type: 'equals', testID: 'btn-equals' },
  { label: '÷', value: '/', type: 'operator', testID: 'btn-divide' },
];

export const extraRow: ButtonConfig[] = [
  { label: '⌫', value: 'backspace', type: 'action', testID: 'btn-backspace' },
  { label: '^', value: '^', type: 'function', testID: 'btn-power' },
  { label: '(', value: '(', type: 'function', testID: 'btn-paren-open' },
  { label: ')', value: ')', type: 'function', testID: 'btn-paren-close' },
];

export const constantsRow: ButtonConfig[] = [
  { label: 'π', value: 'π', type: 'function', testID: 'btn-pi' },
  { label: 'e', value: 'e', type: 'function', testID: 'btn-e' },
  { label: '%', value: '%', type: 'operator', testID: 'btn-percent' },
  { label: 'mod', value: ' mod ', type: 'operator', testID: 'btn-mod' },
];

/**
 * All button rows in order (legacy - for backward compatibility)
 */
export const BUTTON_ROWS: ButtonConfig[][] = [
  scientificRow1,
  scientificRow2,
  extraRow,
  constantsRow,
  numberRow1,
  numberRow2,
  numberRow3,
  actionRow,
];

/**
 * Get button row by index
 */
export const getButtonRow = (index: number): ButtonConfig[] => {
  return BUTTON_ROWS[index] || [];
};
