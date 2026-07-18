---
name: Divine Heritage
colors:
  surface: '#fef9f1'
  surface-dim: '#ded9d2'
  surface-bright: '#fef9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3eb'
  surface-container: '#f2ede5'
  surface-container-high: '#ece8e0'
  surface-container-highest: '#e7e2da'
  on-surface: '#1d1c17'
  on-surface-variant: '#5a4137'
  inverse-surface: '#32302b'
  inverse-on-surface: '#f5f0e8'
  outline: '#8e7165'
  outline-variant: '#e3bfb1'
  surface-tint: '#a53d00'
  primary: '#a53d00'
  on-primary: '#ffffff'
  primary-container: '#ff6611'
  on-primary-container: '#571c00'
  inverse-primary: '#ffb597'
  secondary: '#795900'
  on-secondary: '#ffffff'
  secondary-container: '#ffc641'
  on-secondary-container: '#715300'
  tertiary: '#9d413e'
  on-tertiary: '#ffffff'
  tertiary-container: '#e37772'
  on-tertiary-container: '#5e1213'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcd'
  primary-fixed-dim: '#ffb597'
  on-primary-fixed: '#360f00'
  on-primary-fixed-variant: '#7e2c00'
  secondary-fixed: '#ffdfa0'
  secondary-fixed-dim: '#f6be39'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5c4300'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ae'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#7e2a29'
  background: '#fef9f1'
  on-background: '#1d1c17'
  surface-variant: '#e7e2da'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 56px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 36px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The brand personality is **Devotional Luxury**. It bridges the gap between ancient spiritual tradition and contemporary high-end hospitality. The target audience includes affluent pilgrims, heritage enthusiasts, and luxury travelers seeking a seamless, "boutique" experience of Ayodhya.

The design style is **Modern Indian Minimalisms** with **Glassmorphic** accents. It avoids the clutter often associated with religious platforms, opting instead for a serene, high-contrast aesthetic that feels both "divine" and "professional." The UI uses vast whitespace (Cream) to let Saffron and Gold accents communicate importance and sanctity. The emotional response should be one of deep peace, reliability, and exclusive access to the sacred.

## Colors

The palette is rooted in the sacred colors of Indian heritage, balanced by a neutral, paper-like base.

- **Saffron (#FF6611):** The primary brand driver. Used for active states, primary actions, and spiritual highlights. It represents the "energy" of the destination.
- **Gold (#D4A017):** Used for iconography, premium indicators (e.g., "Suite" or "Private Darshan"), and delicate borders. It adds the "luxury" layer.
- **Maroon (#6B1C1C):** Reserved for deep contrast—primarily footer backgrounds, high-level headers, or secondary buttons where grounding is needed.
- **Cream (#FDF8F0):** The canvas. This off-white provides a soft, organic feel that is less harsh than pure white, mimicking high-quality stationary.

## Typography

The typography system uses a classic Serif/Sans-Serif pairing. 

**Libre Caslon Text** (serving as the high-end alternative to Cormorant Garamond for better screen legibility at luxury weights) is used for all editorial headlines. It should be typeset with slightly tighter letter-spacing in large formats to create a "vogue" aesthetic.

**Inter** provides a functional, modern counterpoint. It is used for all body text, UI labels, and data points to ensure the "trustworthy" and "modern" pillars of the brand are maintained. Use Medium (500) or SemiBold (600) weights for labels to maintain hierarchy against the expressive headlines.

## Layout & Spacing

This design system utilizes a **Fixed Centered Grid** for desktop (12 columns) and a **Fluid Grid** for mobile (4 columns). 

The spacing philosophy is "Breathable." Significant vertical gaps (`section-gap`) are used between different travel packages or content blocks to prevent a "discount travel site" feel. 

On desktop, the navigation is a sticky **Glassmorphic** bar that sits 24px from the top of the viewport, giving the appearance of floating over the content. Margins are generous to focus the user's eye on the high-quality imagery of the temples and luxury interiors.

## Elevation & Depth

Depth is achieved through a combination of **Glassmorphism** and **Ambient Shadows**:

1.  **Level 0 (Base):** The Cream background.
2.  **Level 1 (Cards):** Cards use a white background with a very soft, large-radius shadow tinted with Saffron (e.g., `rgba(255, 102, 17, 0.08)`). This makes cards appear to "glow" rather than just sit on the page.
3.  **Level 2 (Overlays/Nav):** The glass effect. A `backdrop-filter: blur(12px)` combined with a semi-transparent Cream fill. This is used for the sticky navigation and mobile menus.
4.  **Level 3 (Modals):** High-contrast Saffron or Gold borders (1px) are used on top of glass layers to define boundaries for high-intent actions like "Book Now."

## Shapes

The shape language is **Softly Structured**. 

A `rounded-md` (0.5rem) base is used for most UI elements like input fields and small cards to maintain a contemporary feel. For larger "Hero" cards or "Feature" sections, use `rounded-xl` (1.5rem). 

Buttons should utilize the "Rounded" setting, but for special "Spiritual Call to Actions" (e.g., *Request a Priest*), a pill-shape may be used to differentiate the service from standard commerce. Gold 1px strokes are encouraged on Saffron-filled shapes to add a metallic "frame" effect.

## Components

- **Buttons:** Primary buttons are Solid Saffron with White text. Secondary buttons are Outline Gold with Maroon text. Every button should have a subtle 0.3s transition on hover, increasing the shadow spread.
- **Cards:** Used for "Darshan Packages" or "Luxury Suites." They feature a full-bleed image at the top, followed by a 24px padded area for Caslon headlines. Accents should be a 4px Saffron left-border on the card body.
- **Navbar:** A floating glass element. The logo (Divine Heritage) sits on the left, with Inter-based navigation links in the center. A Saffron "Plan Your Visit" button sits on the right.
- **Inputs:** Clean, Cream-filled boxes with a Gold bottom-border only (minimalist style) that transitions to a full Saffron outline on focus.
- **Chips:** Used for tags like "Private Guide" or "VIP Access." These should be Maroon with Gold text to signify premium status.
- **Sticky Booking Bar:** On mobile, a sticky glass bar at the bottom containing the price and a "Reserve" button ensures the conversion path is always visible.