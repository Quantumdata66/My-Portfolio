export const getAssetPath = (path: string): string => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;

  // In production builds for GitHub Pages subpath /My-Portfolio
  const basePath = process.env.NODE_ENV === "production" ? "/My-Portfolio" : "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return `${basePath}${cleanPath}`;
};
