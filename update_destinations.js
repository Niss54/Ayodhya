const fs = require('fs');

const htmlContent = `
<main class="pt-[90px] px-margin-mobile pb-8 max-w-md mx-auto flex flex-col gap-8 md:max-w-4xl md:px-margin-desktop">
<!-- Intro Section -->
<section class="flex flex-col gap-2 text-center md:text-left mb-4">
<p class="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Sacred Sites</p>
<h2 class="font-display-lg-mobile text-display-lg-mobile text-on-surface leading-tight">
                Explore the <br/><span class="text-primary italic">Divine Heritage</span>
</h2>
<p class="text-on-surface-variant font-body-md mt-2 md:max-w-2xl">Discover the timeless temples, serene ghats, and spiritual landmarks of Ayodhya. Learn about their history and book a taxi to visit them instantly.</p>
</section>

<div class="flex flex-col gap-8 md:grid md:grid-cols-2">

<!-- Landmark 1 -->
<article class="relative w-full rounded-2xl overflow-hidden card-shadow bg-surface-container-lowest group transition-transform duration-300">
<div class="h-56 w-full bg-surface-variant relative overflow-hidden">
<img alt="Ram Mandir" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp6dJBAf7TKWyIEwPQNkF_46YwrkHV2hvYtCAK3h1lLUZfvB-FD7FvfavByp3JIYptnN4OB_tTamb0h02sxBEFsIeAxjfAygfFbmYESKgilQk8597DveR84OanGwoNqh4NDHL8iAeklzMxFSveNBIJ12oh8EV1yfiC_kKG2trWWyO6eY-PmxvMPPNrXR_5oTjLCsL2DNIk_q-2Rc_NCgvOVDZmJcjNVcAiZiHnp3fb67fyBkJDFuIJ"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div class="absolute top-4 right-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-full flex items-center gap-1 shadow-lg backdrop-blur-sm bg-opacity-90 border border-tertiary/50">
<span class="material-symbols-outlined text-[14px]">star</span>
<span class="font-label-caps text-[10px]">Must Visit</span>
</div>
</div>
<div class="relative p-5 bg-surface-container-lowest border-l-4 border-primary flex flex-col flex-grow">
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">Shri Ram Janmabhoomi Temple</h3>
<p class="font-body-md text-on-surface-variant mb-4">The sacred birthplace of Lord Rama, featuring magnificent traditional architecture and deep spiritual resonance. Experience the ultimate devotion at this highly revered site.</p>
<div class="flex items-center gap-4 text-secondary mb-6">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px]">location_on</span>
<span class="font-label-caps text-[10px]">Ramkot</span>
</div>
</div>
<a href="https://wa.me/919793434313" target="_blank" class="mt-auto block w-full text-center bg-primary text-on-primary py-3 rounded-lg font-label-caps text-label-caps hover:bg-surface-tint transition-colors shadow-sm">Book Taxi to Visit</a>
</div>
</article>

<!-- Landmark 2 -->
<article class="relative w-full rounded-2xl overflow-hidden card-shadow bg-surface-container-lowest group transition-transform duration-300">
<div class="h-56 w-full bg-surface-variant relative overflow-hidden">
<img alt="Hanuman Garhi" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs2XS0YTL40OGAKxQOiYOL9npiwwWGVM9AK4mUSfIi7jSAsRwn6Dtz2ZTX4OEjIBo0S5T6y2yDk7f3d3uy1pOsxQ-c7sqnXvfzaOdkib6R5Iy7PM__7X3yhStf7QdULJx7WOSv9RKk5-SCu2Il5K6sXNTA2_iH_NsEm-yW3OIJSf_ZcBlKk7OnuISBu4UuDargjneLVT3faQi84uiJIMyZ0t3SyCu0i7K2C3x_Dzi5TMRAunT59G6r"/>
</div>
<div class="relative p-5 bg-surface-container-lowest border-l-4 border-primary flex flex-col flex-grow">
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">Hanuman Garhi</h3>
<p class="font-body-md text-on-surface-variant mb-4">A historic 10th-century temple dedicated to Lord Hanuman. Situated on a mound, it is customary to visit this fortress temple before seeking darshan at the Ram Janmabhoomi.</p>
<div class="flex items-center gap-4 text-secondary mb-6">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px]">location_on</span>
<span class="font-label-caps text-[10px]">Sai Nagar</span>
</div>
</div>
<a href="https://wa.me/919793434313" target="_blank" class="mt-auto block w-full text-center bg-primary text-on-primary py-3 rounded-lg font-label-caps text-label-caps hover:bg-surface-tint transition-colors shadow-sm">Book Taxi to Visit</a>
</div>
</article>

<!-- Landmark 3 -->
<article class="relative w-full rounded-2xl overflow-hidden card-shadow bg-surface-container-lowest group transition-transform duration-300">
<div class="h-56 w-full bg-surface-variant relative overflow-hidden">
<img alt="Saryu Ghat" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc5ZQJ2QUqYvTn9O1cYW9qIJ3LgcGPSrkcBt-NyLiIWtmymLRZhGLYuG3Pb9VyFaJmH5Plso01lCikcdvSyR6PkOSOf2oibdVYYm6nCEnjRjD1K1T9SdkuYSnlROCY3dxCo307MZGcSwklZcebrNZ6kYY1Jd434dqaEGJ-Io02LvKc6IVuVOGPu68tOlp_FmzrMPp1Nd7jrambNU2KUgYKNcHwYbZLK6OdJ8PWOguPZJrxloSMPKbI"/>
</div>
<div class="relative p-5 bg-surface-container-lowest border-l-4 border-primary flex flex-col flex-grow">
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">Saryu Ghat & Ram Ki Paidi</h3>
<p class="font-body-md text-on-surface-variant mb-4">The sacred riverbanks where devotees take a holy dip. It comes alive during the mesmerizing evening Maha Aarti with hundreds of glowing diyas creating a mystical atmosphere.</p>
<div class="flex items-center gap-4 text-secondary mb-6">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px]">location_on</span>
<span class="font-label-caps text-[10px]">River Front</span>
</div>
</div>
<a href="https://wa.me/919793434313" target="_blank" class="mt-auto block w-full text-center bg-primary text-on-primary py-3 rounded-lg font-label-caps text-label-caps hover:bg-surface-tint transition-colors shadow-sm">Book Taxi to Visit</a>
</div>
</article>

<!-- Landmark 4 -->
<article class="relative w-full rounded-2xl overflow-hidden card-shadow bg-surface-container-lowest group transition-transform duration-300">
<div class="h-56 w-full bg-surface-variant relative overflow-hidden">
<img alt="Kanak Bhawan" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGlrsul4O3OpZfwjESkKwEgYzkyApfVv-llJu92J4SCfYLgqhLRu8MFa8VUOVqtnnVmBDzdaKvXWRfxRp5jue_5C0yn6dMy1teKafVPIDnK5cGiVqaI0GCKwqfVjlRumk7ojG-80D-yLnLAmPUVhj9CurLKLDf89q1PlyCdT95MGGIP2Xtz5V5_Fqrqrtj-8FxRyP0atIHgzZhApdoBOydn4DkcKqMs6BPVh_fdAtvhxsY7st1XNLW"/>
</div>
<div class="relative p-5 bg-surface-container-lowest border-l-4 border-primary flex flex-col flex-grow">
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">Kanak Bhawan</h3>
<p class="font-body-md text-on-surface-variant mb-4">The 'Golden Palace' gifted to Goddess Sita by Kaikeyi. It is renowned for its exquisite deities of Sita-Rama, ornate gold-detailed architecture, and continuous devotional music.</p>
<div class="flex items-center gap-4 text-secondary mb-6">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px]">location_on</span>
<span class="font-label-caps text-[10px]">Tulsi Nagar</span>
</div>
</div>
<a href="https://wa.me/919793434313" target="_blank" class="mt-auto block w-full text-center bg-primary text-on-primary py-3 rounded-lg font-label-caps text-label-caps hover:bg-surface-tint transition-colors shadow-sm">Book Taxi to Visit</a>
</div>
</article>

<!-- Landmark 5 -->
<article class="relative w-full rounded-2xl overflow-hidden card-shadow bg-surface-container-lowest group transition-transform duration-300">
<div class="h-56 w-full bg-surface-variant relative overflow-hidden">
<img alt="Nageshwarnath Temple" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkRU52o33E4mVJzy3-G8rgYfxUFfs4dTtBCeRSW6Wmxt8UXLmC7H9jppH9O9frBYtfNRJwqlHLHwpwuRPo77beGZdFw_qralbhsvuyzCE5ChX-uUy_ZfD0LXnqnH1pnUVjafiRkcOgtaoWD-62p6vnBC_-_E7JosvoyueVPwKz6bWuRnJ79HvhgwYVMWW6ApG0zu5wzaGAu1QYS_v1TUWB2HIAb7nKLJTllMBL-4WQLAClz2dYdjSf"/>
</div>
<div class="relative p-5 bg-surface-container-lowest border-l-4 border-primary flex flex-col flex-grow">
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">Nageshwarnath Temple</h3>
<p class="font-body-md text-on-surface-variant mb-4">Established by Kush (Lord Rama's son), this ancient Shiva temple survived through eras and is a focal point of Ayodhya's vibrant Mahashivaratri celebrations.</p>
<div class="flex items-center gap-4 text-secondary mb-6">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px]">location_on</span>
<span class="font-label-caps text-[10px]">Ram Ki Paidi</span>
</div>
</div>
<a href="https://wa.me/919793434313" target="_blank" class="mt-auto block w-full text-center bg-primary text-on-primary py-3 rounded-lg font-label-caps text-label-caps hover:bg-surface-tint transition-colors shadow-sm">Book Taxi to Visit</a>
</div>
</article>

<!-- Landmark 6 -->
<article class="relative w-full rounded-2xl overflow-hidden card-shadow bg-surface-container-lowest group transition-transform duration-300">
<div class="h-56 w-full bg-surface-variant relative overflow-hidden">
<img alt="Guptar Ghat" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFy7axfxd-x0zwv604Uh7JeUYrSI1esl7PRYRsaxCo58CY6OCYOhRdce-V4EbLO62pyfOfP7TD7RaQnxsBd454iS9vtDp3Ms1mFaDrBsim6JQ3PytHyAuNEVEOKercigUbc8duvbIirJSkGcoIIK82OvB932dqMKnNJ87xH2FuQKnAY8YY-MLBPJQBP_N3bUnoSC_jlzl3DnE5qhbS9rXFuhgMg3LusrYe47wE-owRrVi2-AoCT-4K"/>
</div>
<div class="relative p-5 bg-surface-container-lowest border-l-4 border-primary flex flex-col flex-grow">
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">Guptar Ghat</h3>
<p class="font-body-md text-on-surface-variant mb-4">A deeply revered site on the banks of the Saryu River. It is believed that Lord Rama took Jal Samadhi here to return to his cosmic abode, Vaikuntha.</p>
<div class="flex items-center gap-4 text-secondary mb-6">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px]">location_on</span>
<span class="font-label-caps text-[10px]">Cantonment Area</span>
</div>
</div>
<a href="https://wa.me/919793434313" target="_blank" class="mt-auto block w-full text-center bg-primary text-on-primary py-3 rounded-lg font-label-caps text-label-caps hover:bg-surface-tint transition-colors shadow-sm">Book Taxi to Visit</a>
</div>
</article>

<!-- Landmark 7 -->
<article class="relative w-full rounded-2xl overflow-hidden card-shadow bg-surface-container-lowest group transition-transform duration-300">
<div class="h-56 w-full bg-surface-variant relative overflow-hidden">
<img alt="Mani Parvat" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdSdEaE8Piyb6t9mQgLpPpC-VxSfJV-9u9AHtllqvrLF_iwgwbylwFQGwDQ-GI_jSDFQ7_jsm0f53JqdyTffIofiti5Ai7x5ZhnWrms1MhC_vqTp-2Fo2vvpZTTOWKAR7I7phbtlLklzEv6yJnfVIfiTBmhR1S691GuJwWC1lDeva6On_45j2GTYFFbSECZNuRQqiZ_UG4vUoLzju6vH5L2zi_x-2YXc7aian2y6ZhImkHd3AZTyvd"/>
</div>
<div class="relative p-5 bg-surface-container-lowest border-l-4 border-primary flex flex-col flex-grow">
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">Mani Parvat</h3>
<p class="font-body-md text-on-surface-variant mb-4">A mystical hillock believed to be a fragment of the Sanjeevani mountain carried by Lord Hanuman. Offers a panoramic view of the entire temple city and lush green surroundings.</p>
<div class="flex items-center gap-4 text-secondary mb-6">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px]">location_on</span>
<span class="font-label-caps text-[10px]">Kami Ganj</span>
</div>
</div>
<a href="https://wa.me/919793434313" target="_blank" class="mt-auto block w-full text-center bg-primary text-on-primary py-3 rounded-lg font-label-caps text-label-caps hover:bg-surface-tint transition-colors shadow-sm">Book Taxi to Visit</a>
</div>
</article>

</div>
</main>`;

let content = fs.readFileSync('./Build/destinations_mobile/destinations_mobile.html', 'utf8');
content = content.replace(/<main[\s\S]*?<\/main>/, htmlContent);
fs.writeFileSync('./Build/destinations_mobile/destinations_mobile.html', content);
console.log('Successfully updated destinations_mobile.html');
