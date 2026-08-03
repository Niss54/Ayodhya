const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = 'c:\\Users\\nisha\\OneDrive\\Documents\\Downloads\\Ayodhya\\public';

const imagesToConvert = [
    { src: 'dark hero section.png', dest: 'dark-hero.webp' },
    { src: 'light herosection.png', dest: 'light-hero.webp' },
    { src: 'pawan.png', dest: 'pawan.webp' },
    { src: 'budget1.png', dest: 'budget1.webp' },
    { src: 'budget2.png', dest: 'budget2.webp' }
];

async function convertImages() {
    for (let img of imagesToConvert) {
        const srcPath = path.join(publicDir, img.src);
        const destPath = path.join(publicDir, img.dest);
        
        if (fs.existsSync(srcPath)) {
            try {
                console.log(`Converting ${img.src} to ${img.dest}...`);
                await sharp(srcPath)
                    .webp({ quality: 80 }) // 80% quality for good compression
                    .toFile(destPath);
                console.log(`Successfully converted ${img.dest}`);
            } catch (err) {
                console.error(`Error converting ${img.src}:`, err);
            }
        } else {
            console.log(`File not found: ${srcPath}`);
        }
    }
}

convertImages();
