const fs = require('fs');
const path = require('path');

const filesToFix = [
  'contact_mobile/contact-mobile.html',
  'girls_hostel_mobile/girls-hostel-mobile.html',
  'hotels_rooms_mobile/hotels_rooms_mobile.html',
  'reviews_mobile/reviews_mobile.html'
];

const newLogo = `
<div class="flex flex-col justify-center">
<div class="font-headline-sm text-headline-sm text-primary dark:text-inverse-primary tracking-tight leading-none">Mahakaal</div>
<div class="font-label-caps text-[9px] uppercase tracking-widest text-on-surface-variant dark:text-surface-variant font-bold mt-1">Tours & Travels</div>
</div>`.trim();

const buildDir = path.join(__dirname, 'Build');

filesToFix.forEach(relPath => {
  const filePath = path.join(buildDir, relPath);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Pattern 1: A flex flex-col justify-center containing tracking-tight
  const flexRegex = /<div class="flex flex-col justify-center">\s*<div class="font-headline-sm[^>]*tracking-tight[^>]*>[\s\S]*?<\/div>\s*<div class="font-label-caps[^>]*>[\s\S]*?<\/div>\s*<\/div>/g;
  content = content.replace(flexRegex, newLogo);

  // Pattern 2: A standalone tracking-tight div (like Divine Heritage in hotels_rooms_mobile.html)
  // We want to avoid replacing the newly inserted Mahakaal from Pattern 1
  const singleRegex = /<div class="font-headline-sm[^>]*tracking-tight[^>]*>[\s\S]*?<\/div>/g;
  content = content.replace(singleRegex, match => {
      // If it contains "Mahakaal", it might be our new one, skip it.
      if (match.includes('Mahakaal')) return match;
      return newLogo;
  });

  if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log('Fixed logo in: ' + filePath);
  }
});
