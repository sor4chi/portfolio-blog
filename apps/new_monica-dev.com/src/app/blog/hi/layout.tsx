import { BlogWrapper } from '@/app/blog/_components/BlogWrapper';
import { generateMetaData } from '@/app/blog/_utils/blogMeta';

const TITLE = 'This is a Hi';
const DESCRIPTION = 'Hi component, how are you? I am fine, thank you.';
const PUBLISHED_AT = new Date('2021-10-10');
const THUMBNAIL = '/thumbnails/dish.avif';

export const metadata = generateMetaData({
  description: DESCRIPTION,
  publishedAt: PUBLISHED_AT,
  title: TITLE,
  thumbnail: THUMBNAIL,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BlogWrapper title={TITLE} description={DESCRIPTION} date={PUBLISHED_AT.toLocaleDateString('ja-JP')} thumbnail={THUMBNAIL}>
      {children}
    </BlogWrapper>
  );
}
