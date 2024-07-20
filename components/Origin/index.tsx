import styles from './index.module.css';
import { Origin } from '@/libs/microcms';

type Props = {
  origin?: Origin;
};

export default function Origin({ origin }: Props) {
  if (!origin) {
    return null;
  }
  return (
    <div className={styles.origin}>
      掲載元：<a href={origin.url}>{origin.title || origin.url}</a>
    </div>
  );
}
