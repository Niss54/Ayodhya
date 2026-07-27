const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\nisha\\OneDrive\\Documents\\Downloads\\Ayodhya';

// Floating Instagram Icon HTML
const instaFloatingHTML = `
<!-- Floating Instagram FAB -->
<a class="fixed bottom-44 right-4 z-40 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white p-4 rounded-full shadow-[0_8px_32px_rgba(225,48,108,0.4)] hover:scale-105 transition-transform flex items-center justify-center md:bottom-28 md:right-8" href="https://www.instagram.com/pawangupta7700" target="_blank">
  <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.181a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
</a>\n`;

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (f === '.git' || f === 'node_modules' || f === 'public') return;
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
    let newContent = content;

    // Remove old double language toggle from previous execution if it still somehow exists
    // <button class="lang-toggle-btn ...">...</button>
    newContent = newContent.replace(/<button[^>]*class="lang-toggle-btn[^>]*>[\s\S]*?<\/button>/gi, '');

    // Add floating Insta button if not already there, right before Floating WhatsApp FAB
    if (!newContent.includes('<!-- Floating Instagram FAB -->')) {
        // Find the WhatsApp comment or a tag
        const waPattern = /<!-- Floating WhatsApp FAB[^>]*>|(<a[^>]*fixed bottom-24 right-4[^>]*bg-\[#25D366\][^>]*>)/i;
        newContent = newContent.replace(waPattern, instaFloatingHTML + '$&');
    }

    if (filePath.endsWith('index.html') && !filePath.includes('hotels-in-ayodhya') && !filePath.includes('ayodhya-taxi-service') && !filePath.includes('ayodhya-local-guides') && !filePath.includes('ayodhya-tour-packages') && !filePath.includes('ayodhya-sightseeing') && !filePath.includes('reviews') && !filePath.includes('girls-hostel-ayodhya') && !filePath.includes('contact')) {
        // Only target the main root index.html
        
        // Add Playfair Display to Google Fonts
        if (!newContent.includes('Playfair+Display')) {
            newContent = newContent.replace('family=Libre+Caslon+Text:', 'family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Libre+Caslon+Text:');
        }

        // Apply Playfair Display to the h1
        newContent = newContent.replace('<h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface dark:text-white font-bold drop-shadow-xl max-w-3xl leading-tight">', 
                                        '<h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface dark:text-white font-bold drop-shadow-2xl max-w-3xl leading-tight" style="font-family: \'Playfair Display\', serif; letter-spacing: -0.02em;">');
    }

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        modifiedFiles++;
    }
});

console.log('Updated', modifiedFiles, 'files.');
