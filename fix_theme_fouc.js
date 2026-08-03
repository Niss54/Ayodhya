const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\nisha\\OneDrive\\Documents\\Downloads\\Ayodhya';

const inlineThemeScriptPattern = /<!-- Dark mode detection: applies 'dark' class based on system preference -->\s*<script>\s*\(function\(\) \{\s*const mq = window\.matchMedia\('\(prefers-color-scheme: dark\)'\);\s*function applyTheme\(e\) \{\s*document\.documentElement\.classList\.toggle\('dark', e\.matches\);\s*\}\s*applyTheme\(mq\);\s*mq\.addEventListener\('change', applyTheme\);\s*\}\)\(\);\s*<\/script>/g;
const inlineThemeFallbackPattern = /<script>\s*\(function\(\) \{\s*const mq = window\.matchMedia\('\(prefers-color-scheme: dark\)'\);[\s\S]*?\}\)\(\);\s*<\/script>/g;

const oldNavScriptPattern = /<script src="\/navigation\.js"><\/script>\s*/g;

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
    
    // Check if file has the navigation script
    if (content.includes('navigation.js')) {
        let newContent = content;

        // 1. Delete the old nav script from wherever it is (usually bottom)
        newContent = newContent.replace(oldNavScriptPattern, '');

        // 2. Replace the inline theme script with the nav script
        let replaced = false;
        newContent = newContent.replace(inlineThemeScriptPattern, () => {
            replaced = true;
            return '<script src="/navigation.js"></script>';
        });

        // 2b. If exact match failed, try fallback regex
        if (!replaced) {
            newContent = newContent.replace(inlineThemeFallbackPattern, () => {
                replaced = true;
                return '<script src="/navigation.js"></script>';
            });
        }

        // 2c. If the inline script was completely missing, just insert navigation.js before </head>
        if (!replaced) {
            newContent = newContent.replace('</head>', '    <script src="/navigation.js"></script>\n</head>');
        }

        // Also clean up any leftover comments
        newContent = newContent.replace(/<!-- Dark mode detection: applies 'dark' class based on system preference -->\s*/g, '');

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            count++;
        }
    }
});

console.log(`Updated theme logic and navigation.js location in ${count} files.`);
