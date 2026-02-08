type VisibilityData = {
  status?: "draft" | "published" | "archived";
  draft?: boolean;
  publishDate?: Date;
};

export const isVisible = ({ data }: { data: VisibilityData }) => {
  if (data.status && data.status !== "published") return false;
  if (data.draft === true) return false;
  if (data.publishDate && data.publishDate > new Date()) return false;
  return true;
};
