// 1. Import the extendTheme function
import { extendTheme, NativeBaseProvider } from 'native-base';
// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
};
export const theme = extendTheme({ colors: newColorTheme });

export const config = {
  suppressColorAccessibilityWarning: true,
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
};
