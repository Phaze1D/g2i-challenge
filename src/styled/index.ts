import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

import { ThemeType } from './theme';

const {
  default: styled,
  css,
  keyframes,
  createGlobalStyle,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeType>;

export * from './theme';
export * from './reset';
export * from './mixins';
export { css, keyframes, ThemeProvider, createGlobalStyle };
export default styled;
