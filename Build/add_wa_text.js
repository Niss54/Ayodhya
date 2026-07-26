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

function getMessageForContext(linkHtml, filePath) {
    const filename = path.basename(filePath).toLowerCase();
    const htmlLower = linkHtml.toLowerCase();
    
    // Check if it already has a text param
    if (htmlLower.includes('?text=')) {
        return null; // Already modified
    }

    let message = 'Jai Shree Ram! I have an inquiry.'; // Default

    // Text in the button itself
    if (htmlLower.includes('book darshan')) {
        message = 'Jai Shree Ram! I would like to book a darshan.';
    } else if (htmlLower.includes('plan your visit')) {
        message = 'Jai Shree Ram! I would like to plan a visit to Ayodhya.';
    } else if (htmlLower.includes('book taxi') || filename.includes('car')) {
        message = 'Jai Shree Ram! I want to book a taxi/cab.';
    } else if (htmlLower.includes('book') && filename.includes('hotel')) {
        message = 'Jai Shree Ram! I am looking to book a room/accommodation.';
    } else if (htmlLower.includes('book') && (filename.includes('tour') || filename.includes('package'))) {
        message = 'Jai Shree Ram! I want to book a tour package.';
    } else if (htmlLower.includes('contact') || filename.includes('contact')) {
        message = 'Jai Shree Ram! I would like to contact you for some details.';
    } else if (htmlLower.includes('book now on whatsapp') || htmlLower.includes('book on whatsapp')) {
        if (filePath.includes('blog')) {
             if (filename.includes('hotel') || filename.includes('hostel')) message = 'Jai Shree Ram! I want to book an accommodation in Ayodhya.';
             else if (filename.includes('taxi')) message = 'Jai Shree Ram! I need a taxi service in Ayodhya.';
             else message = 'Jai Shree Ram! I would like to book an Ayodhya tour.';
        } else {
             message = 'Jai Shree Ram! I want to make a booking.';
        }
    } else if (htmlLower.includes('arrow_forward') || htmlLower.includes('fixed bottom-24')) {
        message = 'Jai Shree Ram! I need some help planning my Ayodhya trip.';
    }

    // Encode the message
    return encodeURIComponent(message);
}

let modifiedFiles = 0;

walkDir(rootDir, function(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Regex to match <a ... href="https://wa.me/919793434313" ...> ... </a>
    // Or anything similar
    
    // We will use a regex to find wa.me/919793434313 without the ?text part
    let newContent = content;
    
    // First, let's find all instances of https://wa.me/919793434313 and wa.me/919793434313
    // But we need to make sure we only replace inside href="..."
    
    // Match the entire anchor tag to get context
    const anchorRegex = /<a[^>]*href="https?:\/\/wa\.me\/919793434313"[^>]*>[\s\S]*?<\/a>/gi;
    
    newContent = newContent.replace(anchorRegex, (match) => {
        const message = getMessageForContext(match, filePath);
        if (!message) return match; // Skip if already has text
        
        // Replace the exact URL in this anchor tag with the text appended
        return match.replace(/wa\.me\/919793434313/g, `wa.me/919793434313?text=${message}`);
    });

    // Also catch plain text wa.me links in paragraphs if needed, but the user said "jo buttons har button ke liye" so anchor tags are the main target.
    // Let's also check for schema.org sameAs links or text mentioning it, but those shouldn't be touched usually.
    
    // What if the href doesn't have https? (e.g. href="wa.me/...") -> we can fix that too, but usually it has https.
    
    if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log('Updated:', filePath);
        modifiedFiles++;
    }
});

console.log(`\nTotal files updated: ${modifiedFiles}`);
