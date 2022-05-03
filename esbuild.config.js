import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import htmlPlugin from "@chialab/esbuild-plugin-html";

await esbuild
  .build(
    {
      entryPoints: ["./src/index.tsx"],
      // entryNames: "[ext]-[hash]",
      outdir: "public",
      bundle: true,
      watch: {
        onRebuild(error, result) {
          if (error) console.error("watch build failed:", error);
          else console.log("watch build succeeded:");
        },
      },
      loader: { ".js": "jsx" },
      minify: true,
      format: "esm",
      splitting: true,
      sourcemap: true,
      target: ["chrome58", "firefox57", "safari11", "edge16"],
      plugins: [sassPlugin(), htmlPlugin()],
    },
    {
      loader: "css",
      minify: false,
    }
  )

  .then(() => console.log("⚡ Build complete! ⚡"))
  .catch((err) => {
    if (err) {
      process.exit(1);
    }
  });
