import * as styles from './article.css';
import './prism.css';
import 'katex/dist/katex.min.css';

import { parseHTMLToReactJSX } from '@/lib/markdown';
import { parseTwemoji } from '@/lib/twemoji';

interface Props {
  /**contentはHTML(String)であり、sanitizeされていることを前提とする**/
  content: string;
  imgOptimize: boolean;
}

export const Article = ({ content, imgOptimize }: Props) => {
  return <article className={styles.content}>{parseHTMLToReactJSX(parseTwemoji(content), imgOptimize)}</article>;
};
