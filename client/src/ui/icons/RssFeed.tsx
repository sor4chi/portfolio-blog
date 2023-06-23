import * as React from 'react';
import type { SVGProps } from 'react';

const SvgRssFeed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M200-120q-33 0-56.5-23.5T120-200q0-33 23.5-56.5T200-280q33 0 56.5 23.5T280-200q0 33-23.5 56.5T200-120Zm480 0q0-116-44-217.5t-120.5-178Q439-592 337.5-636T120-680v-120q141 0 265 53.5T601-601q92 92 145.5 216T800-120H680Zm-240 0q0-133-93.5-226.5T120-440v-120q92 0 172 34.5t139.5 94Q491-372 525.5-292T560-120H440Z" />
  </svg>
);
export default SvgRssFeed;
