import clsx from 'clsx';

export const TimelinePoint = () => (
  <span
    className={clsx(
      `h-[theme(sizes.timelinePoint)] w-[theme(sizes.timelinePoint)]`,
      'block rounded-full bg-neutral-700 dark:bg-gray-400',
      `left-[calc(-1_*_(theme(sizes.timelineBarAreaWidth)_/_2_+_theme(sizes.timelinePoint)_/_2))]`,
      'top-[calc(theme(lineHeights.timelineLabel)_/_2_-_theme(sizes.timelinePoint)_/_2)]',
      'absolute',
      'border-2 border-slate-100 transition-colors dark:border-neutral-900',
    )}
  />
);
