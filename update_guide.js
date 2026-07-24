const fs = require('fs');

let content = fs.readFileSync('./Build/tour_guides_mobile/tour_guides_mobile.html', 'utf8');

const newSection = `
<section class="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
<!-- Guide Card: Pawan Gupta -->
<article class="bg-surface-container-lowest rounded-xl guide-card-shadow p-5 border-l-4 border-primary relative overflow-hidden">
<div class="flex gap-4 items-start mb-4">
<div class="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-secondary-fixed">
<img class="w-full h-full object-cover" alt="Pawan Gupta" src="../../public/pawan.png"/>
</div>
<div class="flex-1">
<div class="flex justify-between items-start">
<h3 class="font-headline-sm text-[20px] text-on-surface leading-tight">Pawan Gupta</h3>
<div class="flex items-center gap-1 bg-surface-variant px-2 py-1 rounded-md">
<span class="material-symbols-outlined text-[14px] text-secondary" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-label-caps text-[10px] text-on-surface font-bold">5.0</span>
</div>
</div>
<p class="text-secondary font-label-caps text-[11px] mt-1 mb-2">5+ Years Experience in Guidance</p>
<div class="flex flex-wrap gap-1.5">
<span class="bg-surface-container text-on-surface-variant text-[10px] px-2 py-0.5 rounded uppercase font-semibold">Hindi</span>
<span class="bg-surface-container text-on-surface-variant text-[10px] px-2 py-0.5 rounded uppercase font-semibold">Hinglish</span>
<span class="bg-surface-container text-on-surface-variant text-[10px] px-2 py-0.5 rounded uppercase font-semibold">English</span>
</div>
</div>
</div>
<p class="text-on-surface-variant text-[14px] leading-snug mb-5 line-clamp-2">Expert in providing deeply enriching tours of Ayodhya with 5+ years of guiding experience. Fluent in Hindi, English, and Hinglish for seamless communication.</p>
<div class="flex justify-between items-center border-t border-outline-variant/30 pt-4">
<div>
<span class="text-[12px] text-on-surface-variant">Starting from</span>
<div class="font-headline-sm text-[18px] text-on-surface">Price On Demand</div>
</div>
<a href="https://wa.me/919793434313" target="_blank" class="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-caps text-label-caps btn-hover-effect flex items-center gap-2">
                        Hire Guide
                        <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</article>
</section>
`;

// Replace the section
content = content.replace(/<section class="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">[\s\S]*?<\/section>/, newSection);

fs.writeFileSync('./Build/tour_guides_mobile/tour_guides_mobile.html', content);
console.log('Successfully updated expert guides');
