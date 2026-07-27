const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\nisha\\OneDrive\\Documents\\Downloads\\Ayodhya';

const socialDiv = `
  <div class="flex gap-4 mt-2">
    <a href="https://www.instagram.com/pawangupta7700" target="_blank" class="text-on-surface-variant hover:text-primary transition-colors hover:scale-110 transform" aria-label="Instagram">
      <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.181a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
    </a>
  </div>
`;

const fullFooter = `
<!-- Footer -->
<footer class="w-full border-t border-outline-variant bg-surface-container-highest py-12 px-[20px] md:px-[64px] flex flex-col items-center gap-6 mt-12 pb-24 md:pb-12">
  <div class="font-headline-sm text-headline-sm text-primary">Mahakaal Tours & Travels</div>
  <div class="flex gap-6 flex-wrap justify-center">
    <a class="text-on-surface-variant hover:text-secondary transition-colors font-body-md text-body-md" href="/">Home</a>
    <a class="text-on-surface-variant hover:text-secondary transition-colors font-body-md text-body-md" href="/ayodhya-tour-packages/">Tour Packages</a>
    <a class="text-on-surface-variant hover:text-secondary transition-colors font-body-md text-body-md" href="/ayodhya-taxi-service/">Taxi Service</a>
    <a class="text-on-surface-variant hover:text-secondary transition-colors font-body-md text-body-md" href="/contact/">Contact Us</a>
  </div>
  <p class="font-body-md text-body-md text-on-surface-variant">© 2025 Mahakaal Tours & Travels Ayodhya. All Rights Reserved.</p>
  <p class="font-body-md text-sm text-on-surface-variant text-center">Near Ram Mandir, Ayodhya, Uttar Pradesh - 224123 | <a href="tel:+919793434313" class="text-primary">+91-9793434313</a></p>
${socialDiv}</footer>
`;

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

    // Check if the social link is already there to avoid duplicates
    if (newContent.includes('instagram.com/pawangupta7700')) {
        return;
    }

    if (newContent.includes('</footer>')) {
        // Find the last </p> before </footer> and insert the socialDiv after it
        // Or just replace </footer> with socialDiv + </footer>
        newContent = newContent.replace(/<\/footer>/i, socialDiv + '</footer>');
        
        // Also remove 'hidden md:flex' from footers if they have it so it shows on mobile
        newContent = newContent.replace(/<footer([^>]*)hidden md:flex([^>]*)>/i, '<footer$1$2>');
    } else {
        // If no footer exists, inject it right after </main>
        if (newContent.includes('</main>')) {
            newContent = newContent.replace(/<\/main>/i, '</main>\n' + fullFooter);
        } else {
            // Very last resort, right before </body>
            newContent = newContent.replace(/<\/body>/i, fullFooter + '\n</body>');
        }
    }

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        count++;
        console.log('Added Instagram to:', filePath);
    }
});

console.log('Total files updated with Instagram link:', count);
