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

const translations = {
    'Jai Shree Ram! I have an inquiry.': 'Jai Shree Ram! I have an inquiry. / जय श्री राम! मुझे कुछ जानकारी चाहिए।',
    'Jai Shree Ram! I would like to book a darshan.': 'Jai Shree Ram! I would like to book a darshan. / जय श्री राम! मैं दर्शन बुक करना चाहता हूँ।',
    'Jai Shree Ram! I would like to plan a visit to Ayodhya.': 'Jai Shree Ram! I would like to plan a visit to Ayodhya. / जय श्री राम! मैं अयोध्या यात्रा की योजना बनाना चाहता हूँ।',
    'Jai Shree Ram! I want to book a taxi/cab.': 'Jai Shree Ram! I want to book a taxi/cab. / जय श्री राम! मुझे टैक्सी/कैब बुक करनी है।',
    'Jai Shree Ram! I am looking to book a room/accommodation.': 'Jai Shree Ram! I am looking to book a room/accommodation. / जय श्री राम! मुझे रूम/आवास बुक करना है।',
    'Jai Shree Ram! I want to book a tour package.': 'Jai Shree Ram! I want to book a tour package. / जय श्री राम! मुझे टूर पैकेज बुक करना है।',
    'Jai Shree Ram! I would like to contact you for some details.': 'Jai Shree Ram! I would like to contact you for some details. / जय श्री राम! मुझे कुछ जानकारी के लिए संपर्क करना है।',
    'Jai Shree Ram! I want to book an accommodation in Ayodhya.': 'Jai Shree Ram! I want to book an accommodation in Ayodhya. / जय श्री राम! मुझे अयोध्या में रूम बुक करना है।',
    'Jai Shree Ram! I need a taxi service in Ayodhya.': 'Jai Shree Ram! I need a taxi service in Ayodhya. / जय श्री राम! मुझे अयोध्या में टैक्सी सर्विस चाहिए।',
    'Jai Shree Ram! I would like to book an Ayodhya tour.': 'Jai Shree Ram! I would like to book an Ayodhya tour. / जय श्री राम! मुझे अयोध्या टूर बुक करना है।',
    'Jai Shree Ram! I want to make a booking.': 'Jai Shree Ram! I want to make a booking. / जय श्री राम! मुझे बुकिंग करनी है।',
    'Jai Shree Ram! I need some help planning my Ayodhya trip.': 'Jai Shree Ram! I need some help planning my Ayodhya trip. / जय श्री राम! मुझे अपनी अयोध्या यात्रा के लिए मदद चाहिए।'
};

function getBilingualMessageForContext(linkHtml, filePath) {
    const filename = path.basename(filePath).toLowerCase();
    const htmlLower = linkHtml.toLowerCase();
    
    let englishMessage = 'Jai Shree Ram! I have an inquiry.'; // Default

    if (htmlLower.includes('book darshan')) {
        englishMessage = 'Jai Shree Ram! I would like to book a darshan.';
    } else if (htmlLower.includes('plan your visit')) {
        englishMessage = 'Jai Shree Ram! I would like to plan a visit to Ayodhya.';
    } else if (htmlLower.includes('book taxi') || filename.includes('car')) {
        englishMessage = 'Jai Shree Ram! I want to book a taxi/cab.';
    } else if (htmlLower.includes('book') && filename.includes('hotel')) {
        englishMessage = 'Jai Shree Ram! I am looking to book a room/accommodation.';
    } else if (htmlLower.includes('book') && (filename.includes('tour') || filename.includes('package'))) {
        englishMessage = 'Jai Shree Ram! I want to book a tour package.';
    } else if (htmlLower.includes('contact') || filename.includes('contact')) {
        englishMessage = 'Jai Shree Ram! I would like to contact you for some details.';
    } else if (htmlLower.includes('book now on whatsapp') || htmlLower.includes('book on whatsapp')) {
        if (filePath.includes('blog')) {
             if (filename.includes('hotel') || filename.includes('hostel')) englishMessage = 'Jai Shree Ram! I want to book an accommodation in Ayodhya.';
             else if (filename.includes('taxi')) englishMessage = 'Jai Shree Ram! I need a taxi service in Ayodhya.';
             else englishMessage = 'Jai Shree Ram! I would like to book an Ayodhya tour.';
        } else {
             englishMessage = 'Jai Shree Ram! I want to make a booking.';
        }
    } else if (htmlLower.includes('arrow_forward') || htmlLower.includes('fixed bottom-24') || htmlLower.includes('z-40')) {
        englishMessage = 'Jai Shree Ram! I need some help planning my Ayodhya trip.';
    }

    return encodeURIComponent(translations[englishMessage] || englishMessage);
}

let modifiedFiles = 0;

walkDir(rootDir, function(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Regex to match <a ... href="https://wa.me/919793434313[...]" ...> ... </a>
    // We match the whole tag, and replace the whole href attribute.
    const anchorRegex = /<a[^>]*href="https?:\/\/wa\.me\/919793434313[^"]*"[^>]*>[\s\S]*?<\/a>/gi;
    
    let newContent = content.replace(anchorRegex, (match) => {
        const message = getBilingualMessageForContext(match, filePath);
        
        // Find where the URL starts and ends inside the match
        // Basically replace `href="https://wa.me/919793434313..."` with `href="https://wa.me/919793434313?text=..."`
        return match.replace(/href="https?:\/\/wa\.me\/919793434313[^"]*"/gi, `href="https://wa.me/919793434313?text=${message}"`);
    });
    
    if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log('Updated bilingual:', filePath);
        modifiedFiles++;
    }
});

console.log(`\nTotal files updated with bilingual WhatsApp texts: ${modifiedFiles}`);
