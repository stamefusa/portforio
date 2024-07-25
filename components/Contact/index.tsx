import styles from './index.module.css';

export default function Contact() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>連絡先</h1>
      <div className={styles.body}>
        <p>tameshin[at]gmail.com</p>
        <p>[at]を@に置換してください。</p>
        <span className={styles.notice}>
          <p>※お問い合わせ全てに返信をお約束出来るものではありません。</p>
        </span>
      </div>
    </div>
  );
}
