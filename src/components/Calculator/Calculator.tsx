/**
 * Main Calculator Component
 * @author Danilo Viteri - KB Asesorías
 *
 * Responsive layout:
 * - Portrait: Basic calculator (5 rows x 4 columns)
 * - Landscape: Scientific calculator (6 rows x 6 columns)
 */

import React, { useMemo } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  useWindowDimensions,
  StatusBar,
  Platform,
  SafeAreaView,
} from 'react-native';
import { Header } from '../Header';
import { Display } from '../Display';
import { CalculatorButton } from '../Button';
import { useCalculator, useTheme } from '../../hooks';
import { PORTRAIT_ROWS, LANDSCAPE_ROWS } from '../../constants/buttons';
import { spacing, fontSizes } from '../../constants/theme';

/**
 * Main Calculator component that combines all sub-components
 * Supports both portrait and landscape orientations with different button layouts
 */
const Calculator: React.FC = () => {
  const { input, result, handlePress } = useCalculator();
  const { colors, isDark, toggleTheme } = useTheme();
  const { width, height } = useWindowDimensions();

  const isLandscape = width > height;

  // Calculate button size based on screen dimensions and orientation
  const buttonSize = useMemo(() => {
    const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight || 24 : 0;
    const safeHeight = height - statusBarHeight;

    if (isLandscape) {
      // Landscape: 6 columns, 6 rows
      const columns = 6;
      const rows = 6;
      const horizontalPadding = spacing.md * 2;
      const verticalPadding = spacing.sm * 2;
      const buttonGap = 8;

      // Right panel takes ~60% of width
      const rightPanelWidth = width * 0.6;
      const availableWidth = rightPanelWidth - horizontalPadding - (columns * buttonGap);
      const availableHeight = safeHeight - verticalPadding - (rows * buttonGap);

      const maxByWidth = availableWidth / columns;
      const maxByHeight = availableHeight / rows;

      return Math.min(maxByWidth, maxByHeight, 60);
    } else {
      // Portrait: 4 columns, 5 rows
      const columns = 4;
      const rows = 5;
      const horizontalPadding = spacing.md * 2;
      const buttonGap = 8;

      // Buttons take ~55% of height
      const buttonsHeight = safeHeight * 0.55;
      const availableWidth = width - horizontalPadding - (columns * buttonGap);
      const availableHeight = buttonsHeight - (rows * buttonGap);

      const maxByWidth = availableWidth / columns;
      const maxByHeight = availableHeight / rows;

      return Math.min(maxByWidth, maxByHeight, 85);
    }
  }, [width, height, isLandscape]);

  // Select button rows based on orientation
  const buttonRows = isLandscape ? LANDSCAPE_ROWS : PORTRAIT_ROWS;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />

      {isLandscape ? (
        // Landscape Layout - Scientific Calculator
        <View style={styles.landscapeContainer}>
          {/* Left Panel: Header + Display */}
          <View style={styles.landscapeLeft}>
            <View style={styles.headerRow}>
              <Header testID="calculator-header" />
              <TouchableOpacity
                style={[styles.themeToggle, { backgroundColor: colors.surface }]}
                onPress={toggleTheme}
                testID="theme-toggle"
              >
                <Text style={[styles.themeToggleText, { color: colors.text }]}>
                  {isDark ? '☀️' : '🌙'}
                </Text>
              </TouchableOpacity>
            </View>
            <Display input={input} result={result} testID="calculator-display" />
          </View>

          {/* Right Panel: Scientific Buttons Grid */}
          <View style={styles.landscapeRight}>
            <View style={styles.buttonsGrid}>
              {buttonRows.map((row, rowIndex) => (
                <View key={`row-${rowIndex}`} style={styles.row}>
                  {row.map(button => (
                    <CalculatorButton
                      key={button.testID}
                      label={button.label}
                      onPress={() => handlePress(button.value)}
                      type={button.type}
                      testID={button.testID}
                      wide={button.wide}
                      buttonSize={buttonSize}
                      isLandscape={true}
                    />
                  ))}
                </View>
              ))}
            </View>
          </View>
        </View>
      ) : (
        // Portrait Layout - Basic Calculator
        <View style={styles.portraitContainer}>
          {/* Header with theme toggle */}
          <View style={styles.headerRow}>
            <Header testID="calculator-header" />
            <TouchableOpacity
              style={[styles.themeToggle, { backgroundColor: colors.surface }]}
              onPress={toggleTheme}
              testID="theme-toggle"
            >
              <Text style={[styles.themeToggleText, { color: colors.text }]}>
                {isDark ? '☀️' : '🌙'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Display */}
          <View style={styles.displayContainer}>
            <Display input={input} result={result} testID="calculator-display" />
          </View>

          {/* Buttons Grid */}
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonsGrid}>
              {buttonRows.map((row, rowIndex) => (
                <View key={`row-${rowIndex}`} style={styles.row}>
                  {row.map(button => (
                    <CalculatorButton
                      key={button.testID}
                      label={button.label}
                      onPress={() => handlePress(button.value)}
                      type={button.type}
                      testID={button.testID}
                      wide={button.wide}
                      buttonSize={buttonSize}
                      isLandscape={false}
                    />
                  ))}
                </View>
              ))}
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // Portrait styles
  portraitContainer: {
    flex: 1,
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonsContainer: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.lg,
  },
  // Landscape styles
  landscapeContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  landscapeLeft: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
  },
  landscapeRight: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: spacing.md,
  },
  // Common styles
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: spacing.md,
  },
  themeToggle: {
    padding: spacing.sm,
    borderRadius: 20,
  },
  themeToggleText: {
    fontSize: fontSizes.large,
  },
  buttonsGrid: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Calculator;
