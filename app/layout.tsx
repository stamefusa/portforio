import { getTagList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import './globals.css';
import styles from './layout.module.css';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'stamefusa.jp',
  description: '爲房新太朗が作ってきた、明るく笑えるギャグソウチたちを紹介します。',
  openGraph: {
    title: 'stamefusa.jp',
    description: '爲房新太朗が作ってきた、明るく笑えるギャグソウチたちを紹介します',
    images: '/ogp.png',
  },
  alternates: {
    canonical: '/',
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <Nav />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
