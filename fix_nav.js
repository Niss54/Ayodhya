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
const linkStr = '<a class="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors duration-300" href="/Build/destinations_mobile/destinations_mobile.html">Destinations</a>\n';

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  
  if (content.includes('<nav class="flex gap-8">') && !content.includes('>Destinations</a>')) {
      content = content.replace(/<nav class="flex gap-8">\s*/, '<nav class="flex gap-8">\n' + linkStr);
      fs.writeFileSync(f, content);
  }
});
console.log('Added Destinations to navbars');

// Update translations.js
let transContent = fs.readFileSync('./Build/translations.js', 'utf8');
if (!transContent.includes('"Destinations"')) {
    transContent = transContent.replace('"Heritage": "विरासत",', '"Destinations": "गंतव्य",\n    "Heritage": "विरासत",');
    fs.writeFileSync('./Build/translations.js', transContent);
    console.log('Updated translations.js');
}
