(() => {
  const routes = {
    home: '/Build/ayodhya_darshan_mobile_home/home.html', heritage: '/Build/destinations_mobile/destinations_mobile.html',
    explore: '/Build/destinations_mobile/destinations_mobile.html', destinations: '/Build/destinations_mobile/destinations_mobile.html',
    darshan: '/Build/tour_packages_mobile/tour_packages_mobile.html', packages: '/Build/tour_packages_mobile/tour_packages_mobile.html',
    bookings: '/Build/hotels_rooms_mobile/hotels_rooms_mobile.html', stays: '/Build/hotels_rooms_mobile/hotels_rooms_mobile.html',
    hotels: '/Build/hotels_rooms_mobile/hotels_rooms_mobile.html', rooms: '/Build/hotels_rooms_mobile/hotels_rooms_mobile.html', luxury: '/Build/hotels_rooms_mobile/hotels_rooms_mobile.html',
    spiritual: '/Build/tour_guides_mobile/tour_guides_mobile.html', guides: '/Build/tour_guides_mobile/tour_guides_mobile.html', guide: '/Build/tour_guides_mobile/tour_guides_mobile.html',
    vehicles: '/Build/car_rental_mobile/carrental.html', transport: '/Build/car_rental_mobile/carrental.html', cars: '/Build/car_rental_mobile/carrental.html',
    hostel: '/Build/girls_hostel_mobile/girls-hostel-mobile.html', reviews: '/Build/reviews_mobile/reviews_mobile.html', contact: '/Build/contact_mobile/contact-mobile.html'
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
