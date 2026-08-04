const fs = require('fs');

const htmlContent = `<!DOCTYPE html>
<html class="scroll-smooth" lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
    <link rel="icon" type="image/png" href="/public/Mahakal.png">

    <!-- Primary SEO -->
    <title>Girls Hostel in Ayodhya 2026: Safe Stay Guide for Women Pilgrims</title>
    <meta name="description" content="Planning a solo trip or women's group yatra to Ayodhya? Read our 2026 safe stay guide covering checklists, best areas, and cost comparisons for women pilgrims.">
    <meta name="keywords" content="girls hostel Ayodhya, women safe stay Ayodhya, solo female travel Ayodhya, Ayodhya accommodation for ladies, girls PG Ayodhya, safe hotels near Ram Mandir">
    <link rel="canonical" href="https://mahakaltourstravel.in/blog/girls-hostel-ayodhya-guide/">
    <meta name="robots" content="index, follow">
    <meta name="geo.region" content="IN-UP">
    <meta name="geo.placename" content="Ayodhya">
    <meta name="geo.position" content="26.7922;82.2046">
    <meta name="theme-color" content="#E8690A">

    <!-- Styles -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap" />
    <link rel="stylesheet" href="/dist/styles.css?v=${Date.now()}" />

    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is it safe for a woman to travel solo to Ayodhya?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Ayodhya is generally very safe for solo female travelers due to heavy security around the Ram Mandir. However, choosing a dedicated women's accommodation adds an essential layer of security."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best area to stay in Ayodhya for women?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Ram Path Corridor and Hanuman Garhi areas are the safest. They are well-lit, heavily patrolled, and close to the main temples."
          }
        },
        {
          "@type": "Question",
          "name": "Are Dharamshalas safe for solo female travelers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While Dharamshalas are spiritually enriching and budget-friendly, they often lack strict security measures like CCTV and ID verification, making dedicated girls hostels a safer alternative for solo travelers."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a girls hostel cost in Ayodhya?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A bed in a verified girls hostel in Ayodhya typically ranges from ₹299 to ₹699 per night, depending on the facilities and proximity to the temple."
          }
        },
        {
          "@type": "Question",
          "name": "Do girls hostels in Ayodhya provide food?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most premium girls hostels, like Mahakaal Tours Hostel, provide an in-house pure vegetarian kitchen and tiffin services."
          }
        },
        {
          "@type": "Question",
          "name": "How early should I book for Deepotsav or Ram Navami?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For major festivals like Deepotsav and Ram Navami, you must book your accommodation at least 6 to 8 weeks in advance."
          }
        }
      ]
    }
    </script>
</head>
<body class="bg-surface text-on-surface font-body-md overflow-x-hidden pb-[100px]">

<!-- Header Nav -->
<header class="fixed top-0 left-0 right-0 z-50 mx-auto mt-6 w-[92%] lg:w-[80%] rounded-full bg-surface/80 backdrop-blur-xl border border-outline-variant/30 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex justify-between items-center px-8 py-2 max-w-[1100px]">
  <div class="flex items-center gap-3">
    <div class="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
        <img src="/public/Mahakal.png" alt="Mahakaal Logo" class="w-full h-full object-cover">
    </div>
    <div class="flex flex-col">
        <span class="font-display-lg text-primary text-[18px] leading-tight">Mahakaal</span>
        <span class="font-label-caps text-on-surface-variant text-[8px] tracking-[0.2em] uppercase">Tours & Travels</span>
    </div>
  </div>
  <nav class="hidden md:flex gap-8 items-center font-label-caps text-[12px] font-semibold tracking-wider">
      <a href="/" class="text-on-surface-variant hover:text-primary transition-colors uppercase">Home</a>
      <a href="/ayodhya-tour-packages/" class="text-on-surface-variant hover:text-primary transition-colors uppercase">Tours</a>
      <a href="/ayodhya-taxi-service/" class="text-on-surface-variant hover:text-primary transition-colors uppercase">Taxi</a>
      <a href="/ayodhya-local-guides/" class="text-on-surface-variant hover:text-primary transition-colors uppercase">Guides</a>
  </nav>
  <div class="flex items-center gap-4">
      <button class="lang-toggle-btn text-on-surface-variant hover:text-primary font-label-caps text-xs font-bold w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center transition-colors">EN</button>
      <button class="dark-toggle-btn text-on-surface-variant hover:text-primary transition-colors" onclick="toggleDarkMode()">
          <span class="material-symbols-outlined dark-icon">light_mode</span>
      </button>
      <a href="https://wa.me/919793434313" class="hidden md:inline-flex bg-primary text-on-primary px-6 py-2 rounded-full font-label-caps text-xs font-bold hover:bg-primary-container transition-colors items-center gap-2">Book Now</a>
  </div>
</header>

<main class="max-w-[800px] mx-auto px-4 pt-32 pb-24">
    <!-- Breadcrumbs -->
    <nav class="text-sm font-label-caps tracking-wider text-on-surface-variant mb-8 flex items-center gap-2">
        <a href="/" class="hover:text-primary transition-colors">HOME</a>
        <span class="material-symbols-outlined text-[14px]">chevron_right</span>
        <a href="/blog/" class="hover:text-primary transition-colors">BLOG</a>
        <span class="material-symbols-outlined text-[14px]">chevron_right</span>
        <span class="text-primary font-bold">GIRLS HOSTEL GUIDE 2026</span>
    </nav>

    <!-- Blog Header -->
    <header class="mb-12">
        <h1 class="font-display-lg text-4xl md:text-5xl text-primary mb-6 leading-tight">Girls Hostel in Ayodhya 2026: Safe Stay Guide for Women Pilgrims</h1>
        <div class="flex flex-wrap items-center gap-6 text-sm text-on-surface-variant font-label-caps">
            <span class="flex items-center gap-2"><span class="material-symbols-outlined text-lg">calendar_today</span> Updated: August 2026</span>
            <span class="flex items-center gap-2"><span class="material-symbols-outlined text-lg">schedule</span> 6 Min Read</span>
            <span class="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full"><span class="material-symbols-outlined text-lg">shield</span> Women Safety Guide</span>
        </div>
    </header>

    <!-- Blog Content -->
    <article class="prose prose-lg dark:prose-invert prose-headings:font-headline-sm prose-headings:text-on-surface prose-p:text-on-surface-variant prose-a:text-primary max-w-none">
        
        <p class="lead text-xl text-on-surface mb-8">Traveling to Ayodhya is a deeply spiritual experience. However, with millions of devotees visiting the city annually, safety and secure accommodation are paramount for solo female travelers and women’s yatra groups. This 2026 guide breaks down everything you need to know about booking a <strong>girls hostel in Ayodhya</strong>.</p>

        <h2 class="text-2xl font-bold text-primary mt-10 mb-4 border-b border-outline-variant/30 pb-2">1. Why Women Need a Dedicated Safe-Stay Plan</h2>
        <p>Ayodhya has transformed into a global pilgrimage hub following the inauguration of the Shri Ram Janmabhoomi Mandir. The daily footfall often crosses 1-2 lakh visitors, and during festival seasons, the city overflows with devotees. </p>
        <p>For female travelers, navigating dense crowds, managing early morning aarti schedules (often at 4:30 AM), and returning late from the Saryu Ghat can be daunting without a secure base camp. A dedicated safe-stay plan ensures that you have a verified, secure environment to rest in, giving you the peace of mind to focus entirely on your spiritual journey.</p>

        <h2 class="text-2xl font-bold text-primary mt-10 mb-4 border-b border-outline-variant/30 pb-2">2. Types of Women’s Accommodation in Ayodhya</h2>
        <p>When searching for a place to stay, you generally have four options:</p>
        <ul class="space-y-3 my-6">
            <li class="flex items-start gap-3"><span class="material-symbols-outlined text-secondary mt-1">check_circle</span> <div><strong>Dedicated Girls Hostels:</strong> The safest option. These are female-only premises with strict security, ID checks, and female staff. Ideal for solo travelers and students.</div></li>
            <li class="flex items-start gap-3"><span class="material-symbols-outlined text-secondary mt-1">check_circle</span> <div><strong>Dharamshalas:</strong> Highly budget-friendly and culturally rich, but they are open to everyone. Security is basic, and facilities are often shared.</div></li>
            <li class="flex items-start gap-3"><span class="material-symbols-outlined text-secondary mt-1">check_circle</span> <div><strong>Guest Houses:</strong> Privately run homes. Safety varies drastically depending on the owner and location.</div></li>
            <li class="flex items-start gap-3"><span class="material-symbols-outlined text-secondary mt-1">check_circle</span> <div><strong>Hotels:</strong> Offer privacy and comfort but lack the community feel of a hostel. They are also significantly more expensive.</div></li>
        </ul>

        <div class="bg-error-container/20 border-l-4 border-error p-6 rounded-r-xl my-8">
            <h3 class="flex items-center gap-2 text-error font-bold mb-2"><span class="material-symbols-outlined">gpp_maybe</span> The Essential Safety Checklist</h3>
            <p class="text-on-surface-variant text-sm mb-4">Never book an accommodation in Ayodhya without verifying these 5 critical safety protocols:</p>
            <ol class="list-decimal list-inside space-y-2 text-sm text-on-surface">
                <li><strong>CCTV Surveillance:</strong> Are the main entrances and corridors monitored 24/7?</li>
                <li><strong>Female Staff/Guards:</strong> Is there a female warden or guard present on the property?</li>
                <li><strong>Emergency Contacts:</strong> Does the accommodation have an SOS protocol or on-call manager?</li>
                <li><strong>No-Male-Visitor Policy:</strong> Are strict visitor curfews enforced (e.g., no male guests after 9 PM)?</li>
                <li><strong>ID Verification:</strong> Does the property mandate strict Government ID checks before check-in?</li>
            </ol>
        </div>

        <h2 class="text-2xl font-bold text-primary mt-10 mb-4 border-b border-outline-variant/30 pb-2">4. Safest Areas Near Ram Mandir for Solo Women</h2>
        <p>Location is everything. The safest areas for women are those that are well-lit, heavily patrolled by UP Police, and close to the main shrines:</p>
        <ul>
            <li><strong>Ram Path Corridor:</strong> The newly developed, wide corridor leading directly to the temple. It is the most secure and well-lit zone in the city.</li>
            <li><strong>Hanuman Garhi Area:</strong> Always bustling with pilgrims and police presence. Excellent for those who want to be in the heart of the spiritual activity.</li>
        </ul>
        <p><em>Tip: Avoid staying in extreme outskirts or poorly lit alleyways (galis) if you plan to attend the Mangala Aarti in the early hours.</em></p>

        <h2 class="text-2xl font-bold text-primary mt-10 mb-4 border-b border-outline-variant/30 pb-2">5. Cost Comparison: Where Should You Stay?</h2>
        <div class="overflow-x-auto my-6">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-surface-container-high border-b border-outline-variant/30">
                        <th class="p-4 font-bold text-on-surface">Type of Stay</th>
                        <th class="p-4 font-bold text-on-surface">Price Range (Per Night)</th>
                        <th class="p-4 font-bold text-on-surface">Safety Level</th>
                    </tr>
                </thead>
                <tbody class="text-on-surface-variant">
                    <tr class="border-b border-outline-variant/20">
                        <td class="p-4">Dharamshala</td>
                        <td class="p-4">₹0 – ₹200</td>
                        <td class="p-4 text-secondary">Moderate (Open access)</td>
                    </tr>
                    <tr class="border-b border-outline-variant/20 bg-primary/5">
                        <td class="p-4 font-bold text-primary">Verified Girls Hostel</td>
                        <td class="p-4 font-bold text-primary">₹299 – ₹699</td>
                        <td class="p-4 font-bold text-primary">High (Restricted access)</td>
                    </tr>
                    <tr>
                        <td class="p-4">Standard Hotel</td>
                        <td class="p-4">₹800 – ₹2,500+</td>
                        <td class="p-4 text-on-surface">Good (Private, but mixed)</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2 class="text-2xl font-bold text-primary mt-10 mb-4 border-b border-outline-variant/30 pb-2">6. Festival Season Booking Tips</h2>
        <p>During mega-events like <strong>Deepotsav (Diwali)</strong> and <strong>Ram Navami</strong>, Ayodhya experiences an influx of over 20-30 lakh devotees. Accommodations sell out instantly, and walk-in availability is practically zero.</p>
        <p><strong>Golden Rule:</strong> For Deepotsav and Ram Navami, you must secure your booking <strong>6 to 8 weeks in advance</strong>. Ensure you have written confirmation (via WhatsApp or Email) before boarding your train or flight.</p>

        <div class="bg-surface-container rounded-2xl p-8 my-10 border border-primary/20 shadow-lg">
            <h2 class="text-2xl font-display-lg text-primary mb-4">7. The Mahakaal Tours Girls Hostel</h2>
            <p class="mb-4">At Mahakaal Tours, we operate a premium, highly secure girls hostel located just a <strong>10-minute walk from Ram Mandir</strong>. Designed specifically for female pilgrims and students, our facility guarantees peace of mind.</p>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary">shield</span> 24/7 Female Security Guard</li>
                <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary">videocam</span> CCTV in Common Areas</li>
                <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary">restaurant</span> Pure Veg Tiffin Service</li>
                <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary">wifi</span> Free High-Speed Wi-Fi</li>
            </ul>
            <a href="https://wa.me/919793434313" class="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-bold hover:bg-primary-container transition-colors shadow-md">
                <span class="material-symbols-outlined">chat</span> Check Bed Availability on WhatsApp
            </a>
        </div>

        <h2 class="text-2xl font-bold text-primary mt-12 mb-6 border-b border-outline-variant/30 pb-2">Frequently Asked Questions</h2>
        <div class="space-y-4">
            <details class="bg-surface-container rounded-xl p-4 border border-outline-variant/20 open:bg-surface-container-high transition-colors">
                <summary class="font-bold text-on-surface cursor-pointer list-none flex justify-between items-center">
                    Is it safe for a woman to travel solo to Ayodhya?
                    <span class="material-symbols-outlined">expand_more</span>
                </summary>
                <div class="pt-3 mt-3 border-t border-outline-variant/20 text-sm">
                    Yes, Ayodhya is generally very safe for solo female travelers due to heavy security around the Ram Mandir. However, choosing a dedicated women's accommodation adds an essential layer of security.
                </div>
            </details>
            <details class="bg-surface-container rounded-xl p-4 border border-outline-variant/20 open:bg-surface-container-high transition-colors">
                <summary class="font-bold text-on-surface cursor-pointer list-none flex justify-between items-center">
                    What is the best area to stay in Ayodhya for women?
                    <span class="material-symbols-outlined">expand_more</span>
                </summary>
                <div class="pt-3 mt-3 border-t border-outline-variant/20 text-sm">
                    The Ram Path Corridor and Hanuman Garhi areas are the safest. They are well-lit, heavily patrolled, and close to the main temples.
                </div>
            </details>
            <details class="bg-surface-container rounded-xl p-4 border border-outline-variant/20 open:bg-surface-container-high transition-colors">
                <summary class="font-bold text-on-surface cursor-pointer list-none flex justify-between items-center">
                    Are Dharamshalas safe for solo female travelers?
                    <span class="material-symbols-outlined">expand_more</span>
                </summary>
                <div class="pt-3 mt-3 border-t border-outline-variant/20 text-sm">
                    While Dharamshalas are spiritually enriching and budget-friendly, they often lack strict security measures like CCTV and ID verification, making dedicated girls hostels a safer alternative for solo travelers.
                </div>
            </details>
            <details class="bg-surface-container rounded-xl p-4 border border-outline-variant/20 open:bg-surface-container-high transition-colors">
                <summary class="font-bold text-on-surface cursor-pointer list-none flex justify-between items-center">
                    How much does a girls hostel cost in Ayodhya?
                    <span class="material-symbols-outlined">expand_more</span>
                </summary>
                <div class="pt-3 mt-3 border-t border-outline-variant/20 text-sm">
                    A bed in a verified girls hostel in Ayodhya typically ranges from ₹299 to ₹699 per night, depending on the facilities and proximity to the temple.
                </div>
            </details>
            <details class="bg-surface-container rounded-xl p-4 border border-outline-variant/20 open:bg-surface-container-high transition-colors">
                <summary class="font-bold text-on-surface cursor-pointer list-none flex justify-between items-center">
                    Do girls hostels in Ayodhya provide food?
                    <span class="material-symbols-outlined">expand_more</span>
                </summary>
                <div class="pt-3 mt-3 border-t border-outline-variant/20 text-sm">
                    Most premium girls hostels, like Mahakaal Tours Hostel, provide an in-house pure vegetarian kitchen and tiffin services.
                </div>
            </details>
            <details class="bg-surface-container rounded-xl p-4 border border-outline-variant/20 open:bg-surface-container-high transition-colors">
                <summary class="font-bold text-on-surface cursor-pointer list-none flex justify-between items-center">
                    How early should I book for Deepotsav or Ram Navami?
                    <span class="material-symbols-outlined">expand_more</span>
                </summary>
                <div class="pt-3 mt-3 border-t border-outline-variant/20 text-sm">
                    For major festivals like Deepotsav and Ram Navami, you must book your accommodation at least 6 to 8 weeks in advance.
                </div>
            </details>
        </div>

    </article>
</main>

<script src="/translations.js"></script>
<!-- Floating Bottom Nav Bar -->
<nav class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[500px] bg-surface-container-highest/90 backdrop-blur-xl border border-outline-variant/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-full flex justify-between items-center px-6 py-2.5">
  <a href="/" class="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors w-14">
    <span class="material-symbols-outlined text-[24px]">home</span>
    <span class="text-[10px] font-label-caps font-bold">Home</span>
  </a>
  <a href="/ayodhya-tour-packages/" class="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors w-14">
    <span class="material-symbols-outlined text-[24px]">map</span>
    <span class="text-[10px] font-label-caps font-bold">Tours</span>
  </a>
  <a href="/ayodhya-local-guides/" class="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors w-14">
    <span class="material-symbols-outlined text-[24px]">location_on</span>
    <span class="text-[10px] font-label-caps font-bold">Guides</span>
  </a>
  <a href="/hotels-in-ayodhya/" class="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors w-14">
    <span class="material-symbols-outlined text-[24px]">bed</span>
    <span class="text-[10px] font-label-caps font-bold">Rooms</span>
  </a>
  <a href="/contact/" class="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors w-14">
    <span class="material-symbols-outlined text-[24px]">chat</span>
    <span class="text-[10px] font-label-caps font-bold">Contact</span>
  </a>
</nav>

<!-- Floating Social FABs -->
<div class="fixed bottom-28 right-4 z-40 flex flex-col gap-4">
  <a href="https://www.instagram.com/pawangupta7700" target="_blank" class="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform" style="background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);">
    <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.181a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
  </a>
  <a href="https://wa.me/919793434313" target="_blank" class="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform bg-[#25D366]">
    <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
  </a>
</div>

<script>
function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    const icons = document.querySelectorAll('.dark-icon');
    icons.forEach(icon => {
        icon.textContent = isDark ? 'light_mode' : 'dark_mode';
    });
}
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
}
</script>

<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, err => {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
</script>
</body>
</html>
