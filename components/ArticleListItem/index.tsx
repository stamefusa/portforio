import Link from 'next/link';
import { Article } from '@/libs/microcms';
import styles from './index.module.css';
import Thumbnail from '../Thumbnail';

type Props = {
  article: Article;
};

export default function ArticleListItem({ article }: Props) {
  return (
    <li className={styles.list}>
      <Link href={`/articles/${article.id}`} className={styles.link}>
        <Thumbnail thumbnail={article.thumbnail} type="list" />
        <dl className={styles.content}>
          <dt className={styles.title}>{article.title}</dt>
        </dl>
      </Link>
    </li>
  );
}
