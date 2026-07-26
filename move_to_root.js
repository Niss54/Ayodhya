const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\nisha\\OneDrive\\Documents\\Downloads\\Ayodhya';
const buildDir = path.join(rootDir, 'Build');

// 1. Overwrite root index.html with Build/index.html
fs.copyFileSync(path.join(buildDir, 'index.html'), path.join(rootDir, 'index.html'));
fs.unlinkSync(path.join(buildDir, 'index.html')); // remove from build

// 2. Move all SEO directories and other files to root
const itemsToMove = [
    'ayodhya-taxi-service',
    'ayodhya-tour-packages',
    'ayodhya-local-guides',
    'hotels-in-ayodhya',
    'ayodhya-sightseeing',
    'contact',
    'girls-hostel-ayodhya',
    'reviews',
    'blog',
    'navigation.js',
    'translations.js' // if it exists
];

itemsToMove.forEach(item => {
    const src = path.join(buildDir, item);
    const dest = path.join(rootDir, item);
    if (fs.existsSync(src)) {
        // If it's a directory, we can rename it. If dest exists, we might need to handle it, but it shouldn't.
        fs.renameSync(src, dest);
    }
});

// 3. Search and replace "/Build/" with "/" in all HTML files in root and its subdirectories
function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        // exclude .git, node_modules, Build, public
        if (f === '.git' || f === 'node_modules' || f === 'Build' || f === 'public') return;
        
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
    let newContent = content.replace(/\/Build\/navigation\.js/g, '/navigation.js');
    newContent = newContent.replace(/\/Build\/translations\.js/g, '/translations.js');
    // Also remove any other /Build/ reference in hrefs or src
    newContent = newContent.replace(/href="\/Build\//g, 'href="/');
    newContent = newContent.replace(/src="\/Build\//g, 'src="/');
    
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        modifiedFiles++;
    }
});

console.log('Moved files out of Build to root and updated ' + modifiedFiles + ' files.');
