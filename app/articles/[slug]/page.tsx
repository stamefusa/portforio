import { Metadata } from 'next';
import { getDetail } from '@/libs/microcms';
import Article from '@/components/Article';

type PageParams = {
  slug: string;
};

type PageSearchParams = {
  dk?: string;
};

type Props = {
  params: Promise<PageParams>;
  searchParams?: Promise<PageSearchParams>;
};

export const revalidate = 60;

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const draftKey = resolvedSearchParams?.dk;

  const data = await getDetail(slug, draftKey ? { draftKey } : undefined);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url || ''],
    },
    alternates: {
      canonical: '/articles/' + slug,
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const draftKey = resolvedSearchParams?.dk;

  const data = await getDetail(slug, draftKey ? { draftKey } : undefined);

  return <Article data={data} />;
}
