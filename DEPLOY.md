# 🚀 GitHub Pages 部署指南

## 📋 部署前準備

### 1. 更新 Astro 配置

編輯 `astro.config.mjs`，將 `YOUR-USERNAME` 替換為您的 **GitHub 用戶名**：

```javascript
export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  base: '/BLOG',  // 如果您的 repository 名稱不是 BLOG，請修改這裡
  output: 'static',
  build: {
    format: 'directory'
  }
});
```

### 2. 測試本地建置

在推送到 GitHub 之前，先確認本地建置沒有問題：

```bash
npm run build
```

如果建置成功，會在 `dist/` 資料夾產生靜態檔案。

## 📦 部署步驟

### 步驟 1：建立 GitHub Repository

1. 登入 [GitHub](https://github.com)
2. 點擊右上角的 **+** > **New repository**
3. Repository 名稱填入：`BLOG`（或其他名稱）
4. 選擇 **Public**（GitHub Pages 免費版需要 public repository）
5. **不要**勾選任何初始化選項（README、.gitignore、license）
6. 點擊 **Create repository**

### 步驟 2：初始化 Git 並推送

在專案資料夾中執行：

```bash
# 初始化 git
git init

# 添加所有檔案
git add .

# 建立第一個 commit
git commit -m "Initial commit: 個人知識整合平台"

# 設定主分支為 main
git branch -M main

# 連結到 GitHub（替換 YOUR-USERNAME 和 BLOG）
git remote add origin https://github.com/YOUR-USERNAME/BLOG.git

# 推送到 GitHub
git push -u origin main
```

### 步驟 3：啟用 GitHub Pages

1. 前往您的 GitHub Repository
2. 點擊 **Settings** 標籤
3. 左側選單找到 **Pages**
4. 在 **Build and deployment** > **Source** 下拉選單中
5. 選擇 **GitHub Actions**（不是 Deploy from a branch）
6. 完成！

### 步驟 4：等待部署完成

1. 回到 repository 首頁
2. 點擊 **Actions** 標籤
3. 您會看到第一次的部署工作流程正在執行
4. 等待綠色勾勾 ✅ 出現（通常需要 1-3 分鐘）
5. 部署成功後，訪問：`https://YOUR-USERNAME.github.io/BLOG/`

## 🔄 後續更新

每次修改內容後：

```bash
# 添加修改的檔案
git add .

# 建立 commit
git commit -m "更新：描述您的修改"

# 推送到 GitHub
git push
```

推送後，GitHub Actions 會自動觸發重新部署，約 1-3 分鐘後網站就會更新。

## ✅ 檢查清單

部署前請確認：

- [ ] 已將 `astro.config.mjs` 中的 `YOUR-USERNAME` 改為您的 GitHub 用戶名
- [ ] 已將 `base` 設定為您的 repository 名稱（如果不是 BLOG 的話）
- [ ] 已成功執行 `npm run build` 無錯誤
- [ ] 已建立 GitHub repository
- [ ] 已推送代碼到 GitHub
- [ ] 已在 GitHub Settings > Pages 啟用 GitHub Actions
- [ ] 第一次部署已成功（Actions 頁面顯示綠色勾勾）

## 🐛 常見問題

### Q: 網站顯示 404 Not Found

**A:** 檢查以下項目：
1. `astro.config.mjs` 中的 `base` 是否與 repository 名稱一致
2. GitHub Pages 是否已啟用
3. 部署是否成功完成（檢查 Actions 頁面）
4. 等待 5-10 分鐘讓 GitHub Pages 生效

### Q: 樣式或圖片無法載入

**A:** 確認 `astro.config.mjs` 中：
- `site` 網址正確
- `base` 路徑正確（要加上前導斜線 `/`）

### Q: 部署失敗

**A:** 檢查 Actions 頁面的錯誤訊息：
1. 可能是 Node.js 版本問題
2. 可能是依賴套件安裝失敗
3. 檢查 `.github/workflows/deploy.yml` 設定是否正確

### Q: 想使用自訂網域

**A:**
1. 在 repository 根目錄建立 `public/CNAME` 檔案
2. 內容填入您的網域：`example.com`
3. 在您的網域 DNS 設定中添加 CNAME 記錄指向 `YOUR-USERNAME.github.io`
4. 詳細步驟參考：https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site

## 📚 參考資源

- [Astro 文件](https://docs.astro.build/)
- [GitHub Pages 文件](https://docs.github.com/pages)
- [GitHub Actions 文件](https://docs.github.com/actions)

## 🎉 恭喜！

您的網站已成功部署到 GitHub Pages！

網址：`https://YOUR-USERNAME.github.io/BLOG/`
