import { Metadata } from 'next';
import { getDetail } from '@/libs/microcms';
import Contact from '@/components/Contact';

export default async function Page() {
  return <Contact />;
}
