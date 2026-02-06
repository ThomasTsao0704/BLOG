import { promises as fs } from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);

const usage = `
Usage:
  node scripts/create-content.mjs <collection> <slug> [options]

Collections:
  stocks | psychology | tech

Options:
  --title "Title"
  --category "Category"
  --description "Short description"         (psychology)
  --date "YYYY-MM-DD"                       (psychology)
  --tags "tag1,tag2"
  --order 3                                 (tech)
  --draft true|false                        (psychology)
  --stockCode "2330.TW"                     (stocks)
  --analysisDate "YYYY-MM-DD"               (stocks)
`;

const parseArgs = (input) => {
  const positional = [];
  const options = {};
  for (let i = 0; i < input.length; i += 1) {
    const value = input[i];
    if (value.startsWith("--")) {
      const key = value.slice(2);
      const next = input[i + 1];
      if (!next || next.startsWith("--")) {
        options[key] = true;
      } else {
        options[key] = next;
        i += 1;
      }
    } else {
      positional.push(value);
    }
  }
  return { positional, options };
};

const { positional, options } = parseArgs(args);
const [collection, rawSlug] = positional;

if (!collection || !rawSlug) {
  console.error(usage.trim());
  process.exit(1);
}

const supported = new Set(["stocks", "psychology", "tech"]);
if (!supported.has(collection)) {
  console.error(`Unknown collection: ${collection}`);
  console.error(usage.trim());
  process.exit(1);
}

const slug = rawSlug.replace(/\\/g, "/").replace(/^\/+|\/+$/g, "");
const baseDir = path.resolve("src", "content", collection);
const filePath = path.resolve(baseDir, `${slug}.md`);

const ensureDir = async () => {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
};

const fileExists = async (target) => {
  try {
    await fs.access(target);
    return true;
  } catch {
    return false;
  }
};

const today = new Date().toISOString().slice(0, 10);

const toTitle = (value) =>
  value
    .split("/")
    .pop()
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

const parseTags = (value) => {
  if (!value) return null;
  const tags = value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
  return tags.length ? tags : null;
};

const readTechOrder = async () => {
  try {
    const files = await fs.readdir(baseDir);
    const orders = [];
    for (const file of files) {
      if (!file.endsWith(".md")) continue;
      const content = await fs.readFile(path.join(baseDir, file), "utf8");
      const match = content.match(/^order:\s*(\d+)/m);
      if (match) orders.push(Number(match[1]));
    }
    if (!orders.length) return 1;
    return Math.max(...orders) + 1;
  } catch {
    return 1;
  }
};

const createFrontmatter = async () => {
  const title = options.title ?? toTitle(slug);
  const tags = parseTags(options.tags);
  const category = options.category;

  if (collection === "stocks") {
    const analysisDate = options.analysisDate ?? today;
    return [
      "---",
      `title: ${title}`,
      options.stockCode ? `stockCode: ${options.stockCode}` : null,
      `category: ${category ?? "Uncategorized"}`,
      tags ? `tags: [${tags.join(", ")}]` : null,
      analysisDate ? `analysisDate: ${analysisDate}` : null,
      "---",
      "",
    ]
      .filter(Boolean)
      .join("\n");
  }

  if (collection === "psychology") {
    const description = options.description ?? "TODO";
    const date = options.date ?? today;
    const draft = options.draft ?? "false";
    return [
      "---",
      `title: ${title}`,
      `description: ${description}`,
      `date: ${date}`,
      category ? `category: ${category}` : null,
      tags ? `tags: [${tags.join(", ")}]` : null,
      `draft: ${draft}`,
      "---",
      "",
    ]
      .filter(Boolean)
      .join("\n");
  }

  const order = options.order ? Number(options.order) : await readTechOrder();
  return [
    "---",
    `title: ${title}`,
    `order: ${Number.isFinite(order) ? order : 1}`,
    category ? `category: ${category}` : null,
    tags ? `tags: [${tags.join(", ")}]` : null,
    "---",
    "",
  ]
    .filter(Boolean)
    .join("\n");
};

const createBody = () => {
  return [
    "## Summary",
    "",
    "TODO",
    "",
    "## Notes",
    "",
    "TODO",
    "",
  ].join("\n");
};

const run = async () => {
  if (await fileExists(filePath)) {
    console.error(`File already exists: ${filePath}`);
    process.exit(1);
  }

  await ensureDir();
  const frontmatter = await createFrontmatter();
  const body = createBody();

  await fs.writeFile(filePath, `${frontmatter}${body}`, "utf8");
  console.log(`Created: ${filePath}`);
};

run();
