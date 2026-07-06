import { createWriteStream } from "node:fs";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { ZipArchive } from "archiver";

const outDir = path.resolve("out");
const downloadsDir = path.resolve("public/downloads");
const zipPath = path.join(downloadsDir, "portfolio-static-export.zip");

await mkdir(downloadsDir, { recursive: true });

await new Promise((resolve, reject) => {
  const output = createWriteStream(zipPath);
  const archive = new ZipArchive({ zlib: { level: 9 } });

  output.on("close", resolve);
  archive.on("error", reject);
  archive.pipe(output);
  archive.directory(outDir, false);
  archive.finalize();
});

console.log(`Packaged ${outDir} -> ${zipPath}`);
