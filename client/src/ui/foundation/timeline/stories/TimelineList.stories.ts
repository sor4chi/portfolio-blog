import type { Meta, StoryObj } from '@storybook/react';

import { TimelineList } from '..';

const meta = {
  argTypes: {
    timelines: {
      control: { type: 'array' },
    },
  },
  component: TimelineList,
  tags: ['autodocs'],
  title: 'Foundation/Timeline/List',
} satisfies Meta<typeof TimelineList>;

type Story = StoryObj<typeof TimelineList>;

export const Default = {
  args: {
    timelines: [
      {
        blog: {
          slug: 'blog-title',
          title: 'これは技術ブログのタイトルです',
        },
        category: 'unknown',
        date: '2021-01-01',
        title: 'Timeline List Title',
      },
      {
        category: 'award',
        date: '2021-01-01',
        title: 'Timeline List Title',
      },
      {
        blog: {
          slug: 'blog-title',
          title: 'これは技術ブログのタイトルです',
        },
        category: 'blog',
        date: '2021-01-01',
        title: 'Timeline List Title',
      },
      {
        category: 'education',
        date: '2021-01-01',
        title: 'Timeline List Title',
      },
      {
        blog: {
          slug: 'blog-title',
          title: 'これは技術ブログのタイトルです',
        },
        category: 'product',
        date: '2021-01-01',
        title: 'Timeline List Title',
      },
      {
        category: 'work',
        date: '2021-01-01',
        title: 'Timeline List Title',
      },
    ],
  },
} satisfies Story;

export default meta;
