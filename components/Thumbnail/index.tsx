import Image from 'next/image';
import styles from './index.module.css';
import { MicroCMSImage } from 'microcms-js-sdk';

type Props = {
  thumbnail?: MicroCMSImage;
  type: string;
};

export default function Thumbnail({ thumbnail, type }: Props) {
  // listかdetailで画像サイズが異なる
  const thumbnailSize = type === 'list' ? 'w=240&h=135' : 'w=640';

  if (!thumbnail) {
    return (
      <Image
        className={type === 'list' ? styles.list : styles.detail}
        src="/no-image.png"
        alt="No Image"
        width={1200}
        height={630}
      />
    );
  }
  return (
    <picture>
      <source
        type="image/webp"
        media="(max-width: 540px)"
        srcSet={`${thumbnail?.url}?fm=webp&w=540 1x, ${thumbnail?.url}?fm=webp&w=540&dpr=2 2x`}
      />
      <source
        type="image/webp"
        srcSet={`${thumbnail?.url}?fm=webp&fit=crop&${thumbnailSize} 1x, ${thumbnail?.url}?fm=webp&fit=crop&${thumbnailSize}&dpr=2 2x`}
      />
      <img
        src={thumbnail?.url}
        alt=""
        className={type === 'list' ? styles.list : styles.detail}
        width={thumbnail?.width}
        height={thumbnail?.height}
      />
    </picture>
  );
}
