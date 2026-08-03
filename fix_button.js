const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\nisha\\OneDrive\\Documents\\Downloads\\Ayodhya';

const targetPattern = /<button class="bg-primary text-on-primary px-6 py-2 rounded-full font-label-caps text-label-caps hover:shadow-lg transition-shadow shimmer-bg">Plan Your Visit<\/button>/g;
const replacement = '<a href="/contact/" class="bg-primary text-on-primary px-6 py-2 rounded-full font-label-caps text-label-caps hover:shadow-lg transition-shadow shimmer-bg flex items-center justify-center">Plan Your Visit</a>';

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
    
    // Fallback if there are slight whitespace variations
    if (newContent === content) {
        const flexiblePattern = /<button[^>]*class="[^"]*Plan Your Visit[^"]*"[^>]*>\s*Plan Your Visit\s*<\/button>/gi;
        // The one in the HTML is just `<button class="...">Plan Your Visit</button>`
        const flexPattern2 = /<button([^>]*)>Plan Your Visit<\/button>/g;
        
        newContent = newContent.replace(flexPattern2, (match, p1) => {
            if (p1.includes('bg-primary') && p1.includes('text-on-primary')) {
                return `<a href="/contact/"${p1} flex items-center justify-center">Plan Your Visit</a>`;
            }
            return match;
        });
    }

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        count++;
    }
});

console.log(`Updated 'Plan Your Visit' button to <a> link in ${count} files.`);
