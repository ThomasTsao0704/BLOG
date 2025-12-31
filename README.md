# 個人知識整合平台

這是一個以 Astro + Markdown 為核心的知識庫與內容管理網站。

# BLOG
=======
# 📚 個人知識整合平台

一個基於 Astro 建立的靜態部落格，整合股票分析、心理學文章與技術筆記。

## ✨ 特色

- 📈 **股票分析** - 個股深度分析、財務數據與投資策略
- 🧠 **心理學洞察** - 心理學文章、人性探索與自我成長
- 💻 **技術分享** - 程式開發經驗與技術學習筆記
- 🎨 **優雅設計** - 簡潔美觀的介面設計
- 🏷️ **標籤系統** - 便於分類與搜尋
- 📱 **響應式** - 完美適配各種裝置

## 🚀 快速開始

### 本地開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 訪問 http://localhost:4321
```

### 建置專案

```bash
# 建置靜態網站
npm run build

# 預覽建置結果
npm run preview
```

## 📂 專案結構

```
BLOG/
├── src/
│   ├── content/          # 內容集合
│   │   ├── stocks/       # 股票分析文章
│   │   ├── psychology/   # 心理學文章
│   │   └── tech/         # 技術文章
│   ├── layouts/          # 版面配置
│   ├── components/       # 可重用組件
│   └── pages/            # 頁面路由
│       ├── stocks/       # 股票頁面
│       ├── psychology/   # 心理頁面
│       └── tech/         # 技術頁面
├── public/               # 靜態資源
└── astro.config.mjs      # Astro 配置
```

## 📝 撰寫文章

### 股票分析

在 `src/content/stocks/` 建立 Markdown 檔案：

\`\`\`markdown
---
title: 台積電
stockCode: 2330.TW
category: 半導體
tags: [晶圓代工, AI晶片]
price: 850
pe: 28.5
dividend: 2.8
rating: 持有
targetPrice: 900
analysisDate: 2025-12-31
---

## 投資亮點

內容...
\`\`\`

### 心理學文章

在 `src/content/psychology/` 建立 Markdown 檔案：

\`\`\`markdown
---
title: 文章標題
description: 文章描述
date: 2025-12-31
tags: [心理學, 成長]
draft: false
---

文章內容...
\`\`\`

### 技術文章

在 `src/content/tech/` 建立 Markdown 檔案：

\`\`\`markdown
---
title: 技術文章標題
order: 1
tags: [JavaScript, Astro]
---

文章內容...
\`\`\`

## 🌐 部署到 GitHub Pages

### 1. 更新配置

編輯 `astro.config.mjs`，將 `YOUR-USERNAME` 替換為您的 GitHub 用戶名：

\`\`\`javascript
export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  base: '/BLOG',
});
\`\`\`

### 2. 建立 GitHub Repository

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

