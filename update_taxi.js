const fs = require('fs');
let content = fs.readFileSync('./Build/car_rental_mobile/carrental.html', 'utf8');

// Replace header section
const headerRegex = /<header class="pt-12 md:pt-40 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-12">[\s\S]*?<\/header>/;
const newHeader = `<header class="pt-12 md:pt-40 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-12 text-center">
<h1 class="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-4">Clean, Comfortable & Reliable Vehicles</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">From compact cars to spacious SUVs, we have the right cab for every journey — all well-maintained and driven by professionals.</p>
</header>`;
content = content.replace(headerRegex, newHeader);

// Replace main content
const mainRegex = /<main class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap">[\s\S]*?<\/main>/;
const newMain = `<main class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap">
<div class="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
<!-- Card 1: Swift Dzire -->
<article class="bg-surface-container-lowest rounded-xl saffron-shadow overflow-hidden border-l-4 border-l-primary flex flex-col group hover:-translate-y-1 transition-transform duration-300">
<div class="h-48 bg-surface-container w-full relative overflow-hidden">
<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyw8vkIP5TO6wcLy_kS-5sEUAG1YPoHV_qofe61PTxuPdJ9o8rBnoquceN-bh_AneHmEwgkeh2wlYrJNnxlIyYci8Br776n4G_-p6RFJT7zwrZRX5Fm9vpbZlNH5Bf9ut7naRrTw4kodmzNgg0IDbA_o9fmSmMnMsQxumPUsUwnhMBEmvLQR4dDo0zm8_lzINf7TIeSlFRmQGCL33bqlmqCqfiQXeyq-bXfDWQpV-O30OX0Sl-iNIb" alt="Swift Dzire" class="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-700">
<div class="absolute top-4 right-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-full font-label-caps text-label-caps flex items-center gap-1 shadow-sm">
<span class="material-symbols-outlined text-[14px]" style="font-variation-settings: 'FILL' 1;">ac_unit</span> AC
</div>
</div>
<div class="p-6 flex-grow flex flex-col">
<div class="flex justify-between items-start mb-2">
<h2 class="font-headline-sm text-headline-sm text-on-surface">Swift Dzire</h2>
<span class="material-symbols-outlined text-primary text-[28px]">directions_car</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mb-4">Perfect for small families and city travel.</p>
<div class="flex flex-wrap gap-2 mb-6">
<span class="inline-flex items-center gap-1 px-3 py-1 bg-surface-container rounded-lg font-label-caps text-label-caps text-on-surface-variant">
<span class="material-symbols-outlined text-[16px]">group</span> 4 Seater
</span>
<span class="inline-flex items-center gap-1 px-3 py-1 bg-surface-container rounded-lg font-label-caps text-label-caps text-on-surface-variant">
<span class="material-symbols-outlined text-[16px]">ac_unit</span> Fully AC Cab
</span>
</div>
<div class="mt-auto pt-4 border-t border-outline-variant/30 flex justify-between items-center">
<div>
<div class="font-headline-sm text-headline-sm text-primary">Price On Demand</div>
</div>
<a href="https://wa.me/919793434313" target="_blank" class="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-caps text-label-caps hover:bg-surface-tint transition-colors shadow-sm hover:shadow-md hover:shadow-primary/20">Book Now</a>
</div>
</div>
</article>

<!-- Card 2: Maruti Ertiga -->
<article class="bg-surface-container-lowest rounded-xl saffron-shadow overflow-hidden border-l-4 border-l-primary flex flex-col group hover:-translate-y-1 transition-transform duration-300">
<div class="h-48 bg-surface-container w-full relative overflow-hidden">
<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4ZwwYMAmWF5efPqGBiy3EqbD1WMInVtiWKljN8D1kTKmGSPHRmcN4RiD7lDPv4DRoCuqVr9U3MrV5F0LJZJOMOE8eiL2vqNkxvZd673-GGUQjT96d05-oILWUQp0nfQCQtQ-GO9hLKOqeg1pBH4qYgZ6iima3k4vfP9C41xEzQU9jTqFbTMnfgewkM8xFagzhHbUsGbb2PoPFgqj3IBtuZJAW7GRxAtMwcaBN5ZOGWByNdJuZpJa3" alt="Maruti Ertiga" class="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-700">
<div class="absolute top-4 right-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-full font-label-caps text-label-caps flex items-center gap-1 shadow-sm">
<span class="material-symbols-outlined text-[14px]" style="font-variation-settings: 'FILL' 1;">ac_unit</span> AC
</div>
</div>
<div class="p-6 flex-grow flex flex-col">
<div class="flex justify-between items-start mb-2">
<h2 class="font-headline-sm text-headline-sm text-on-surface">Maruti Ertiga</h2>
<span class="material-symbols-outlined text-primary text-[28px]">airport_shuttle</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mb-4">Spacious 6-seater, ideal for large groups and comfortable rides.</p>
<div class="flex flex-wrap gap-2 mb-6">
<span class="inline-flex items-center gap-1 px-3 py-1 bg-surface-container rounded-lg font-label-caps text-label-caps text-on-surface-variant">
<span class="material-symbols-outlined text-[16px]">group</span> 6 Seater
</span>
<span class="inline-flex items-center gap-1 px-3 py-1 bg-surface-container rounded-lg font-label-caps text-label-caps text-on-surface-variant">
<span class="material-symbols-outlined text-[16px]">ac_unit</span> Fully AC
</span>
</div>
<div class="mt-auto pt-4 border-t border-outline-variant/30 flex justify-between items-center">
<div>
<div class="font-headline-sm text-headline-sm text-primary">Price On Demand</div>
</div>
<a href="https://wa.me/919793434313" target="_blank" class="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-caps text-label-caps hover:bg-surface-tint transition-colors shadow-sm hover:shadow-md hover:shadow-primary/20">Book Now</a>
</div>
</div>
</article>
</div>
</main>`;
content = content.replace(mainRegex, newMain);

content = content.replace(/<title>.*?<\/title>/, '<title>Ayodhya Mahakaal - Taxi Service</title>');

fs.writeFileSync('./Build/car_rental_mobile/carrental.html', content);
console.log('Successfully updated carrental.html');
