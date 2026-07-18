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
const btnStr = '<button class="lang-toggle-btn w-8 h-8 flex items-center justify-center rounded-full border border-primary/50 text-primary dark:text-inverse-primary hover:bg-primary/10 transition-colors ml-2" onclick="toggleLanguage()">\n<span class="font-bold text-[12px]">EN</span>\n</button>';

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  
  const mobileHeaderRegex = /<header[^>]*md:hidden[^>]*>[\s\S]*?<\/header>/;
  const match = content.match(mobileHeaderRegex);
  if (match) {
      let mobileHeader = match[0];
      if (!mobileHeader.includes('lang-toggle-btn')) {
          if (mobileHeader.includes('>search</span>')) {
              mobileHeader = mobileHeader.replace(/(<button[^>]*>\s*<span class="material-symbols-outlined"[^>]*>search<\/span>\s*<\/button>)/, '$1\n' + btnStr);
          } else {
             // Inject it right before the closing div and header
             mobileHeader = mobileHeader.replace(/<\/div>\s*<\/header>/, '\n' + btnStr + '\n</div>\n</header>');
          }
          content = content.replace(mobileHeaderRegex, mobileHeader);
          fs.writeFileSync(f, content);
      }
  }
});
console.log('Mobile navbars fixed');
