import Link from 'next/link';
import { Article } from '@/libs/microcms';
import styles from './index.module.css';
import TagList from '../TagList';
import PublishedDate from '../Date';
import Thumbnail from '../Thumbnail';

type Props = {
  article: Article;
  type: string;
};

export default function ArticleListItem({ article, type }: Props) {
  return (
    <li className={styles.list}>
      <Link href={`/articles/${article.id}`} className={styles.link}>
        <Thumbnail thumbnail={article.thumbnail} type="list" />
        <dl className={styles.content}>
          <dt className={styles.title}>{article.title}</dt>
          <dd className={styles.date}>
            <PublishedDate date={article.publishedAt || article.createdAt} />
          </dd>
        </dl>
      </Link>
    </li>
  );
}
