const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\nisha\\OneDrive\\Documents\\Downloads\\Ayodhya';

// 1. Fix Blog URL Structure
const blogDir = path.join(rootDir, 'blog');
if (fs.existsSync(blogDir)) {
    // Rename blog.html to index.html if it exists
    const blogHtml = path.join(blogDir, 'blog.html');
    if (fs.existsSync(blogHtml)) {
        fs.renameSync(blogHtml, path.join(blogDir, 'index.html'));
        console.log('Renamed blog.html to index.html');
    }

    // Iterate over all other .html files in blog/ and move them into their own directories
    fs.readdirSync(blogDir).forEach(f => {
        if (f.endsWith('.html') && f !== 'index.html') {
            const baseName = f.replace('.html', '');
            const newDir = path.join(blogDir, baseName);
            if (!fs.existsSync(newDir)) {
                fs.mkdirSync(newDir);
            }
            fs.renameSync(path.join(blogDir, f), path.join(newDir, 'index.html'));
            console.log(`Moved ${f} to ${baseName}/index.html`);
        }
    });
}

// 2. Unify Desktop Navbar
const standardNavbar = `<!-- TopNavBar (Web - Hidden on Mobile) -->
<header class="hidden md:flex fixed top-0 left-0 right-0 z-50 mx-auto mt-6 w-[92%] lg:w-[80%] rounded-full bg-white/20 backdrop-blur-xl dark:bg-black/20 border border-outline-variant/30 dark:border-outline/20 shadow-[0_8px_32px_rgba(255,102,17,0.08)] justify-between items-center px-8 py-2 max-w-[1100px] transition-transform duration-300">
<div class="flex flex-col justify-center">
<a href="/" class="flex items-center gap-3">
  <img src="/public/Mahakal.png" alt="Mahakaal Tours & Travels Logo" class="h-10 w-auto object-contain">
  <div class="flex flex-col">
    <span class="font-headline-sm text-[20px] text-primary dark:text-inverse-primary leading-none" style="font-family: 'Libre Caslon Text', serif;">Mahakaal</span>
    <span class="font-label-caps text-[10px] text-on-surface-variant dark:text-surface-variant tracking-[0.2em] mt-1" style="font-family: 'Inter', sans-serif;">TOURS & TRAVELS</span>
  </div>
</a>
</div>
<nav class="flex gap-8">
<a class="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors duration-300" href="/ayodhya-sightseeing/">Destinations</a>
<a class="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors duration-300" href="/ayodhya-tour-packages/">Heritage</a>
<a class="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors duration-300" href="/ayodhya-taxi-service/">Taxi Service</a>
<a class="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors duration-300" href="/blog/">Blog</a>
</nav>
<div class="flex items-center gap-4">
<button class="bg-primary text-on-primary px-6 py-2 rounded-full font-label-caps text-label-caps hover:shadow-lg transition-shadow shimmer-bg">Plan Your Visit</button>
</div>
</header>`;

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
    
    // Replace the desktop navbar (either <header class="hidden md:flex fixed top-0...> or <nav class="hidden md:flex... fixed top-0...>)
    // This regex looks for <!-- TopNavBar... --> followed by either <header or <nav and captures until the closing tag.
    let newContent = content.replace(/<!-- TopNavBar \(.*?\) -->\s*<(header|nav) class="hidden md:flex[^>]*fixed top-0[^>]*>[\s\S]*?<\/\1>/i, standardNavbar);
    
    // Also try to catch it without the comment just in case
    if (newContent === content) {
        newContent = content.replace(/<(header|nav) class="hidden md:flex[^>]*fixed top-0[^>]*>[\s\S]*?<\/\1>/i, standardNavbar);
    }
    
    // Ensure old lang-toggle-btn is removed (in case it was missed in hotels-in-ayodhya)
    newContent = newContent.replace(/<button[^>]*class="[^"]*lang-toggle-btn[^"]*"[^>]*>[\s\S]*?<\/button>/gi, '');

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        count++;
    }
});

console.log(`Updated desktop navbar and cleaned toggles in ${count} files.`);
