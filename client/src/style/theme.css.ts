import { createGlobalTheme } from '@vanilla-extract/css';

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
    primary: '#ffffff',
    secondary: '#EDF2F7',
    tertiary: '#dde6f0',
  },
  text: {
    primary: '#1F262D',
    secondary: '#2e343b',
    tertiary: '#4f5b67',
  },
  accent: {
    primary: '#b8aed8',
    secondary: '#cec6ea',
  },
  social: {
    twitter: '#1da1f2',
    github: '#111111',
  },
  error: '#e27878',
});

createGlobalTheme('.dark', colorVars, {
  bg: {
    primary: '#1F262D',
    secondary: '#2F3A45',
    tertiary: '#3F5267',
  },
  text: {
    primary: '#EDF2F7',
    secondary: '#cad1df',
    tertiary: '#b2b9c6',
  },
  accent: {
    primary: '#859fc2',
    secondary: '#627fa8',
  },
  social: {
    twitter: '#1da1f2',
    github: '#ffffff',
  },
  error: '#e27878',
});

export const vars = {
  color: colorVars,
  size: {
    containerMaxWidth: '64rem',
    headerHeight: '4rem',
    sideMenuWidth: '13rem',
  },
  breakpoint: {
    mobile: '768px',
    pc: '1024px',
  },
};
