# portforio

Astro + microCMS + Cloudflare Pages を前提にした、`stamefusa.jp` 用のポートフォリオサイトです。

## セットアップ

1. 依存関係をインストールします。

```bash
npm install
```

2. `.env.example` をもとに `.env` を作成し、microCMS の値を設定します。

```env
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

3. 開発サーバーを起動します。

```bash
npm run dev
```

## スクリプト

- `npm run dev`: Astro 開発サーバー
- `npm run build`: 本番ビルド
- `npm run preview`: ビルド結果のローカル確認
- `npm run check`: Astro の型チェック

## ルーティング

- `/`
- `/about`
- `/blog`
- `/blog/[slug]`

すべてビルド時に生成される静的ページです。

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Environment Variables:
  - `MICROCMS_SERVICE_DOMAIN`
  - `MICROCMS_API_KEY`

## microCMS 連携

- `src/lib/microcms.ts` で `blog` エンドポイントからデータを取得します
- クライアントサイド fetch は行わず、すべて Astro のビルド時に取得します
- `src/pages/blog/[slug].astro` の `getStaticPaths()` で記事詳細ページを静的生成します

## Webhook 運用

microCMS 側で Cloudflare Pages の Deploy Hook を設定し、以下のイベントで再ビルドする想定です。

- `publish`
- `update`
- `delete`

## 今回の実装に含めていないもの

- SEO の詳細設定
- sitemap
- OGP
- draft preview
- アナリティクス再導入
