import * as Color from 'color';
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const Resets = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    border: 0;
    line-height: 1.5;
    font-size: 16px;
    margin: 0;
    overflow-x: hidden;
    overflow-y: overlay;
    height: 100%;
    background-color: ${theme.colors.background};
    text-rendering: optimizelegibility;

    @supports not( -moz-appearance:none ){
      overflow-y: overlay;
    }
  }
  div, span, object, iframe, img, table, caption, thead, tbody,
  tfoot, tr, tr, td, article, aside, canvas, details, figure, hgroup, menu,
  nav, footer, header, section, summary, mark, audio, video {
    border: 0;
    margin: 0;
    padding: 0;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, address, cit, code,
  del, dfn, em, ins, q, samp, small, strong, sub, sup, b, i, hr, dl, dt, dd,
  ol, ul, li, fieldset, legend, label, button{
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    margin: 0;
    padding: 0;
    text-decoration: none;
    user-select: none;
    font-weight: normal;
    -webkit-tap-highlight-color: transparent;
  }
  article, aside, canvas, figure, figure img, figcaption, hgroup,
  footer, header, nav, section, audio, video {
    display: block;
  }
  table {
    border-collapse: separate;
    border-spacing: 0;
    caption, th, td {
      text-align: left;
      vertical-align: middle;
    }
  }
  body, input, textarea, button {
    font-family: Ubuntu;
    font-size: 16px;
    line-height: 1.5;
    border: none;
    color: ${theme.colors.text};

    &::placeholder {
      color: ${Color(theme.colors.text).alpha(0.45).string()};
    }
  }
  pre {
    white-space: pre-wrap;
  }
  a img {
    color: ${theme.colors.text};
    border: 0;
  }
  button {
    background-color: transparent;
  }
  :focus {
    outline: 0;
  }
`;
