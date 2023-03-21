import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/style/theme.css';

// toggle switch styles
const TOGGLE_CURSOR_SIZE = '1rem';
const TOGGLE_PADDING = '0.25rem';
const TOGGLE_WIDTH = `2.5rem`;

const baseToggle = style({
  width: TOGGLE_WIDTH,
  height: TOGGLE_CURSOR_SIZE,
  borderRadius: '1rem',
  padding: TOGGLE_PADDING,
  position: 'relative',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out',
});

export const toggle = styleVariants({
  on: [
    baseToggle,
    {
      backgroundColor: vars.color.accent.primary,
    },
  ],
  off: [
    baseToggle,
    {
      backgroundColor: vars.color.text.tertiary,
    },
  ],
});

const baseToggleCursor = style({
  width: TOGGLE_CURSOR_SIZE,
  height: TOGGLE_CURSOR_SIZE,
  borderRadius: '1rem',
  position: 'absolute',
  top: TOGGLE_PADDING,
  transition: 'transform 0.2s ease-in-out',
  backgroundColor: vars.color.text.primary,
});

export const toggleCursor = styleVariants({
  on: [
    baseToggleCursor,
    {
      transform: `translateX(calc(${TOGGLE_WIDTH} - ${TOGGLE_CURSOR_SIZE}))`,
    },
  ],
  off: [
    baseToggleCursor,
    {
      transform: `translateX(0)`,
    },
  ],
});

export const input = style({
  display: 'none',
});
