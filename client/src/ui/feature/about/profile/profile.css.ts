import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '@/style/theme.css';

export const skills = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  justifyContent: 'center',
  marginTop: '1rem',
  marginBottom: '3rem',
  color: vars.color.text.secondary,
});

export const skill = style({});

globalStyle(`${skill} > *`, {
  margin: '0 0.25rem',
  verticalAlign: 'middle',
});
