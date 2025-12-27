/**
 * Type definitions for the React Native Calculator App
 * @author Danilo Viteri - KB Asesorías
 */

import { ScaledSize } from 'react-native';

/**
 * Button types for styling differentiation
 */
export type ButtonType = 'number' | 'operator' | 'function' | 'action' | 'equals';

/**
 * Button configuration interface
 */
export interface ButtonConfig {
  label: string;
  value: string;
  type: ButtonType;
  testID?: string;
}

/**
 * Dimension change event type
 */
export interface DimensionChange {
  window: ScaledSize;
  screen: ScaledSize;
}

/**
 * Calculator state interface
 */
export interface CalculatorState {
  input: string;
  result: string;
  history: HistoryEntry[];
}

/**
 * History entry for calculations
 */
export interface HistoryEntry {
  expression: string;
  result: string;
  timestamp: Date;
}

/**
 * Theme colors interface
 */
export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  buttonNumber: string;
  buttonOperator: string;
  buttonFunction: string;
  buttonAction: string;
  buttonEquals: string;
  error: string;
}

/**
 * Theme interface
 */
export interface Theme {
  colors: ThemeColors;
  isDark: boolean;
}
