const fs = require('fs');
const path = require('path');

// 1. Copy images
const brainDir = 'C:\\Users\\nisha\\.gemini\\antigravity\\brain\\0c048952-ec5d-414b-af7e-4a4a22c7db62';
const publicDir = './public';

fs.copyFileSync(path.join(brainDir, 'ayodhyam_hotel_1784912801455.png'), path.join(publicDir, 'ayodhyam.png'));
fs.copyFileSync(path.join(brainDir, 'praveg_saryu_resort_1784912917196.png'), path.join(publicDir, 'praveg.png'));
fs.copyFileSync(path.join(brainDir, 'budget_homestay_1784912942175.png'), path.join(publicDir, 'budget1.png'));
fs.copyFileSync(path.join(brainDir, 'budget_hotel_1784912964627.png'), path.join(publicDir, 'budget2.png'));

// 2. Modify HTML
let content = fs.readFileSync('./Build/hotels_rooms_mobile/hotels_rooms_mobile.html', 'utf8');

const createCard = (title, img, rating, desc) => `
<article class="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[380px] bg-surface-container-lowest rounded-xl shadow-[0_8px_32px_rgba(255,102,17,0.08)] overflow-hidden border-l-4 border-primary hover:shadow-[0_12px_40px_rgba(255,102,17,0.12)] transition-shadow duration-300 flex flex-col group">
<div class="relative h-48 md:h-56 overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="${title}" src="${img}"/>
<div class="absolute top-4 right-4 bg-surface/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
<span class="material-symbols-outlined text-secondary text-sm fill-icon">star</span>
<span class="font-label-caps text-label-caps text-on-surface font-bold">${rating}</span>
</div>
</div>
<div class="p-5 flex flex-col flex-1">
<div class="flex justify-between items-start mb-2">
<h2 class="font-headline-sm text-headline-sm text-on-surface leading-tight">${title}</h2>
</div>
<p class="font-body-md text-[14px] text-on-surface-variant mb-6 line-clamp-3">${desc}</p>
<div class="mt-auto flex items-center justify-between border-t border-outline-variant/30 pt-4">
<div>
<span class="font-label-caps text-[10px] text-on-surface-variant uppercase block mb-1">Starting from</span>
<span class="font-headline-sm text-[18px] text-primary">Price On Demand</span>
</div>
<a href="https://wa.me/919793434313" target="_blank" class="bg-primary text-on-primary px-4 py-2 rounded-full font-label-caps text-[11px] hover:bg-surface-tint transition-colors uppercase inline-block text-center shadow-md shadow-primary/20">
                            Book Hotel
                        </a>
</div>
</div>
</article>
`;

const hotelsHTML = `
<!-- TAB 1: HOTELS CONTENT -->
<div class="px-margin-mobile md:px-margin-desktop flex flex-wrap justify-center gap-6 md:gap-8" id="content-hotels">
${createCard('Park Inn by Radisson', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnK9PKOnyTlKrWeoOihMXa8R7De1jGSZYKNwUU7PE3CQhZ9GjXq7Hw92puCxy0WqG-6AV2cGVODd6E_rjPcZUKCIId2gn0sEk_QgM3RwYjM17aHiP44Th_SjMMxojg7-9G1WtfM2hfSCdhFV8nHCRNOhtyOL6Ahv5EBJ_JCkUiRwTgJR5Gh5aZL-A6lhS7cdtVXTBbhk81ty-yr8EwpE54Qfd9eMpmRtfPLHvT2PmhQ2BIo8jysYFg', '4.8', 'A highly rated contemporary choice featuring stylish rooms, an on-site restaurant, and excellent service for leisure and business travelers.')}
${createCard('The Ramayana Hotel', 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0JVsSPWi7hiDMJVRChlakPwNihxPcBiyiCEeGxtnasmj0Su3rpoo1IIwTufiRrpzpZuhtZsmljrY4TFL3T7ksY88UlxqGxfSwgjegKHJadZX-DFaum1hqH6rprTcGk2y2naSkClqjHQqTihP6hEN_md4A1RD3CM4YQgenyIVefLxwP4lpAQuTcyUSG5iA9JtlosgKThbFUx_UoFobX3NgKjifei0YLDrZLy2L_d48guhd6iw0a_06', '4.9', 'Known for its heritage-style interiors and royal atmosphere, offering a premium experience with traditional multi-cuisine dining.')}
${createCard('Ayodhyam (IHCL SeleQtions)', '../../public/ayodhyam.png', '5.0', 'A prominent premium property offering high-end services, sophisticated ambiance, and an elevated experience in Ayodhya.')}
${createCard('Praveg Saryu Resort', '../../public/praveg.png', '4.7', 'Offers a unique, upscale resort experience, featuring luxury cottages and tents in the serene Ram Katha Park area next to the river.')}
${createCard('Shree Balaji Home Stay', '../../public/budget1.png', '4.5', 'A highly popular and cost-effective homestay offering clean rooms, friendly hospitality, and essential amenities near major landmarks.')}
${createCard('Hotel Sahu Inn', '../../public/budget2.png', '4.4', 'A well-regarded budget hotel providing clean and convenient stays with essential amenities like Wi-Fi and air conditioning in a central location.')}
</div>
`;

content = content.replace(/<!-- TAB 1: HOTELS CONTENT -->[\s\S]*?<!-- TAB 2: ROOMS CONTENT -->/, hotelsHTML + '\n<!-- TAB 2: ROOMS CONTENT -->');

fs.writeFileSync('./Build/hotels_rooms_mobile/hotels_rooms_mobile.html', content);
console.log('Successfully updated to 6 centered hotels.');
