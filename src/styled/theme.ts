export type ThemeType = {
  colors: {
    primary: string
    text: string
    background: string
    error: string
  }
  breakpoints: {
    mobile: string
  }
};

export const theme: ThemeType = {
  colors: {
    primary: '#26a69a',
    text: '#F6F5F7',
    background: '#283d62',
    error: '#ef5350'
  },
  breakpoints: {
    mobile: '768px'
  }
};
