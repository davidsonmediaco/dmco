import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'client', 'public', 'images', 'portraits', 'laura 4.png');
const outputPath = path.join(__dirname, 'client', 'public', 'images', 'portraits', 'laura-4-optimized.webp');

sharp(inputPath)
  .resize(1920, null, { // Resize to max width of 1920px, maintain aspect ratio
    withoutEnlargement: true
  })
  .webp({ 
    quality: 80,
    effort: 6
  })
  .toFile(outputPath)
  .then(() => {
    console.log('Image optimized successfully!');
  })
  .catch(err => {
    console.error('Error optimizing image:', err);
  }); 