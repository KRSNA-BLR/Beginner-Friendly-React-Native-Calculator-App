/**
 * Calculator Button Component
 * @author Danilo Viteri - KB Asesorías
 */

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Vibration,
  Platform,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { ButtonType, ThemeColors } from '../../types';
import { useTheme } from '../../hooks';
import { borderRadius } from '../../constants/theme';

interface CalculatorButtonProps {
  label: string;
  onPress: () => void;
  type?: ButtonType;
  testID?: string;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  wide?: boolean;
  buttonSize?: number;
  isLandscape?: boolean;
}

/**
 * Get background color based on button type and theme
 */
const getButtonColor = (type: ButtonType, colors: ThemeColors): string => {
  switch (type) {
    case 'number':
      return colors.buttonNumber;
    case 'operator':
      return colors.buttonOperator;
    case 'function':
      return colors.buttonFunction;
    case 'action':
      return colors.buttonAction;
    case 'equals':
      return colors.buttonEquals;
    default:
      return colors.buttonNumber;
  }
};

/**
 * Reusable calculator button component with type-based styling
 */
const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  label,
  onPress,
  type = 'number',
  testID,
  disabled = false,
  style,
  textStyle,
  wide = false,
  buttonSize = 70,
  isLandscape = false,
}) => {
  const { colors } = useTheme();
  const scaleValue = React.useRef(new Animated.Value(1)).current;

  /**
   * Trigger haptic feedback
   */
  const triggerHaptic = () => {
    if (Platform.OS === 'android') {
      Vibration.vibrate(10); // Short vibration for Android
    }
    // iOS uses native haptic through TouchableOpacity
  };

  const handlePressIn = () => {
    triggerHaptic();
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const backgroundColor = getButtonColor(type, colors);
  
  // Calculate button dimensions
  const gap = 8;
  const buttonWidth = wide ? (buttonSize * 2) + gap : buttonSize;
  const buttonHeight = buttonSize;
  
  // Dynamic font size based on button size and landscape mode
  const fontSize = isLandscape 
    ? Math.max(12, Math.min(16, buttonSize * 0.35))
    : Math.max(16, Math.min(24, buttonSize * 0.4));

  return (
    <Animated.View
      style={[
        styles.buttonWrapper,
        { 
          width: buttonWidth,
          height: buttonHeight,
          transform: [{ scale: scaleValue }],
        },
      ]}
    >
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor },
          disabled && styles.buttonDisabled,
          style,
        ]}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.8}
        disabled={disabled}
        testID={testID}
      >
        <Text 
          style={[
            styles.buttonText, 
            { fontSize },
            textStyle,
          ]}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {label}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    margin: 4,
  },
  button: {
    flex: 1,
    borderRadius: borderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    textAlign: 'center',
  },
});

export default CalculatorButton;
