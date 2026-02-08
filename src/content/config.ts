import { defineCollection, z } from "astro:content";

export const collections = {
  // 股票：個股分析與投資筆記
  stocks: defineCollection({
    schema: z.object({
      title: z.string(), // 股票名稱
      status: z.enum(['draft', 'published', 'archived']).default('published'),
      publishDate: z.date().optional(),
      internal: z.boolean().default(false),
      // 兼容既有欄位
      stockCode: z.string().optional(), // 股票代碼，例如：2330.TW
      category: z.string().optional(), // 分類：產業類別
      tags: z.array(z.string()).optional(),
      price: z.number().optional(), // 當前價格
      marketCap: z.number().optional(), // 市值
      pe: z.number().optional(), // 本益比
      dividend: z.number().optional(), // 股息
      sector: z.string().optional(), // 產業大類
      // 新版欄位
      ticker: z.string().optional(), // 股票代碼（不含交易所）
      exchange: z.string().optional(), // 交易所（TWSE / TPEX / NASDAQ）
      isin: z.string().optional(), // 國際證券識別碼
      industry: z.string().optional(), // 細分產業
      rating: z.enum(['買進', '持有', '觀望', '減碼']).optional(), // 評級
      conviction: z.enum(['高', '中', '低']).optional(), // 研究信心
      riskLevel: z.enum(['高', '中', '低']).optional(), // 風險等級
      targetPrice: z.number().optional(), // 目標價
      valuationMethod: z.string().optional(), // 估值方法
      timeHorizon: z.enum(['短期', '中期', '長期']).optional(), // 投資時間軸
      analysisDate: z.date().optional(), // 分析日期
      lastUpdate: z.date().optional(), // 最近更新
      peRatio: z.number().optional(), // 本益比 (P/E)
      pbRatio: z.number().optional(), // 股價淨值比 (P/B)
      dividendYield: z.number().optional(), // 股息殖利率
      revenueGrowthYoY: z.number().optional(), // 營收年增率 %
      epsGrowthYoY: z.number().optional(), // EPS 年增率 %
      grossMargin: z.number().optional(), // 毛利率 %
      operatingMargin: z.number().optional(), // 營業利益率 %
      roe: z.number().optional(), // 股東權益報酬率 %
      freeCashFlow: z.number().optional(), // 自由現金流
      moat: z.array(z.string()).optional(), // 競爭護城河
      bullCase: z.string().optional(), // 最樂觀情境
      bearCase: z.string().optional(), // 最悲觀情境
      thesis: z.string().optional(), // 核心投資論點
      competitors: z.array(z.string()).optional(), // 主要競爭對手
      decisionLog: z
        .array(
          z.object({
            date: z.date().optional(),
            action: z
              .enum(['觀察', '買進', '加碼', '減碼', '停利', '停損'])
              .optional(),
            price: z.number().optional(),
            reason: z.string().optional(),
          })
        )
        .optional(),
    }),
  }),
  // 心理：心理學文章與深度思考
  psychology: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      status: z.enum(['draft', 'published', 'archived']).default('published'),
      publishDate: z.date().optional(),
      internal: z.boolean().default(false),
      category: z.string().optional(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().default(false),
    }),
  }),
  // 技術：技術文章系列
  tech: defineCollection({
    schema: z.object({
      title: z.string(),
      order: z.number(),
      status: z.enum(['draft', 'published', 'archived']).default('published'),
      publishDate: z.date().optional(),
      internal: z.boolean().default(false),
      category: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
  }),
};
