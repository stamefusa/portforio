export async function GET() {
  return new Response(
    ['User-agent: *', 'Allow: /', 'Sitemap: https://stamefusa.jp/sitemap.xml'].join('\n'),
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
}
