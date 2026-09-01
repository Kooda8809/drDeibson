import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateFavicons() {
  const sourcePath = path.join(__dirname, 'FavCon icon.jpeg');
  const publicDir = path.join(__dirname, 'public');

  if (!fs.existsSync(sourcePath)) {
    console.error('Source favicon not found:', sourcePath);
    return;
  }

  const meta = await sharp(sourcePath).metadata();
  console.log('Source Image:', meta.width, 'x', meta.height, meta.format);

  const size = Math.min(meta.width, meta.height);
  const left = Math.floor((meta.width - size) / 2);
  const top = Math.floor((meta.height - size) / 2);

  const squareBuffer = await sharp(sourcePath)
    .extract({ left, top, width: size, height: size })
    .toBuffer();

  // 16x16
  await sharp(squareBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'));

  // 32x32
  await sharp(squareBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));

  // 48x48 (standard favicon.ico)
  await sharp(squareBuffer)
    .resize(48, 48)
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));

  // 64x64 favicon.png
  await sharp(squareBuffer)
    .resize(64, 64)
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));

  // 180x180 Apple Touch Icon
  await sharp(squareBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // 192x192 Android Chrome
  await sharp(squareBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'android-chrome-192x192.png'));

  // 512x512 Android Chrome
  await sharp(squareBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'android-chrome-512x512.png'));

  // Also clean up temp file if exists
  const tempFile = path.join(publicDir, 'favicon-square-512.png');
  if (fs.existsSync(tempFile)) {
    fs.unlinkSync(tempFile);
  }

  console.log('All favicon formats generated cleanly in /public!');
}

generateFavicons().catch(console.error);
