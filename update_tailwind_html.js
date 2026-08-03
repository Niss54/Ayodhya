const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\nisha\\OneDrive\\Documents\\Downloads\\Ayodhya';

const cdnScriptPattern = /<script src="https:\/\/cdn\.tailwindcss\.com[^>]*><\/script>\s*/g;
const configScriptPattern = /<!-- Tailwind Config injected from system prompt -->\s*<script id="tailwind-config">[\s\S]*?<\/script>\s*/g;
const stylesheetLink = '<link href="/dist/styles.css" rel="stylesheet">\n';

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
    
    // First check if the CDN exists
    if (content.includes('cdn.tailwindcss.com')) {
        let newContent = content.replace(cdnScriptPattern, stylesheetLink);
        newContent = newContent.replace(configScriptPattern, '');
        
        // Sometimes the comment isn't there, so fallback pattern for the script
        const fallbackConfigPattern = /<script id="tailwind-config">[\s\S]*?<\/script>\s*/g;
        newContent = newContent.replace(fallbackConfigPattern, '');

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            count++;
        }
    }
});

console.log(`Updated Tailwind setup in ${count} files.`);
