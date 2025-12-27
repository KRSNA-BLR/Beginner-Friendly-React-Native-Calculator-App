/**
 * React Native Calculator App
 * A beginner-friendly scientific calculator
 *
 * @author Danilo Viteri - KB Asesorías
 * @see https://github.com/KRSNA-BLR/Beginner-Friendly-React-Native-Calculator-App
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Calculator } from './components';
import { ThemeProvider, useTheme } from './hooks';

/**
 * App Content with theme
 */
const AppContent: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Calculator />
    </View>
  );
};

/**
 * Main App Component wrapped with ThemeProvider
 */
function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
