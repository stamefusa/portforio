import { Article } from '@/libs/microcms';
import ArticleListItem from '../ArticleListItem';
import Intro from '../Intro';
import styles from './index.module.css';

type Props = {
  articles?: Article[];
};

export default function ArticleList({ articles }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <>
      <Intro />
      <ul className={styles.listParent}>
        {articles.map((article) => (
          <ArticleListItem key={article.id} article={article} />
        ))}
      </ul>
    </>
  );
}
