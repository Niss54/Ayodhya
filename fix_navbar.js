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

const newLogo = `
<div class="flex flex-col justify-center">
<div class="font-headline-sm text-headline-sm text-primary dark:text-inverse-primary tracking-tight leading-none">Mahakaal</div>
<div class="font-label-caps text-[9px] uppercase tracking-widest text-on-surface-variant dark:text-surface-variant font-bold mt-1">Tours & Travels</div>
</div>`.trim();

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let originalContent = content;

  // Replace single div logo blocks (handles newlines)
  const regex1 = /<div class="font-headline-sm[^>]*tracking-tight[^>]*>[\s\S]*?<\/div>\s*<\/div>/g; 
  // Wait, if it's not wrapped in a flex column... 
  // Let's just find tracking-tight inside a nav or header. It's usually `<div class="font-headline-sm... tracking-tight...">`
  // And it might be inside a flex flex-col justify-center. Let's first replace the whole flex block if it exists.
  const flexRegex = /<div class="flex flex-col justify-center">\s*<div class="font-headline-sm[^>]*tracking-tight[^>]*>[\s\S]*?<\/div>\s*<div class="font-label-caps[^>]*>[\s\S]*?<\/div>\s*<\/div>/g;
  content = content.replace(flexRegex, newLogo);

  // Then, for any remaining simple divs (like in hotels_rooms_mobile.html where it's not in a flex flex-col)
  // Let's replace just the single div with newLogo
  const singleRegex = /<div class="font-headline-sm[^>]*tracking-tight[^>]*>[\s\S]*?<\/div>/g;
  content = content.replace(singleRegex, match => {
      // If it already contains "Mahakaal" and "Tours & Travels", it might be the one we just replaced (wait, the new one has tracking-tight too)
      if (match.includes('Mahakaal') && !match.includes('Tours & Travels')) return match; // avoid replacing just half?
      // Actually, since our newLogo HAS tracking-tight, running singleRegex will match the FIRST div of newLogo!
      return match;
  });

  // A safer way:
  // Since we know the file, let's just do a string replace for known patterns.

});
