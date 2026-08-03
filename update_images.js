const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\nisha\\OneDrive\\Documents\\Downloads\\Ayodhya';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (f === '.git' || f === 'node_modules' || f === 'public' || f === 'Build') return;
        if (fs.statSync(dirPath).isDirectory()) {
            walkDir(dirPath, callback);
        } else {
            if (dirPath.endsWith('.html')) {
                callback(dirPath);
            }
        }
    });
}

let count = 0;
walkDir(rootDir, (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;

    // 1. Replace light herosection
    newContent = newContent.replace(
        /<img class="([^"]*hero-img-light[^"]*)" src="\/public\/light%20herosection\.png"([^>]*)>/g, 
        '<img class="$1" src="/public/light-hero.webp" fetchpriority="high" width="1920" height="1080"$2>'
    );
    // Alternate format if encoded differently
    newContent = newContent.replace(
        /<img class="([^"]*hero-img-light[^"]*)" src="\/public\/light herosection\.png"([^>]*)>/g, 
        '<img class="$1" src="/public/light-hero.webp" fetchpriority="high" width="1920" height="1080"$2>'
    );

    // 2. Replace dark herosection
    newContent = newContent.replace(
        /<img class="([^"]*hero-img-dark[^"]*)" src="\/public\/dark%20hero%20section\.png"([^>]*)>/g, 
        '<img class="$1" src="/public/dark-hero.webp" fetchpriority="high" width="1920" height="1080"$2>'
    );
    // Alternate format
    newContent = newContent.replace(
        /<img class="([^"]*hero-img-dark[^"]*)" src="\/public\/dark hero section\.png"([^>]*)>/g, 
        '<img class="$1" src="/public/dark-hero.webp" fetchpriority="high" width="1920" height="1080"$2>'
    );

    // 3. Replace pawan.png
    newContent = newContent.replace(/\/public\/pawan\.png/g, '/public/pawan.webp');

    // 4. Replace budget1.png
    newContent = newContent.replace(/\/public\/budget1\.png/g, '/public/budget1.webp');

    // 5. Replace budget2.png
    newContent = newContent.replace(/\/public\/budget2\.png/g, '/public/budget2.webp');

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        count++;
    }
});

console.log(`Updated images in ${count} files.`);
