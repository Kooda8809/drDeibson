import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function convertFolder(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await convertFolder(fullPath);
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      const ext = path.extname(entry.name);
      const base = path.basename(entry.name, ext);
      const avifPath = path.join(dir, `${base}.avif`);

      console.log(`Converting ${entry.name} -> ${base}.avif...`);
      const originalStats = fs.statSync(fullPath);

      await sharp(fullPath)
        .avif({ quality: 85, effort: 6, chromaSubsampling: '4:4:4' })
        .toFile(avifPath);

      const avifStats = fs.statSync(avifPath);
      const savedPercent = ((1 - avifStats.size / originalStats.size) * 100).toFixed(1);
      console.log(`  Original: ${(originalStats.size / 1024).toFixed(0)}KB -> AVIF: ${(avifStats.size / 1024).toFixed(0)}KB (${savedPercent}% saved)`);
    }
  }
}

async function run() {
  const assetsDir = path.join(__dirname, 'public', 'assets');
  console.log(`Starting AVIF conversion in: ${assetsDir}`);
  await convertFolder(assetsDir);
  console.log('Conversion complete!');
}

run().catch(console.error);
