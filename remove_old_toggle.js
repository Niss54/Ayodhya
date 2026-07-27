const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\nisha\\OneDrive\\Documents\\Downloads\\Ayodhya';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        // Exclude specific directories to speed up and avoid unintended changes
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

let modifiedFiles = 0;

walkDir(rootDir, (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Regex to match the lang-toggle-btn and everything inside it up to </button>
    // We use [\s\S]*? to match across newlines lazily
    let newContent = content.replace(/<button[^>]*class="lang-toggle-btn[^>]*>[\s\S]*?<\/button>/gi, '');
    
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        modifiedFiles++;
        console.log('Removed old toggle from:', filePath);
    }
});

console.log('\nTotal files updated:', modifiedFiles);
