import Link from 'next/link';

import { TweetEmbed } from '.';

const UrlLink = (url: string, text?: string) => (
  <Link key={url} href={url} passHref className="main-gradient-text">
    {text || url}
  </Link>
);

const replaceUrl = (text: string) => {
  const regex = /(https?:\/\/[^\s]+|@[a-zA-Z0-9_]+)/g;
  const split = text.split(regex);
  return split.map((str) => {
    if (str.match(regex) === null) return str;
    if (str.match(/https?:\/\/[^\s]+/g)) return UrlLink(str);
    if (str.match(/@[a-zA-Z0-9_]+/g))
      return UrlLink(`https://twitter.com/${str.slice(1)}`, str);
  });
};

interface Props {
  text: string;
  quote_id?: string;
}

export const PostContent = ({ text, quote_id }: Props) => (
  <>
    <span className="whitespace-pre-wrap">{replaceUrl(text)}</span>
    {quote_id && <TweetEmbed id={quote_id} quote />}
  </>
);
