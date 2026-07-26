const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\nisha\\OneDrive\\Documents\\Downloads\\Ayodhya\\Build';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
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

walkDir(rootDir, function(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace w-[95%] with w-[95%] lg:w-[85%] max-w-[1024px]
    // Let's replace `w-[95%]` inside `<header` or `<nav` classes if it's the fixed top bar
    
    let newContent = content.replace(/(<header[^>]*?class="[^"]*?fixed top-0[^"]*?w-\[95%\])([^"]*?max-w-[^"]*?)(")/g, (match, p1, p2, p3) => {
        return p1.replace('w-[95%]', 'w-[92%] lg:w-[80%]') + p2.replace(/max-w-[^\s"]+/, 'max-w-[1100px]') + p3;
    });

    newContent = newContent.replace(/(<nav[^>]*?class="[^"]*?fixed top-0[^"]*?w-\[95%\])([^"]*?max-w-[^"]*?)(")/g, (match, p1, p2, p3) => {
        return p1.replace('w-[95%]', 'w-[92%] lg:w-[80%]') + p2.replace(/max-w-[^\s"]+/, 'max-w-[1100px]') + p3;
    });

    // Handle cases where max-w is not present or in a different order
    newContent = newContent.replace(/(class="[^"]*?hidden md:flex fixed top-0[^"]*?)w-\[95%\]([^"]*?")/gi, (match, p1, p2) => {
        // If max-w wasn't replaced above
        if (match.includes('max-w-')) {
            return match.replace('w-[95%]', 'w-[92%] lg:w-[80%]').replace(/max-w-[a-zA-Z0-9\[\]\-]+/, 'max-w-[1100px]');
        } else {
            return match.replace('w-[95%]', 'w-[92%] lg:w-[80%] max-w-[1100px]');
        }
    });

    if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log('Updated navbar width in:', filePath);
        modifiedFiles++;
    }
});

console.log(`\nTotal files updated: ${modifiedFiles}`);
