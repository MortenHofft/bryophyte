import { shadeHexColor } from './utils';

const defaultTheme = {};

const themeBuilder =  theme => {
  const fullTheme = Object.assign({}, defaultTheme, theme);
  fullTheme.colors.primary500 = theme.colors.primary;
  fullTheme.colors.primary700 = shadeHexColor(fullTheme.colors.primary500, -0.1);
  console.log(fullTheme);
  return fullTheme;
}

export default themeBuilder;