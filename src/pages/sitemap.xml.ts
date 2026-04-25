import { getTotalPages, getWorksList, getWorksPageList } from '../lib/microcms';

export async function GET() {
  const site = 'https://stamefusa.jp';
  const firstPage = await getWorksPageList();
  const works = await getWorksList();
  const totalPages = getTotalPages(firstPage.totalCount);

  const urls = [
    '/',
    '/about/',
    '/contact/',
    ...works.contents.map((work) => `/articles/${work.id}/`),
    ...Array.from({ length: Math.max(totalPages - 1, 0) }).map((_, index) => `/p/${index + 2}/`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${new URL(path, site).toString()}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
