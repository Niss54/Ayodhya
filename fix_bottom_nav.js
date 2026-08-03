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

    // Pattern to find bottom nav tabs and replace their hrefs
    // 1. Home
    newContent = newContent.replace(/(<a[^>]*href=")([^"]*)("[^>]*>\s*<span[^>]*>[^<]*home[^<]*<\/span>\s*<span[^>]*>Home<\/span>\s*<\/a>)/g, '$1/$3');
    
    // 2. Tours -> /ayodhya-tour-packages/
    newContent = newContent.replace(/(<a[^>]*href=")([^"]*)("[^>]*>\s*<span[^>]*>[^<]*temple_hindu[^<]*<\/span>\s*<span[^>]*>Tours<\/span>\s*<\/a>)/g, '$1/ayodhya-tour-packages/$3');
    
    // 3. Guides -> /ayodhya-local-guides/
    newContent = newContent.replace(/(<a[^>]*href=")([^"]*)("[^>]*>\s*<span[^>]*>[^<]*person_pin[^<]*<\/span>\s*<span[^>]*>Guides<\/span>\s*<\/a>)/g, '$1/ayodhya-local-guides/$3');
    
    // 4. Rooms -> /hotels-in-ayodhya/
    newContent = newContent.replace(/(<a[^>]*href=")([^"]*)("[^>]*>\s*<span[^>]*>[^<]*bed[^<]*<\/span>\s*<span[^>]*>Rooms<\/span>\s*<\/a>)/g, '$1/hotels-in-ayodhya/$3');
    
    // 5. Contact -> /contact/
    newContent = newContent.replace(/(<a[^>]*href=")([^"]*)("[^>]*>\s*<span[^>]*>[^<]*chat[^<]*<\/span>\s*<span[^>]*>Contact<\/span>\s*<\/a>)/g, '$1/contact/$3');

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        count++;
    }
});

console.log(`Updated Bottom NavBar hrefs in ${count} files.`);
