import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
  const base =
    mode === "production" && repoName ? `/${repoName}/` : "/";

  return {
    plugins: [react()],
    base,
  };
});
