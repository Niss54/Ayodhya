const fs = require('fs');
const path = require('path');

const filesToOptimize = [
  'ayodhya_darshan_mobile_home/home.html',
  'car_rental_mobile/carrental.html',
  'contact_mobile/contact-mobile.html',
  'destinations_mobile/destinations_mobile.html',
  'girls_hostel_mobile/girls-hostel-mobile.html',
  'hotels_rooms_mobile/hotels_rooms_mobile.html',
  'reviews_mobile/reviews_mobile.html',
  'tour_guides_mobile/tour_guides_mobile.html',
  'tour_packages_mobile/tour_packages_mobile.html'
];

const seoData = {
  'home.html': {
    title: 'Best Ayodhya Tour & Taxi Service | Mahakaal Tours & Travels',
    description: 'Experience Ayodhya with the best tour packages, trusted taxi service, VIP Ram Mandir darshan, and expert local guides. Book your spiritual journey today.',
  },
  'carrental.html': {
    title: 'Ayodhya Taxi Service & Cab Booking | Mahakaal Tours',
    description: 'Book the most reliable Ayodhya taxi service. Clean cabs, professional drivers for Ayodhya sightseeing, Ram Mandir drop, airport transfer, and outstation trips.',
  },
  'contact-mobile.html': {
    title: 'Contact Mahakaal Tours & Travels | Ayodhya Cab & Tour Booking',
    description: 'Get in touch for Ayodhya taxi booking, tour packages, or local guidance. Call or WhatsApp 9793434313 for instant assistance.',
  },
  'destinations_mobile.html': {
    title: 'Places to Visit in Ayodhya | Top Attractions & Sightseeing',
    description: 'Explore the divine heritage of Ayodhya. Visit Ram Janmabhoomi, Hanuman Garhi, Saryu Ghat, Kanak Bhawan, and more with our comfortable taxi service.',
  },
  'girls-hostel-mobile.html': {
    title: 'Safe Girls Hostel in Ayodhya | Mahakaal Rooms',
    description: 'Secure, clean, and affordable girls hostel in Ayodhya. Ideal for students and female pilgrims with modern amenities and 24/7 security.',
  },
  'hotels_rooms_mobile.html': {
    title: 'Best Hotels & Room Booking in Ayodhya | Mahakaal Travels',
    description: 'Find comfortable and affordable rooms near Ram Mandir. Choose from luxury, budget, and family hotels for a perfect stay in Ayodhya.',
  },
  'reviews_mobile.html': {
    title: 'Customer Reviews | Ayodhya Taxi & Tour Services',
    description: 'Read what our guests say about our top-rated Ayodhya taxi service, tour guides, and seamless Ram Mandir darshan experiences.',
  },
  'tour_guides_mobile.html': {
    title: 'Expert Ayodhya Local Tourist Guides | Mahakaal Tours',
    description: 'Hire knowledgeable and verified local guides in Ayodhya. Dive deep into the history of Ramayana, ancient temples, and local culture.',
  },
  'tour_packages_mobile.html': {
    title: 'Ayodhya Tour Packages & VIP Darshan | Mahakaal Travels',
    description: 'Book exclusive Ayodhya tour packages including VIP Ram Mandir Darshan, Saryu Aarti, and heritage walks with a dedicated cab and guide.',
  }
};

const globalKeywords = "Ayodhya tour package, Ayodhya taxi service, cab booking in Ayodhya, Ayodhya local guide, Ram Mandir darshan, Ayodhya hotel booking, Mahakaal travels, Ayodhya sightseeing";

const generateJSONLD = (pageTitle, pageDesc) => {
  return `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "name": "Mahakaal Tours & Travels",
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAp6dJBAf7TKWyIEwPQNkF_46YwrkHV2hvYtCAK3h1lLUZfvB-FD7FvfavByp3JIYptnN4OB_tTamb0h02sxBEFsIeAxjfAygfFbmYESKgilQk8597DveR84OanGwoNqh4NDHL8iAeklzMxFSveNBIJ12oh8EV1yfiC_kKG2trWWyO6eY-PmxvMPPNrXR_5oTjLCsL2DNIk_q-2Rc_NCgvOVDZmJcjNVcAiZiHnp3fb67fyBkJDFuIJ",
      "@id": "",
      "url": "https://wa.me/919793434313",
      "telephone": "+919793434313",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Ram Mandir",
        "addressLocality": "Ayodhya",
        "postalCode": "224123",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.7922,
        "longitude": 82.2046
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://wa.me/919793434313"
      ],
      "description": "${pageDesc.replace(/"/g, '&quot;')}"
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Mahakaal Ayodhya Taxi Service",
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDyw8vkIP5TO6wcLy_kS-5sEUAG1YPoHV_qofe61PTxuPdJ9o8rBnoquceN-bh_AneHmEwgkeh2wlYrJNnxlIyYci8Br776n4G_-p6RFJT7zwrZRX5Fm9vpbZlNH5Bf9ut7naRrTw4kodmzNgg0IDbA_o9fmSmMnMsQxumPUsUwnhMBEmvLQR4dDo0zm8_lzINf7TIeSlFRmQGCL33bqlmqCqfiQXeyq-bXfDWQpV-O30OX0Sl-iNIb",
      "@id": "",
      "url": "https://wa.me/919793434313",
      "telephone": "+919793434313",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ayodhya",
        "addressLocality": "Ayodhya",
        "postalCode": "224123",
        "addressCountry": "IN"
      }
    }
    </script>`;
};

const buildDir = path.join(__dirname, 'Build');
let count = 0;

filesToOptimize.forEach(relPath => {
    const filePath = path.join(buildDir, relPath);
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.basename(filePath);
    const data = seoData[fileName] || seoData['home.html'];

    // Safely remove existing tags
    content = content.replace(/<title>.*?<\/title>/gi, '');
    content = content.replace(/<meta name="description".*?>/gi, '');
    content = content.replace(/<meta name="keywords".*?>/gi, '');
    content = content.replace(/<meta property="og:.*?>/gi, '');
    content = content.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');

    const newSEOHead = `
    <!-- High-Level SEO Optimization -->
    <title>${data.title}</title>
    <meta name="description" content="${data.description}">
    <meta name="keywords" content="${globalKeywords}">
    
    <!-- Open Graph for Social Media -->
    <meta property="og:title" content="${data.title}">
    <meta property="og:description" content="${data.description}">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://lh3.googleusercontent.com/aida-public/AB6AXuAp6dJBAf7TKWyIEwPQNkF_46YwrkHV2hvYtCAK3h1lLUZfvB-FD7FvfavByp3JIYptnN4OB_tTamb0h02sxBEFsIeAxjfAygfFbmYESKgilQk8597DveR84OanGwoNqh4NDHL8iAeklzMxFSveNBIJ12oh8EV1yfiC_kKG2trWWyO6eY-PmxvMPPNrXR_5oTjLCsL2DNIk_q-2Rc_NCgvOVDZmJcjNVcAiZiHnp3fb67fyBkJDFuIJ">
    <meta property="og:url" content="https://wa.me/919793434313">

    <!-- Structured Data JSON-LD -->
    ${generateJSONLD(data.title, data.description)}
    `;

    // Inject into <head>
    content = content.replace(/<head>/i, '<head>\n' + newSEOHead);
    fs.writeFileSync(filePath, content);
    count++;
});
console.log('Successfully injected advanced SEO data into ' + count + ' files.');
