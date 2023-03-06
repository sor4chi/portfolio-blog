import { createGlobalTheme, createTheme } from '@vanilla-extract/css';

import { colorVars } from './contract.css';

// Black: "#1F262D",
// Red: "#e27878",
// Green: "#b4be82",
// Yellow: "#e2a478",
// Blue: "#84a0c6",
// Magenta: "#a093c7",
// Cyan: "#89b8c2",
// White: "#c6c8d1",
// BrightBlack: "#727272",
// BrightRed: "#e98989",
// BrightGreen: "#c0ca8f",
// BrightYellow: "#e9b189",
// BrightBlue: "#91acd1",
// BrightMagenta: "#ada0d3",
// BrightCyan: "#95c4ce",
// BrightWhite: "#d2d4df",

createGlobalTheme('.light', colorVars, {
  bg: {
    primary: '#EDF2F7',
    secondary: '#c9d2e1',
  },
  text: {
    primary: '#1F262D',
    secondary: '#2F3A45',
  },
});

createGlobalTheme('.dark', colorVars, {
  bg: {
    primary: '#1F262D',
    secondary: '#2F3A45',
  },
  text: {
    primary: '#EDF2F7',
    secondary: '#c9d2e1',
  },
});

const [commonThemeClass, commonVars] = createTheme({
  size: {
    containerMaxWidth: '64rem',
    headerHeight: '4rem',
  },
});

export const vars = {
  color: colorVars,
  size: commonVars.size,
};

export const themeClass = commonThemeClass;
