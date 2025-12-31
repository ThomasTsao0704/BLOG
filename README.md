這是一個以 Astro + Markdown 為核心的知識庫與內容管理網站。

# BLOG
=======
# 📚 個人知識整合平台
=======
﻿# 個人知識整合平台

這是一套以 Astro 建置的個人知識庫，聚焦於三大主題：股票分析、心理學洞察、技術文章。內容以 Markdown 驅動，結構清楚、可長期累積。

## 快速開始

```bash
npm install
npm run dev
```

開啟 `http://localhost:4321` 檢視網站。

## 專案結構（重點）

```
BLOG/
├─ src/
│  ├─ content/              # 內容集合（Markdown）
│  │  ├─ stocks/            # 股票分析
│  │  ├─ psychology/        # 心理文章
│  │  └─ tech/              # 技術文章
│  ├─ pages/                # 路由
│  │  ├─ stocks/
│  │  ├─ psychology/
│  │  └─ tech/
│  ├─ layouts/              # 共用版型
│  └─ components/           # 共用元件
└─ src/content/config.ts    # 內容結構定義
```

## Collections 命名與規範

以下結構以 `src/content/config.ts` 為準。

### 1/ `stocks`
- 位置：`src/content/stocks/`
- 用途：個股分析、投資筆記、市場觀察
- Frontmatter 欄位：

```yaml
---
title: 台積電
stockCode: 2330.TW          # 選填
category: 半導體
tags: [AI, 先進製程]         # 選填
price: 850                  # 選填
marketCap: 22000000         # 選填
pe: 28.5                    # 選填
dividend: 2.8               # 選填
sector: 半導體製造           # 選填
rating: 買入                # 選填：買入/持有/賣出/觀察
targetPrice: 900            # 選填
analysisDate: 2025-12-31    # 選填（日期）
---
```

### 2/ `psychology`
- 位置：`src/content/psychology/`
- 用途：心理學文章、人性洞察、長文論述
- Frontmatter 欄位：

```yaml
---
title: 為什麼正面思考不夠
description: 關於耗竭、責任感與樂觀的界線
date: 2025-01-01
tags: [心理, 社會]          # 選填
draft: false                # 選填，預設 false
---
```

### 3/ `tech`
- 位置：`src/content/tech/`
- 用途：技術文章、開發筆記、系列整理
- Frontmatter 欄位：

```yaml
---
title: Astro 內容集合實作
order: 1
tags: [Astro, Content]      # 選填
---
```

## URL 結構

- 首頁：`/`
- 列表頁：
  - `/stocks`
  - `/psychology`
  - `/tech`
- 內容頁：
  - `/stocks/<slug>`
  - `/psychology/<slug>`
  - `/tech/<slug>`

## Slug 策略

- Slug 來自檔名（或資料夾路徑），由 Astro Content Collections 自動產生。
- 範例：
  - `src/content/stocks/tsmc-2330.md` → `/stocks/tsmc-2330/`
- `stocks` 使用 catch-all 路由（`[...slug].astro`），可以支援巢狀路徑：
  - `src/content/stocks/semis/tsmc-2330.md` → `/stocks/semis/tsmc-2330/`
- `psychology`、`tech` 使用單層 slug（`[slug].astro`），建議不要再分子資料夾。

## 系統規範與行為規則

- `psychology`：`draft: true` 的內容不會出現在列表頁，也不會產生內容頁。
- 排序規則：
  - `stocks`：標題排序（`zh-TW`）
  - `psychology`：日期新到舊
  - `tech`：`order` 小到大
- 首頁顯示各集合「最新三筆」（依上述排序邏輯）。
- 標籤：
  - `tags` 只有在有值時顯示。
  - 首頁「熱門標籤」取三個集合合併後的前 8 名。
- 目錄（TOC）：
  - 心理與技術內容頁啟用。
  - 只有在標題數量 >= 3 且深度 <= 3 時顯示。
- 日期格式：
  - `date` / `analysisDate` 建議使用 `YYYY-MM-DD`。
- 評級限制：
  - `rating` 僅接受「買入／持有／賣出／觀察」。
- 搜尋：
  - `SearchBox` 目前為 UI 佔位，尚未接上搜尋引擎（可再接 Pagefind）。


\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ThomasTsao0704/BLOG.git
git push -u origin main
\`\`\`

### 3. 設定 GitHub Pages

1. 前往 GitHub Repository 的 **Settings** > **Pages**
2. 在 **Source** 選擇 **GitHub Actions**
3. Push 到 main 分支後會自動觸發部署

### 4. 訪問網站

部署完成後，網站將在以下網址可用：
\`https://YOUR-USERNAME.github.io/BLOG/\`

## 🛠️ 技術棧

- [Astro](https://astro.build/) - 靜態網站生成器
- [Markdown](https://www.markdownguide.org/) - 內容撰寫
- GitHub Pages - 免費靜態網站託管
- GitHub Actions - 自動化部署

## 📄 授權

MIT License

## 🙏 致謝

感謝所有開源專案的貢獻者！

=======
## 開發建議

- 內容維護只需編輯 `src/content/**`。
- 如果要新增主題集合，需同步更新：
  - `src/content/config.ts`
  - `src/pages/` 對應列表與內容頁

