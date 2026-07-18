const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.html')) { 
      results.push(file);
    }
  });
  return results;
}
const files = walk('./Build');
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  // Fix the literal backtick-n issue
  content = content.split('`n').join('\n');
  
  // Replace desktop language button globally
  const btnStr = '<button class="lang-toggle-btn w-8 h-8 flex items-center justify-center rounded-full border border-primary/50 text-primary dark:text-inverse-primary hover:bg-primary/10 transition-colors" onclick="toggleLanguage()">\n<span class="font-bold text-[12px]">EN</span>\n</button>';
  content = content.replace(/<button[^>]*>\s*<span class="material-symbols-outlined"[^>]*>language<\/span>\s*<\/button>/g, btnStr);
  
  // Replace language button globally in case it is wrapped differently
  content = content.replace(/<button aria-label="Language"[^>]*>\s*<span class="material-symbols-outlined"[^>]*>language<\/span>\s*<\/button>/g, btnStr);

  // Add mobile language button next to search button if language toggle doesn't exist yet
  // This helps for tour_guides_mobile which only has search
  if (!content.includes('lang-toggle-btn') && content.includes('>search</span>')) {
     const searchBtnRegex = /(<button[^>]*>\s*<span class="material-symbols-outlined"[^>]*>search<\/span>\s*<\/button>)/;
     content = content.replace(searchBtnRegex, '$1\n' + btnStr);
  }
  
  // Add mobile language button directly if neither language nor search are found but we have a mobile header (failsafe)
  // Actually, some pages have no search. But we know the desktop one is replaced.
  // We can just rely on the existing replacement for home.html since it was already done.
  
  fs.writeFileSync(f, content);
});
console.log('Fixed files');
