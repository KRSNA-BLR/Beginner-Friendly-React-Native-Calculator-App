/**
 * Display Component for Calculator
 * @author Danilo Viteri - KB Asesorías
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../hooks';
import { fontSizes, spacing } from '../../constants/theme';

interface DisplayProps {
  input: string;
  result: string;
  testID?: string;
}

/**
 * Display component showing the current input and calculation result
 */
const Display: React.FC<DisplayProps> = ({ input, result, testID }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]} testID={testID}>
      <Text
        style={[styles.inputText, { color: colors.text }]}
        numberOfLines={2}
        adjustsFontSizeToFit
        testID="display-input"
      >
        {input || '0'}
      </Text>
      <Text
        style={[
          styles.resultText,
          { color: colors.primary },
          result === 'Error' && { color: colors.error },
        ]}
        numberOfLines={1}
        adjustsFontSizeToFit
        testID="display-result"
      >
        {result}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: spacing.xl,
    minHeight: 150,
  },
  inputText: {
    fontSize: fontSizes.display,
    textAlign: 'right',
    marginBottom: spacing.md,
    fontFamily: 'monospace',
  },
  resultText: {
    fontSize: fontSizes.result,
    textAlign: 'right',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
});

export default Display;
