const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\nisha\\OneDrive\\Documents\\Downloads\\Ayodhya';

const oldFontLinkPattern = /<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Inter:wght@400;500;600;700&amp;family=Playfair\+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Libre\+Caslon\+Text:ital,wght@0,400;0,700;1,400&amp;display=swap" rel="stylesheet"\/?>/g;
// also match unencoded '&' and without Playfair if it exists
const fallbackFontPattern = /<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Inter[^"]*" rel="stylesheet"\/?>/g;

const newFontLinks = `<!-- Preload Critical Fonts -->
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&display=swap">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">`;

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
    
    // Replace the font link
    let newContent = content.replace(fallbackFontPattern, newFontLinks);

    // Also remove inline Playfair Display from any element
    newContent = newContent.replace(/font-family:\s*'Playfair Display',\s*serif;?/g, '');

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        count++;
    }
});

console.log(`Updated fonts in ${count} files.`);
