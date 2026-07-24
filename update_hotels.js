const fs = require('fs');

let content = fs.readFileSync('./Build/hotels_rooms_mobile/hotels_rooms_mobile.html', 'utf8');

const newHotelsContent = `
<!-- TAB 1: HOTELS CONTENT -->
<div class="px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="content-hotels">
<!-- Hotel Card 1 -->
<article class="bg-surface-container-lowest rounded-xl shadow-[0_8px_32px_rgba(255,102,17,0.08)] overflow-hidden border-l-4 border-primary hover:shadow-[0_12px_40px_rgba(255,102,17,0.12)] transition-shadow duration-300 flex flex-col group">
<div class="relative h-48 md:h-64 overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Park Inn by Radisson Ayodhya" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnK9PKOnyTlKrWeoOihMXa8R7De1jGSZYKNwUU7PE3CQhZ9GjXq7Hw92puCxy0WqG-6AV2cGVODd6E_rjPcZUKCIId2gn0sEk_QgM3RwYjM17aHiP44Th_SjMMxojg7-9G1WtfM2hfSCdhFV8nHCRNOhtyOL6Ahv5EBJ_JCkUiRwTgJR5Gh5aZL-A6lhS7cdtVXTBbhk81ty-yr8EwpE54Qfd9eMpmRtfPLHvT2PmhQ2BIo8jysYFg"/>
<div class="absolute top-4 right-4 bg-surface/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
<span class="material-symbols-outlined text-secondary text-sm fill-icon">star</span>
<span class="font-label-caps text-label-caps text-on-surface font-bold">4.8</span>
</div>
</div>
<div class="p-6 flex flex-col flex-1">
<div class="flex justify-between items-start mb-2">
<h2 class="font-headline-sm text-headline-sm text-on-surface">Park Inn by Radisson</h2>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">A highly rated contemporary choice featuring stylish rooms, an on-site restaurant, and excellent service for leisure and business travelers.</p>
<div class="mt-auto flex items-center justify-between border-t border-outline-variant/30 pt-4">
<div>
<span class="font-label-caps text-[10px] text-on-surface-variant uppercase block mb-1">Starting from</span>
<span class="font-headline-sm text-[20px] text-primary">Price On Demand</span>
</div>
<a href="https://wa.me/919793434313" target="_blank" class="bg-primary text-on-primary px-4 py-2 rounded-full font-label-caps text-label-caps hover:bg-surface-tint transition-colors uppercase inline-block text-center shadow-md shadow-primary/20">
                            Book Hotel
                        </a>
</div>
</div>
</article>
<!-- Hotel Card 2 -->
<article class="bg-surface-container-lowest rounded-xl shadow-[0_8px_32px_rgba(255,102,17,0.08)] overflow-hidden border-l-4 border-primary hover:shadow-[0_12px_40px_rgba(255,102,17,0.12)] transition-shadow duration-300 flex flex-col group">
<div class="relative h-48 md:h-64 overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="The Ramayana Hotel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0JVsSPWi7hiDMJVRChlakPwNihxPcBiyiCEeGxtnasmj0Su3rpoo1IIwTufiRrpzpZuhtZsmljrY4TFL3T7ksY88UlxqGxfSwgjegKHJadZX-DFaum1hqH6rprTcGk2y2naSkClqjHQqTihP6hEN_md4A1RD3CM4YQgenyIVefLxwP4lpAQuTcyUSG5iA9JtlosgKThbFUx_UoFobX3NgKjifei0YLDrZLy2L_d48guhd6iw0a_06"/>
<div class="absolute top-4 right-4 bg-surface/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
<span class="material-symbols-outlined text-secondary text-sm fill-icon">star</span>
<span class="font-label-caps text-label-caps text-on-surface font-bold">4.9</span>
</div>
</div>
<div class="p-6 flex flex-col flex-1">
<div class="flex justify-between items-start mb-2">
<h2 class="font-headline-sm text-headline-sm text-on-surface">The Ramayana Hotel</h2>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">Known for its heritage-style interiors and royal atmosphere, offering a premium experience with traditional multi-cuisine dining.</p>
<div class="mt-auto flex items-center justify-between border-t border-outline-variant/30 pt-4">
<div>
<span class="font-label-caps text-[10px] text-on-surface-variant uppercase block mb-1">Starting from</span>
<span class="font-headline-sm text-[20px] text-primary">Price On Demand</span>
</div>
<a href="https://wa.me/919793434313" target="_blank" class="bg-primary text-on-primary px-4 py-2 rounded-full font-label-caps text-label-caps hover:bg-surface-tint transition-colors uppercase inline-block text-center shadow-md shadow-primary/20">
                            Book Hotel
                        </a>
</div>
</div>
</article>
</div>
`;

// Extract existing hotels content
content = content.replace(/<!-- TAB 1: HOTELS CONTENT -->[\s\S]*?<!-- TAB 2: ROOMS CONTENT -->/, newHotelsContent + '\n<!-- TAB 2: ROOMS CONTENT -->');

fs.writeFileSync('./Build/hotels_rooms_mobile/hotels_rooms_mobile.html', content);
console.log('Successfully updated hotels.');
