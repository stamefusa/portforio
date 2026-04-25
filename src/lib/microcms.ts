import { createClient } from 'microcms-js-sdk';
import type { MicroCMSDate, MicroCMSImage, MicroCMSListResponse } from 'microcms-js-sdk';

const WORKS_ENDPOINT = 'blog';
const FETCH_LIMIT = 100;
export const PAGE_LIMIT = 24;

export type Work = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
} & MicroCMSDate & {
  id: string;
};

function getEnv(name: 'MICROCMS_SERVICE_DOMAIN' | 'MICROCMS_API_KEY') {
  const value = import.meta.env[name];

  if (!value) {
    throw new Error(`${name} is required to build this site.`);
  }

  return value;
}

function getClient() {
  return createClient({
    serviceDomain: getEnv('MICROCMS_SERVICE_DOMAIN'),
    apiKey: getEnv('MICROCMS_API_KEY'),
  });
}

async function getWorksPage(offset = 0): Promise<MicroCMSListResponse<Work>> {
  const client = getClient();

  return client.getList<Work>({
    endpoint: WORKS_ENDPOINT,
    queries: {
      limit: FETCH_LIMIT,
      offset,
      orders: '-publishedAt',
    },
  });
}

export async function getWorksPageList(page = 1, limit = PAGE_LIMIT) {
  const client = getClient();

  return client.getList<Work>({
    endpoint: WORKS_ENDPOINT,
    queries: {
      limit,
      offset: limit * (page - 1),
      orders: '-publishedAt',
    },
  });
}

export function getTotalPages(totalCount: number, limit = PAGE_LIMIT) {
  return Math.ceil(totalCount / limit);
}

export async function getWorksList() {
  const firstPage = await getWorksPage(0);
  const contents = [...firstPage.contents];

  for (let offset = FETCH_LIMIT; offset < firstPage.totalCount; offset += FETCH_LIMIT) {
    const page = await getWorksPage(offset);
    contents.push(...page.contents);
  }

  return {
    ...firstPage,
    contents,
  };
}

export async function getFeaturedWorks(limit = 3) {
  const works = await getWorksList();
  return works.contents.slice(0, limit);
}

export async function getWorkDetail(id: string) {
  const client = getClient();

  return client.getListDetail<Work>({
    endpoint: WORKS_ENDPOINT,
    contentId: id,
  });
}
