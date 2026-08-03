const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\nisha\\OneDrive\\Documents\\Downloads\\Ayodhya';

const targetPattern1 = /<meta property="og:image" content="https:\/\/lh3\.googleusercontent\.com[^"]*">/g;
const targetPattern2 = /<meta name="twitter:image" content="https:\/\/lh3\.googleusercontent\.com[^"]*">/g;
const targetPattern3 = /"image": "https:\/\/lh3\.googleusercontent\.com[^"]*"/g;

const replacement1 = '<meta property="og:image" content="https://mahakaltourstravel.in/public/og-cover.jpg">';
const replacement2 = '<meta name="twitter:image" content="https://mahakaltourstravel.in/public/og-cover.jpg">';
const replacement3 = '"image": "https://mahakaltourstravel.in/public/og-cover.jpg"';

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
    
    let newContent = content.replace(targetPattern1, replacement1)
                            .replace(targetPattern2, replacement2)
                            .replace(targetPattern3, replacement3);

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        count++;
    }
});

console.log(`Updated external meta images in ${count} files.`);
