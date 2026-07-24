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
let count = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;

  // Replace "Luxury" in desktop navbar with "Taxi Service"
  const luxuryRegex = /<a([^>]*href=")[^"]*("[^>]*>)\s*Luxury\s*<\/a>/;
  if (luxuryRegex.test(content)) {
      content = content.replace(/<a([^>]*href=")[^"]*("[^>]*>)\s*Luxury\s*<\/a>/, '<a$1/Build/car_rental_mobile/carrental.html$2Taxi Service</a>');
      changed = true;
  }

  // Same for mobile bottom nav, replace "Luxury" text with "Taxi"
  const mobileNavRegex = /<span([^>]*>)\s*local_taxi\s*<\/span>\s*<span([^>]*>)\s*Luxury\s*<\/span>/;
  if (mobileNavRegex.test(content)) {
      content = content.replace(/(<span[^>]*>\s*local_taxi\s*<\/span>\s*<span[^>]*>)\s*Luxury\s*(<\/span>)/, '$1Taxi$2');
      changed = true;
  }

  if (changed) {
      fs.writeFileSync(f, content);
      count++;
  }
});
console.log('Updated desktop navbar in ' + count + ' files');
