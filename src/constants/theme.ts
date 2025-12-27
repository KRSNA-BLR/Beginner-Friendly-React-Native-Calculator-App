/**
 * Theme constants for the React Native Calculator App
 * @author Danilo Viteri - KB Asesorías
 */

import { Theme, ThemeColors } from '../types';

/**
 * Light theme colors
 */
export const lightColors: ThemeColors = {
  primary: '#E10600',
  secondary: '#1E88E5',
  background: '#FFFFFF',
  surface: '#F5F5F5',
  text: '#000000',
  textSecondary: '#666666',
  buttonNumber: '#424242',
  buttonOperator: '#E10600',
  buttonFunction: '#1E88E5',
  buttonAction: '#FF5722',
  buttonEquals: '#4CAF50',
  error: '#F44336',
};

/**
 * Dark theme colors - KB Asesorías Official Palette
 * Primary: #101820 (Navy/Black)
 * Accent: #E10600 (Red)
 * Light: #FFFFFF (White)
 */
export const darkColors: ThemeColors = {
  primary: '#E10600',
  secondary: '#FFFFFF',
  background: '#101820',
  surface: '#1C242E',
  text: '#FFFFFF',
  textSecondary: '#A0A0A0',
  buttonNumber: '#2A3441',
  buttonOperator: '#E10600',
  buttonFunction: '#3A4551',
  buttonAction: '#4A5561',
  buttonEquals: '#E10600',
  error: '#E10600',
};

/**
 * Light theme
 */
export const lightTheme: Theme = {
  colors: lightColors,
  isDark: false,
};

/**
 * Dark theme
 */
export const darkTheme: Theme = {
  colors: darkColors,
  isDark: true,
};

/**
 * Font sizes
 */
export const fontSizes = {
  small: 14,
  medium: 18,
  large: 24,
  xlarge: 32,
  display: 40,
  result: 50,
};

/**
 * Spacing values
 */
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
};

/**
 * Border radius values
 */
export const borderRadius = {
  small: 4,
  medium: 8,
  large: 12,
  round: 50,
};
