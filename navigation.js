(() => {
  const routes = {
    home: '/',
    heritage: '/ayodhya-sightseeing/',
    explore: '/ayodhya-sightseeing/',
    destinations: '/ayodhya-sightseeing/',
    darshan: '/ayodhya-tour-packages/',
    packages: '/ayodhya-tour-packages/',
    bookings: '/hotels-in-ayodhya/',
    stays: '/hotels-in-ayodhya/',
    hotels: '/hotels-in-ayodhya/',
    rooms: '/hotels-in-ayodhya/',
    luxury: '/hotels-in-ayodhya/',
    spiritual: '/ayodhya-local-guides/',
    guides: '/ayodhya-local-guides/',
    tourguides: '/ayodhya-local-guides/',
    'tour guides': '/ayodhya-local-guides/',
    guide: '/ayodhya-local-guides/',
    vehicles: '/ayodhya-taxi-service/',
    transport: '/ayodhya-taxi-service/',
    cars: '/ayodhya-taxi-service/',
    hostel: '/girls-hostel-ayodhya/',
    reviews: '/reviews/',
    contact: '/contact/'
  };

  const labels = {
    en: { home: 'Home', tours: 'Tours', guides: 'Guides', rooms: 'Rooms', contact: 'Contact' },
    hi: { home: '\u0939\u094b\u092e', tours: '\u091f\u0942\u0930', guides: '\u0917\u093e\u0907\u0921', rooms: '\u0930\u0942\u092e', contact: '\u0938\u0902\u092a\u0930\u094d\u0915' }
  };

  // --- SYNCHRONOUS THEME & LANG SETUP (Avoids FOUC) ---
  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.querySelectorAll('.site-theme-toggle').forEach((button) => {
      button.textContent = theme === 'dark' ? '\u2600' : '\u263e';
      button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
    localStorage.setItem('ayodhya-theme', theme);
  };

  const applyLanguage = (language) => {
    const copy = labels[language];
    document.documentElement.lang = language === 'hi' ? 'hi' : 'en';
    document.querySelectorAll('[data-nav-label]').forEach((element) => {
      element.textContent = copy[element.dataset.navLabel];
    });
    document.querySelectorAll('.site-language-select').forEach((select) => { select.value = language; });
    document.querySelectorAll('.site-lang-toggle').forEach((btn) => {
      btn.textContent = language === 'hi' ? 'EN' : 'HI';
      btn.setAttribute('aria-label', language === 'hi' ? 'Switch to English' : 'हिंदी में पढ़ें');
    });
    localStorage.setItem('ayodhya-language', language);
  };

  const detectedLang = window.location.pathname.includes('/blog/hi/') ? 'hi' : (localStorage.getItem('ayodhya-language') || 'en');
  applyTheme(localStorage.getItem('ayodhya-theme') || 'light');
  
  // Set lang attribute synchronously on html
  document.documentElement.lang = detectedLang === 'hi' ? 'hi' : 'en';
  // ----------------------------------------------------

  // --- DOM DEPENDENT SETUP ---
  document.addEventListener('DOMContentLoaded', () => {
    
    // Create styles for site controls and bottom nav
    const style = document.createElement('style');
    style.textContent = `
      html[data-theme="dark"] { color-scheme: dark; }
      html[data-theme="dark"] body { background: #18120e !important; color: #f8eee5 !important; }
      html[data-theme="dark"] .bg-background, html[data-theme="dark"] .bg-surface, html[data-theme="dark"] .bg-surface\\/90, html[data-theme="dark"] .bg-surface\\/80 { background-color: #211914 !important; }
      html[data-theme="dark"] .bg-surface-container-lowest, html[data-theme="dark"] .bg-surface-container-low, html[data-theme="dark"] .bg-surface-container, html[data-theme="dark"] .bg-surface-container-high, html[data-theme="dark"] .bg-surface-container-highest, html[data-theme="dark"] .bg-white { background-color: #2a1f18 !important; }
      html[data-theme="dark"] .text-on-surface, html[data-theme="dark"] .text-on-background { color: #f8eee5 !important; }
      html[data-theme="dark"] .text-on-surface-variant { color: #d9c9bc !important; }
      .site-controls { display: inline-flex; align-items: center; gap: 6px; margin-left: 12px; }
      .site-theme-toggle, .site-lang-toggle { border: 1px solid rgba(165, 61, 0, .3); border-radius: 999px; background: rgba(255, 255, 255, .72); color: #8b3b00; font: 600 12px Inter, sans-serif; height: 34px; padding: 0 10px; cursor: pointer; transition: all 0.2s ease; }
      .site-theme-toggle { width: 36px; padding: 0; font-size: 16px; }
      .site-lang-toggle { padding: 0 12px; font-size: 12px; letter-spacing: 0.05em; }
      .site-lang-toggle:hover, .site-theme-toggle:hover { background: rgba(255, 102, 17, 0.15); border-color: rgba(165, 61, 0, .5); }
      html[data-theme="dark"] .site-theme-toggle, html[data-theme="dark"] .site-lang-toggle { background: #34251d; color: #ffd8b8; border-color: #785237; }
      html[data-theme="dark"] .site-lang-toggle:hover, html[data-theme="dark"] .site-theme-toggle:hover { background: #4a3328; border-color: #9a6a4d; }
      .site-bottom-nav { position: fixed; z-index: 100; bottom: 14px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: space-around; width: min(680px, calc(100% - 24px)); padding: 9px 12px; border: 1px solid rgba(165, 61, 0, .18); border-radius: 18px; background: rgba(255, 250, 245, .94); box-shadow: 0 -4px 24px rgba(70, 37, 15, .14); backdrop-filter: blur(14px); }
      .site-bottom-nav a { display: flex; min-width: 68px; flex-direction: column; align-items: center; gap: 3px; color: #6f5b4c; font: 600 11px Inter, sans-serif; text-decoration: none; }
      .site-bottom-nav a:hover, .site-bottom-nav a[aria-current="page"] { color: #ad4700; }
      .site-bottom-nav .material-symbols-outlined { font-size: 23px; }
      body { padding-bottom: 96px !important; }
      html[data-theme="dark"] .site-bottom-nav { background: rgba(41, 29, 22, .95); border-color: #785237; box-shadow: 0 -4px 24px rgba(0, 0, 0, .35); }
      html[data-theme="dark"] .site-bottom-nav a { color: #dec8b7; }
      html[data-theme="dark"] .site-bottom-nav a:hover, html[data-theme="dark"] .site-bottom-nav a[aria-current="page"] { color: #ffb982; }
      @media (max-width: 640px) { .site-controls { gap: 4px; margin-left: 6px; } .site-language-select { width: 48px; padding: 0 5px; } .site-bottom-nav { bottom: 6px; width: calc(100% - 12px); border-radius: 14px; } .site-bottom-nav a { min-width: 46px; font-size: 10px; } }
    `;
    document.head.appendChild(style);

    const toggleBlogLanguage = () => {
      const path = window.location.pathname;
      const currentLang = localStorage.getItem('ayodhya-language') || 'en';
      const newLang = currentLang === 'hi' ? 'en' : 'hi';
      
      if (path.includes('/blog/')) {
        if (currentLang === 'en' && newLang === 'hi') {
          if (!path.includes('/blog/hi/')) {
            const newPath = path.replace('/blog/', '/blog/hi/');
            localStorage.setItem('ayodhya-language', newLang);
            window.location.assign(newPath);
            return;
          }
        } else if (currentLang === 'hi' && newLang === 'en') {
          if (path.includes('/blog/hi/')) {
            const newPath = path.replace('/blog/hi/', '/blog/');
            localStorage.setItem('ayodhya-language', newLang);
            window.location.assign(newPath);
            return;
          }
        }
      }
      applyLanguage(newLang);
    };

    



    const activeRoute = window.location.pathname;
    const bottomNav = document.createElement('nav');
    bottomNav.className = 'site-bottom-nav';
    bottomNav.setAttribute('aria-label', 'Primary navigation');
    bottomNav.innerHTML = `
      <a href="${routes.home}" data-route="${routes.home}"><span class="material-symbols-outlined">home</span><span data-nav-label="home">Home</span></a>
      <a href="${routes.packages}" data-route="${routes.packages}"><span class="material-symbols-outlined">map</span><span data-nav-label="tours">Tours</span></a>
      <a href="${routes.guides}" data-route="${routes.guides}"><span class="material-symbols-outlined">person_pin_circle</span><span data-nav-label="guides">Guides</span></a>
      <a href="${routes.hotels}" data-route="${routes.hotels}"><span class="material-symbols-outlined">hotel</span><span data-nav-label="rooms">Rooms</span></a>
      <a href="${routes.contact}" data-route="${routes.contact}"><span class="material-symbols-outlined">chat</span><span data-nav-label="contact">Contact</span></a>`;
    bottomNav.querySelectorAll('a').forEach((link) => {
      if (link.dataset.route === activeRoute) link.setAttribute('aria-current', 'page');
    });
    document.body.appendChild(bottomNav);

    const textFor = (element) => (element.textContent || '').replace(/\\s+/g, ' ').trim().toLowerCase();
    const routeFor = (element) => {
      const text = textFor(element);
      if (/book|plan your visit|reserve|select bed|select room/.test(text)) return routes.contact;
      return Object.entries(routes).find(([name]) => text === name || text.includes(name))?.[1];
    };

    document.addEventListener('click', (event) => {
      const element = event.target.closest('a, button');
      if (!element) return;
      
      if (element.tagName === 'A' && element.hasAttribute('href')) {
        const href = element.getAttribute('href');
        if (/^(http|https|mailto:|tel:)/i.test(href)) return;
        if (href !== '#' && !href.startsWith('/Build/')) {
          return; 
        }
      }

      const route = routeFor(element);
      if (!route) return;
      event.preventDefault();
      window.location.assign(route);
    });

    document.querySelectorAll('a[href="#"]').forEach((link) => {
      const route = routeFor(link);
      if (route) link.href = route;
    });

    // Run applyLanguage now that DOM is ready
    applyLanguage(detectedLang);
    // Apply theme again just to set button labels
    applyTheme(localStorage.getItem('ayodhya-theme') || 'light');
    
    // Register Service Worker for offline support
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(err => {
          console.log('ServiceWorker registration failed: ', err);
        });
      });
    }
  });

})();

