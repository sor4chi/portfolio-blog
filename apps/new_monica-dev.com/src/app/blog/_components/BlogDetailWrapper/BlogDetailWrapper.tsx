import Image from 'next/image';
import { ArrowLeft } from 'react-feather';

import { styles } from './BlogDetailWrapper.css';

import { TransitionLink } from '@/components/logical/TransitionLink';
import { Link } from '@/components/ui/Link';
import { getEnYearMonthDay } from '@/utils/date';

export const BlogDetailWrapper = ({
  children,
  date,
  thumbnail,
  title,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  date: string;
  thumbnail?: string;
}) => {
  return (
    <div className={styles.container}>
      <aside className={styles.asideLeft}>
        <Link tag={TransitionLink} href="/blog">
          <ArrowLeft strokeWidth={1.5} size="1em" />
          Back
        </Link>
      </aside>
      <div className={styles.content}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <span className={styles.heroDate}>
            <time className={styles.heroDate} dateTime={date}>
              {getEnYearMonthDay(new Date(date))}
            </time>
          </span>
        </div>
        {thumbnail && (
          <Image
            className={styles.thumbnail}
            src={thumbnail}
            alt={title}
            width={640}
            height={360}
            priority
            loading="eager"
          />
        )}
        <article className={styles.article}>{children}</article>
      </div>
      <aside className={styles.asideRight}></aside>
    </div>
  );
};
