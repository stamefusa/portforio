import { Metadata } from 'next';
import { getDetail } from '@/libs/microcms';
import Profile from '@/components/Profile';

export default async function Page() {
  return <Profile />;
}
