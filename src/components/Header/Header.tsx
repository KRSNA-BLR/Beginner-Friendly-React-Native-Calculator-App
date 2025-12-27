/**
 * Header Component with KB Asesorías Logo
 * @author Danilo Viteri - KB Asesorías
 */

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useTheme } from '../../hooks';
import { spacing } from '../../constants/theme';

interface HeaderProps {
  testID?: string;
}

/**
 * Header component displaying the KB Asesorías logo
 */
const Header: React.FC<HeaderProps> = ({ testID }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]} testID={testID}>
      <Image
        source={require('../../../assets/kbasesorias-logo-react-calculadora.png')}
        style={styles.logo}
        resizeMode="contain"
        testID="header-logo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.sm,
    flex: 1,
  },
  logo: {
    width: 250,
    height: 80,
  },
});

export default Header;
