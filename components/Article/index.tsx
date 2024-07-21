import { formatRichText } from '@/libs/utils';
import { type Article } from '@/libs/microcms';
import PublishedDate from '../Date';
import styles from './index.module.css';
import Thumbnail from '../Thumbnail';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.meta}>
        <PublishedDate date={data.publishedAt || data.createdAt} />
      </div>
      <Thumbnail thumbnail={data.thumbnail} />
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.content)}`,
        }}
      />
    </main>
  );
}
