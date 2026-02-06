import { defineCollection, z } from "astro:content";

export const collections = {
  // 股票：個股分析與投資筆記
  stocks: defineCollection({
    schema: z.object({
      title: z.string(), // 股票名稱
      stockCode: z.string().optional(), // 股票代碼，例如：2330.TW
      category: z.string(), // 分類：產業類別
      tags: z.array(z.string()).optional(),
      // 個股基本資料
      price: z.number().optional(), // 當前價格
      marketCap: z.number().optional(), // 市值
      pe: z.number().optional(), // 本益比
      dividend: z.number().optional(), // 股息
      sector: z.string().optional(), // 產業類別
      // 分析資料
      rating: z.enum(['買入', '持有', '賣出', '觀察']).optional(), // 評級
      targetPrice: z.number().optional(), // 目標價
      analysisDate: z.date().optional(), // 分析日期
    }),
  }),
  // 心理：心理學文章與深度思考
  psychology: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
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
      category: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
  }),
};
