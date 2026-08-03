const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\nisha\\OneDrive\\Documents\\Downloads\\Ayodhya';

const targetPattern = /<meta content="width=device-width, initial-scale=1\.0, maximum-scale=1\.0, user-scalable=no" name="viewport"\s*\/?>/g;
const replacement = '<meta content="width=device-width, initial-scale=1.0" name="viewport"/>';

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
    
    let newContent = content.replace(targetPattern, replacement);

    // Some files might have the attributes ordered differently
    if (newContent === content) {
        const flexiblePattern = /<meta[^>]*viewport[^>]*user-scalable=no[^>]*>/gi;
        newContent = newContent.replace(flexiblePattern, replacement);
    }

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        count++;
    }
});

console.log(`Updated viewport meta tag in ${count} files.`);
