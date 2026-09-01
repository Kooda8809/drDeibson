import fs from 'fs';
import jpeg from 'jpeg-js';
import { PNG } from 'pngjs';

// Read chroma key image
const jpegData = fs.readFileSync('public/assets/dr-deibson-logo-chroma.jpg');
const rawImageData = jpeg.decode(jpegData, { useTArray: true });

const width = rawImageData.width;
const height = rawImageData.height;
const png = new PNG({ width, height });

// Bounding box discovery
let minX = width, maxX = 0, minY = height, maxY = 0;

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (width * y + x) * 4;
    const r = rawImageData.data[idx];
    const g = rawImageData.data[idx + 1];
    const b = rawImageData.data[idx + 2];

    // Chroma key detection: green background
    // If green is significantly higher than red and blue, it's green screen
    const isGreen = (g > 100 && g > r * 1.35 && g > b * 1.35);
    
    // Also compute luminance for white text & tooth lines
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    const isWhiteText = (r > 150 && g > 150 && b > 150) || (Math.abs(r - g) < 30 && Math.abs(g - b) < 30 && luminance > 120);

    if (isGreen && !isWhiteText) {
      png.data[idx] = 255;
      png.data[idx + 1] = 255;
      png.data[idx + 2] = 255;
      png.data[idx + 3] = 0; // Fully transparent
    } else {
      // It's the white text / signature
      const alpha = Math.min(255, Math.max(0, (luminance - 40) * 1.8));
      png.data[idx] = 255;
      png.data[idx + 1] = 255;
      png.data[idx + 2] = 255;
      png.data[idx + 3] = alpha > 30 ? 255 : 0;

      if (alpha > 30) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
}

// Write full transparent image
const buffer = PNG.sync.write(png);
fs.writeFileSync('public/assets/dr-deibson-logo-transparent.png', buffer);
console.log('Saved transparent logo:', width, 'x', height, 'Bounding box:', { minX, maxX, minY, maxY });

// Also create a cropped version with tight padding
if (maxX > minX && maxY > minY) {
  const pad = 20;
  const cropX = Math.max(0, minX - pad);
  const cropY = Math.max(0, minY - pad);
  const cropW = Math.min(width - cropX, maxX - minX + pad * 2);
  const cropH = Math.min(height - cropY, maxY - minY + pad * 2);

  const croppedPng = new PNG({ width: cropW, height: cropH });
  png.bitblt(croppedPng, cropX, cropY, cropW, cropH, 0, 0);

  const cropBuffer = PNG.sync.write(croppedPng);
  fs.writeFileSync('public/assets/dr-deibson-logo-cropped.png', cropBuffer);
  console.log('Saved cropped transparent logo:', cropW, 'x', cropH);
}
