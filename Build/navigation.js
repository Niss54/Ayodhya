(() => {
  const routes = {
    home: '/Build/ayodhya_darshan_mobile_home/code.html', heritage: '/Build/destinations_mobile/code.html',
    explore: '/Build/destinations_mobile/code.html', destinations: '/Build/destinations_mobile/code.html',
    darshan: '/Build/tour_packages_mobile/code.html', packages: '/Build/tour_packages_mobile/code.html',
    bookings: '/Build/hotels_rooms_mobile/code.html', stays: '/Build/hotels_rooms_mobile/code.html',
    hotels: '/Build/hotels_rooms_mobile/code.html', rooms: '/Build/hotels_rooms_mobile/code.html', luxury: '/Build/hotels_rooms_mobile/code.html',
    spiritual: '/Build/tour_guides_mobile/code.html', guides: '/Build/tour_guides_mobile/code.html', guide: '/Build/tour_guides_mobile/code.html',
    vehicles: '/Build/car_rental_mobile/code.html', transport: '/Build/car_rental_mobile/code.html', cars: '/Build/car_rental_mobile/code.html',
    hostel: '/Build/girls_hostel_mobile/code.html', reviews: '/Build/reviews_mobile/code.html', contact: '/Build/contact_mobile/code.html'
  };

  const textFor = (element) => (element.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
  const routeFor = (element) => {
    const text = textFor(element);
    if (/book|plan your visit|reserve|select bed|select room/.test(text)) return routes.contact;
    return Object.entries(routes).find(([name]) => text === name || text.includes(name))?.[1];
  };

  document.addEventListener('click', (event) => {
    const element = event.target.closest('a, button');
    const route = element && routeFor(element);
    if (!route) return;
    event.preventDefault();
    window.location.assign(route);
  });

  document.querySelectorAll('a[href="#"]').forEach((link) => {
    const route = routeFor(link);
    if (route) link.href = route;
  });
})();
