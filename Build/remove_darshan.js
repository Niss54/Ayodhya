const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\nisha\\OneDrive\\Documents\\Downloads\\Ayodhya\\Build';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

let modifiedFiles = [];

walkDir(rootDir, function(filePath) {
    if (filePath.endsWith('.html')) {
        let content = fs.readFileSync(filePath, 'utf8');
        // Match <a ...>Darshan</a> and remove the entire line if it's on its own line
        let newContent = content.replace(/.*<a[^>]*>Darshan<\/a>.*\n?/g, '');
        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            modifiedFiles.push(filePath);
        }
    }
});

console.log("Modified files:", modifiedFiles);
