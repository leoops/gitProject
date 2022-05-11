import { useEffect, useState } from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { DARK, LIGHT } from '../../styles/theme.style';

const isDarkTheme = (theme: ColorSchemeName) => {
  return theme === 'dark';
};

export default <T, R>(darkTheme: T, defaultTheme: R) => {
  const defineCurrentTheme = (theme: ColorSchemeName) => {
    return isDarkTheme(theme) ? darkTheme : defaultTheme;
  };

  const currentColorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState(
    defineCurrentTheme(currentColorScheme),
  );

  useEffect(() => {
    const theme = defineCurrentTheme(currentColorScheme);
    setCurrentTheme(theme);
  }, [currentColorScheme]);

  return currentTheme;
};
