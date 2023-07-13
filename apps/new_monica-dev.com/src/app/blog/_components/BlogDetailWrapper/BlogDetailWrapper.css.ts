import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const styles = {
  nav: style({
    gridColumn: '2 / 3',
    gridRow: '2 / 3',
  }),
  content: style({
    gridColumn: '3 / 4',
    gridRow: '2 / 3',
  }),
  hero: style({
    gridColumn: '3 / 4',
    gridRow: '1 / 2',
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: vars.spacing.absolute[2],
  }),
  title: style({
    color: vars.color.gray[12],
    fontSize: vars.font.size.lg,
    fontWeight: 500,
    margin: vars.spacing[0],
  }),
  date: style({
    color: vars.color.gray[11],
    fontSize: vars.font.size.sm,
    margin: vars.spacing[0],
  }),
  thumbnail: style({
    width: '100%',
    aspectRatio: '640 / 360',
    height: 'auto',
    borderRadius: vars.spacing.relative[2],
    objectFit: 'cover',
    overflow: 'hidden',
  }),
};
