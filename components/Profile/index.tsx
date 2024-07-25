import { MicroCMSImage } from 'microcms-js-sdk';
import Thumbnail from '../Thumbnail';
import styles from './index.module.css';

export default function Profile() {
  const image: MicroCMSImage = {
    url: 'https://images.microcms-assets.io/assets/72d43dc19932497593b8e2d78e9e6651/24069d84fc604856ad2f4601b82c1c2f/profile.jpg',
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>爲房 新太朗（Shintaro Tamefusa）</h1>
      <Thumbnail thumbnail={image} type="detail" />
      <div className={styles.body}>
        <div className={styles.profile}>
          <h2 className={styles.h2}>プロフィール</h2>
          <p>
            1987年兵庫県生まれで二児の父。 <br />
            役に立つ・便利といった機能性を無視した、明るく笑えるギャグソウチを作っている。
          </p>
          <p>
            2014年に開催された
            <a href="https://dailyportalz.jp/b/rookie2014/result.htm" target="_blank">
              デイリーポータルZ新人賞
            </a>
            で「惜しかった作品たち」に選ばれたことをきっかけに、2015年より同サイトで工作記事を中心に執筆。
            <br />
            開発したギャグソウチをMaker
            Faireなどのイベントで展示しており、付き添いで来た人を笑わせることを目標にしている。
          </p>
          <p>難しい名字のため、家族が偽名で飲食店の予約をするのが悩みである。</p>
        </div>
        <div className={styles.publication}>
          <h2 className={styles.h2}>メディア出演・掲載</h2>
          <h3 className={styles.h3}>テレビ</h3>
          <ul>
            <li>
              <a href="https://www.youtube.com/watch?v=pFK3S02A_SI" target="_blank">
                バナナサンド（パイロット版・TBS）
              </a>
            </li>
            <li>
              <a href="https://www.tv-hokkaido.co.jp/info/exit_ayashii_tv/" target="_blank">
                EXITのアヤシイTV アチ～の見つけました！（テレビ北海道）
              </a>
            </li>
          </ul>
          <h3 className={styles.h3}>ウェブサイト（作品紹介除く）</h3>
          <ul>
            <li>
              <a href="https://www.youtube.com/watch?v=s9oAUyBTfOM" target="_blank">
                DJみそしるとMCごはん 『The Gang Eat More』
              </a>
            </li>
            <li>
              <a
                href="https://meetscareer.tenshoku.mynavi.jp/entry/20211229-tamefusa"
                target="_blank"
              >
                役に立つこと・むだなことの両立で自分のバランスが取れる。工作ライター爲房新太朗さんのライフワークバランス
                - ミーツキャリアbyマイナビ転職
              </a>
            </li>
          </ul>
          <h3 className={styles.h3}>イベント</h3>
          <ul>
            <li>
              <a href="https://dailyportalz.jp/b/iaga2014/" target="_blank">
                国際GIFアニメアワード2014
              </a>
            </li>
            <li>
              <a href="https://tokyocultureculture.com/event/general/17628" target="_blank">
                頭の悪いメカ 発表会 by fabcross × デイリーポータルＺ
              </a>
            </li>
            <li>
              <a href="https://tokyocultureculture.com/event/general/20021" target="_blank">
                頭の悪いメカ 発表会２ by fabcross × デイリーポータルＺ supported by 東急ハンズ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
