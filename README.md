<div align="center">

# 🛕 Ayodhya Mahakaal: Tours & Travels

**A Premium Digital Tourism & Pilgrimage Experience for the Eternal City of Lord Ram**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Mobile First](https://img.shields.io/badge/Mobile_First-UI-8A2BE2?style=for-the-badge&logo=apple&logoColor=white)](#)
[![Bilingual](https://img.shields.io/badge/Bilingual-EN_|_HI-00599C?style=for-the-badge)](#)

> *"Walk the sacred paths of devotion, explore centuries of heritage, and enjoy thoughtfully curated pilgrimages with premium hospitality. Let every visit become a cherished spiritual memory."*

</div>

---

## 1. Project Overview

**Ayodhya Mahakaal** is a modern, highly responsive, and optimized web platform designed to facilitate spiritual tourism in Ayodhya. The platform bridges the gap between pilgrims and premium travel services, offering seamless exploration of destinations, expert local guides, luxury stays, and curated tour packages.

### Key Features
* **Bilingual Interface (EN/HI):** One-click instant translation between English and Hindi using a custom-built, zero-dependency JavaScript dictionary traversal engine.
* **Adaptive Theme:** Deep integration of Light/Dark modes, featuring dynamically changing hero assets and ambient gradients that react to system preferences.
* **Mobile-First Excellence:** Crafted primarily for mobile users with bottom-floating navigation pills and touch-friendly UI components, gracefully expanding into a rich, full-width desktop experience.
* **Glassmorphism Aesthetic:** Extensive use of `backdrop-blur`, subtle borders, and semi-transparent surfaces to create a highly premium, modern interface.

---

## 2. Technical Architecture

The project follows a lightweight, client-heavy architecture focusing on extreme performance, SEO friendliness, and zero-dependency runtime without heavy frameworks like React or Angular.

### Frontend Stack
* **Structure:** Semantic HTML5 with component-driven file organization.
* **Styling:** Tailwind CSS for rapid, utility-first styling. Custom configuration for brand colors (Primary Orange/Brown variants, Surface depths).
* **Logic:** Vanilla JavaScript (ES6+).
* **Icons & Typography:** Google Material Symbols and modern web-safe fonts.

### Core Modules
1. **`translations.js` (Localization Engine)**
   * A lightweight, recursive DOM-traversal script that maps text nodes to a bilingual dictionary.
   * Instantly swaps text on the fly without page reloads, layout shifts, or third-party API dependencies.
   * Persists user language preference using `localStorage`.
   
2. **`navigation.js` (Routing & State)**
   * Manages active states of the bottom navigation and desktop headers based on the current URL path.
   * Handles scroll-based sticky header animations and responsive layout shifts.

3. **`server.js` (Local Dev Server)**
   * A minimalist Node.js HTTP server configured to properly serve static assets and handle MIME types (HTML, JS, CSS, PNG, JPG).

---

## 3. Directory Structure

```text
Ayodhya/
├── server.js                 # Development server
├── fix.js / fix_mobile.js    # Build/Refactor automation scripts
├── public/                   # Static assets (Images, SVGs)
│   ├── light herosection.png
│   └── dark hero section.png
└── Build/                    # Pages & Scripts
    ├── translations.js       # Core translation dictionary logic
    ├── navigation.js         # Core navigation logic
    ├── ayodhya_darshan_mobile_home/
    │   └── home.html
    ├── tour_guides_mobile/
    │   └── tour_guides_mobile.html
    ├── destinations_mobile/
    │   └── destinations_mobile.html
    ├── hotels_rooms_mobile/
    │   └── hotels_rooms_mobile.html
    └── tour_packages_mobile/
        └── tour_packages_mobile.html
```

---

## 4. UI/UX Philosophy

* **Color Palette:** Earthy, spiritual tones (Deep Saffron, Sandstone, Terracotta) that reflect the heritage of Ayodhya, contrasted with clean white/dark-surface backgrounds for readability.
* **Typography:** Large, readable display fonts for headers with generous line-heights, paired with highly legible body text.
* **Micro-interactions:** Subtle hover states, smooth transitions, and CSS shimmer effects on primary action buttons.

---

## 5. How to Run Locally

1. Clone the repository to your local machine.
2. Ensure you have [Node.js](https://nodejs.org/) installed.
3. Open a terminal in the root directory and start the server:
   ```bash
   node server.js
   ```
4. Open your browser and navigate to:
   ```text
   http://localhost:4173/Build/ayodhya_darshan_mobile_home/home.html
   ```

---
<div align="center">
  <i>Built with devotion and modern web technologies.</i>
</div>
