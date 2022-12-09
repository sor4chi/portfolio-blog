'use client';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoMdArrowForward, IoMdOpen } from 'react-icons/io';

import { Blog } from '#/types/blog';
import { dateToPassedTimeByNow } from '#/utils/date';

import { BlogTagList } from './tag-list';

interface Props {
  blog: Blog;
}

export const BlogCard = ({ blog }: Props) => {
  const iconUrl = (() => {
    if (blog.type === 'zenn') return '/zenn.svg';
    if (blog.type === 'qiita') return '/qiita.png';
    return '/original.svg';
  })();

  const [onHover, setOnHover] = useState(false);

  const isUrlExternal = (() => {
    if (blog.type === 'zenn') return true;
    if (blog.type === 'qiita') return true;
    return false;
  })();

  return (
    <Link
      href={blog.url || `blogs/${blog.slug}` || ''}
      target={isUrlExternal ? '_blank' : undefined}
      onMouseOver={() => setOnHover(true)}
      onMouseOut={() => setOnHover(false)}
    >
      <div
        className={clsx(
          'common-card',
          'flex p-4 hover:border-orange-500 dark:hover:border-orange-500',
        )}
      >
        <div
          className={clsx(
            'w-max h-max mr-4 rounded-lg float-left border-[1.5px] relative overflow-hidden',
            'bg-slate-100 border-white',
            'dark:bg-neutral-900 dark:border-neutral-700',
            'transition-colors duration-300',
          )}
        >
          <div className="p-4">
            <Image src={iconUrl} alt="icon" width={24} height={24} />
          </div>
          <div
            className={clsx(
              'w-full h-full left-0 top-0 flex justify-center items-center absolute backdrop-blur-sm  transition-opacity duration-300 ease-in-out',
              onHover ? 'opacity-100' : 'opacity-0',
            )}
          >
            {blog.type !== 'original' ? <IoMdOpen /> : <IoMdArrowForward />}
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-bold">{blog.title}</h1>
          <div className="flex flex-wrap items-end justify-between mt-2">
            <BlogTagList tags={blog.tags} />
            <div className="float-right clear-both text-sm text-neutral-400 dark:text-neutral-600">
              {dateToPassedTimeByNow(blog.date)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
