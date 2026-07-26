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
    let newContent = content;

    // 1. Update Logo Text
    // Replace the exact logo block, accounting for minor whitespace variations
    const oldLogoRegex = /<a[^>]*href="\/"[^>]*class="flex items-center"[^>]*>\s*<img src="\/public\/Mahakal\.png"[^>]*>\s*<\/a>/gi;
    
    const newLogoHTML = `<a href="/" class="flex items-center gap-3">
  <img src="/public/Mahakal.png" alt="Mahakaal Tours & Travels Logo" class="h-10 w-auto object-contain">
  <div class="flex flex-col">
    <span class="font-headline-sm text-[20px] text-primary dark:text-inverse-primary leading-none" style="font-family: 'Libre Caslon Text', serif;">Mahakaal</span>
    <span class="font-label-caps text-[10px] text-on-surface-variant dark:text-surface-variant tracking-[0.2em] mt-1" style="font-family: 'Inter', sans-serif;">TOURS & TRAVELS</span>
  </div>
</a>`;

    newContent = newContent.replace(oldLogoRegex, newLogoHTML);
    
    // Also try without class="flex items-center" just in case some are different, but we know the exact HTML from the file viewer
    // Let's refine the regex if it didn't match
    if (!newContent.includes('TOURS & TRAVELS')) {
       // try a simpler replace
       const simpleOldLogo = `<a href="/" class="flex items-center">\n    <img src="/public/Mahakal.png" alt="Mahakaal Tours & Travels Logo" class="h-10 w-auto object-contain">\n  </a>`;
       newContent = newContent.replace(/<a href="\/" class="flex items-center">\s*<img src="\/public\/Mahakal\.png"[^>]*>\s*<\/a>/gi, newLogoHTML);
    }

    // 2. Add Blog link to navbar if it doesn't exist
    // Find the desktop navbar container: <nav class="flex gap-8"> or <div class="...gap-8...font-label-caps...">
    // Then check if it contains href="/blog/"
    
    // For files like home.html that use <nav class="flex gap-8">
    const navMatch = newContent.match(/<nav class="flex gap-8">([\s\S]*?)<\/nav>/i);
    if (navMatch) {
        if (!navMatch[1].includes('href="/blog/"')) {
            const blogLink = `\n<a class="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors duration-300" href="/blog/">Blog</a>\n`;
            newContent = newContent.replace('</nav>', blogLink + '</nav>');
        }
    }

    // For files like carrental.html that might use <div class="hidden md:flex items-center gap-8">
    const divNavMatch = newContent.match(/(<div[^>]*gap-8[^>]*>)([\s\S]*?)(<\/div>)/i);
    if (divNavMatch) {
        // check if this is the header nav (contains destinations or similar)
        if (divNavMatch[2].includes('ayodhya-sightseeing') || divNavMatch[2].includes('ayodhya-taxi-service')) {
            if (!divNavMatch[2].includes('href="/blog/"')) {
                 const isLabelCaps = divNavMatch[1].includes('font-label-caps');
                 let blogClass = `text-on-surface-variant hover:text-primary transition-colors`;
                 if (!isLabelCaps) {
                     blogClass = `font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors`;
                 }
                 const blogLink = `\n    <a class="${blogClass}" href="/blog/">Blog</a>\n  `;
                 // Since we matched the whole div, let's replace the closing div specifically for this match
                 const fullMatch = divNavMatch[0];
                 const replacedMatch = fullMatch.replace('</div>', blogLink + '</div>');
                 newContent = newContent.replace(fullMatch, replacedMatch);
            }
        }
    }

    if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log('Updated header in:', filePath);
        modifiedFiles++;
    }
});

console.log(`\nTotal files updated with new logo & blog link: ${modifiedFiles}`);
