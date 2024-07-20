import styles from './index.module.css';
import { MicroCMSImage } from 'microcms-js-sdk';

type Props = {
  thumbnail?: MicroCMSImage;
};

export default function Thumbnail({ thumbnail }: Props) {
  if (!thumbnail) {
    return null;
  }
  return (
    <picture>
      <source
        type="image/webp"
        media="(max-width: 640px)"
        srcSet={`${thumbnail?.url}?fm=webp&w=414 1x, ${thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
      />
      <source
        type="image/webp"
        srcSet={`${thumbnail?.url}?fm=webp&fit=crop&w=640 1x, ${thumbnail?.url}?fm=webp&fit=crop&w=640&dpr=2 2x`}
      />
      <img
        src={thumbnail?.url}
        alt=""
        className={styles.thumbnail}
        width={thumbnail?.width}
        height={thumbnail?.height}
      />
    </picture>
  );
}
