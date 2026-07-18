const dictionary = {
    // Navbar
    "Ayodhya Mahakaal": "अयोध्या महाकाल",
    "Tours & Travels": "टूर्स एंड ट्रैवल्स",
    "Destinations": "गंतव्य",
    "Heritage": "विरासत",
    "Darshan": "दर्शन",
    "Luxury": "लक्जरी",
    "Spiritual": "आध्यात्मिक",
    "Plan Your Visit": "योजना बनाएं",
    
    // Home Hero
    "Journey to the Eternal City of Lord Ram": "भगवान राम की शाश्वत नगरी की यात्रा",
    "Walk the sacred paths of devotion, explore centuries of heritage, and enjoy thoughtfully curated pilgrimages with premium hospitality. Let every visit become a cherished spiritual memory.": "भक्ति के पवित्र पथों पर चलें, सदियों की विरासत का अन्वेषण करें, और प्रीमियम आतिथ्य के साथ सोच-समझकर तैयार की गई तीर्थयात्राओं का आनंद लें। हर यात्रा को एक अनमोल आध्यात्मिक स्मृति बनने दें।",
    "Book Darshan": "दर्शन बुक करें",
    
    // Home Stats
    "Tours": "यात्राएं",
    "Pilgrims": "तीर्थयात्री",
    "Guides": "मार्गदर्शक",
    "Rating": "रेटिंग",

    // Common Bottom Nav
    "Home": "होम",
    "Rooms": "कमरे",
    "Contact": "संपर्क",

    // Tour Guides Page
    "Expert Guides": "विशेषज्ञ मार्गदर्शक",
    "Discover the deep spiritual history of Ayodhya with our curated selection of verified local experts.": "हमारे प्रमाणित स्थानीय विशेषज्ञों के चयन के साथ अयोध्या के गहरे आध्यात्मिक इतिहास की खोज करें।",
    "All Experts": "सभी विशेषज्ञ",
    "Sanskrit Scholars": "संस्कृत विद्वान",
    "Luxury Hosts": "लक्ज़री होस्ट",
    "Heritage Expert & Scholar": "विरासत विशेषज्ञ और विद्वान",
    "Hindi": "हिन्दी",
    "English": "अंग्रेज़ी",
    "Sanskrit": "संस्कृत",
    "Bengali": "बंगाली",
    "Specializing in the ancient architecture and Vedic history of the Ram Janmabhoomi complex. Offering profound insights into local folklore.": "राम जन्मभूमि परिसर की प्राचीन वास्तुकला और वैदिक इतिहास के विशेषज्ञ। स्थानीय लोककथाओं में गहरी अंतर्दृष्टि प्रदान करते हैं।",
    "Starting from": "शुरुआती कीमत",
    "/half-day": "/आधा दिन",
    "/day": "/दिन",
    "Hire Guide": "गाइड बुक करें",

    // General
    "Divine Packages": "दिव्य पैकेज",
    "Book Now": "अभी बुक करें",
    "Luxury Stays": "लक्ज़री ठहरना",
    "Car Rental": "कार रेंटल",
    "Girls Hostel": "गर्ल्स हॉस्टल"
};

// Function to recursively translate text nodes
function translateNode(node, lang) {
    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.nodeValue.trim();
        if (text) {
            let normalizedText = text.replace(/\s+/g, ' ');
            
            if (!node.originalText) {
                node.originalText = normalizedText;
            }

            let lookupText = node.originalText;
            
            if (lang === 'hi' && dictionary[lookupText]) {
                node.nodeValue = node.nodeValue.replace(text, dictionary[lookupText]);
            } else if (lang === 'en') {
                node.nodeValue = node.nodeValue.replace(text, lookupText);
            }
        }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Skip script, style, and icons
        if (node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE' && !node.classList.contains('material-symbols-outlined')) {
            for (let child of node.childNodes) {
                translateNode(child, lang);
            }
        }
    }
}

// Set language globally
window.setLanguage = function(lang) {
    localStorage.setItem('preferredLanguage', lang);
    translateNode(document.body, lang);
    
    const langBtns = document.querySelectorAll('.lang-toggle-btn');
    langBtns.forEach(btn => {
        if (lang === 'hi') {
            btn.innerHTML = '<span class="font-bold text-[12px]">HI</span>';
        } else {
            btn.innerHTML = '<span class="font-bold text-[12px]">EN</span>';
        }
    });
    document.documentElement.lang = lang;
};

window.toggleLanguage = function() {
    let currentLang = localStorage.getItem('preferredLanguage') || 'en';
    let newLang = currentLang === 'en' ? 'hi' : 'en';
    window.setLanguage(newLang);
};

document.addEventListener('DOMContentLoaded', () => {
    let currentLang = localStorage.getItem('preferredLanguage') || 'en';
    // Always initialize toggle button state
    const langBtns = document.querySelectorAll('.lang-toggle-btn');
    langBtns.forEach(btn => {
        btn.innerHTML = currentLang === 'hi' ? '<span class="font-bold text-[12px]">HI</span>' : '<span class="font-bold text-[12px]">EN</span>';
    });
    
    if (currentLang === 'hi') {
        // Small timeout ensures DOM is fully painted before replacing text
        setTimeout(() => window.setLanguage('hi'), 50);
    }
});
