/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.html", "./**/*.js"],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
  theme: {
    extend: {
      colors: {
        "surface-variant": "#e7e2da",
        "on-primary-fixed-variant": "#7e2c00",
        "secondary": "#795900",
        "error": "#ba1a1a",
        "tertiary": "#9d413e",
        "surface-dim": "#ded9d2",
        "primary-fixed-dim": "#ffb597",
        "tertiary-container": "#e37772",
        "surface-container-lowest": "#ffffff",
        "on-secondary-fixed-variant": "#5c4300",
        "on-tertiary": "#ffffff",
        "surface-container-highest": "#e7e2da",
        "surface-container-high": "#ece8e0",
        "secondary-container": "#ffc641",
        "on-secondary": "#ffffff",
        "on-error-container": "#93000a",
        "surface-bright": "#fef9f1",
        "on-primary-fixed": "#360f00",
        "secondary-fixed-dim": "#f6be39",
        "error-container": "#ffdad6",
        "inverse-on-surface": "#f5f0e8",
        "outline-variant": "#e3bfb1",
        "inverse-primary": "#ffb597",
        "on-primary": "#ffffff",
        "inverse-surface": "#32302b",
        "tertiary-fixed-dim": "#ffb3ae",
        "secondary-fixed": "#ffdfa0",
        "on-tertiary-container": "#5e1213",
        "on-surface": "#1d1c17",
        "on-tertiary-fixed-variant": "#7e2a29",
        "primary-fixed": "#ffdbcd",
        "surface": "#fef9f1",
        "on-surface-variant": "#5a4137",
        "surface-tint": "#a53d00",
        "outline": "#8e7165",
        "on-secondary-fixed": "#261a00",
        "surface-container-low": "#f8f3eb",
        "primary": "#a53d00",
        "on-error": "#ffffff",
        "surface-container": "#f2ede5",
        "on-primary-container": "#571c00",
        "background": "#fef9f1",
        "on-secondary-container": "#715300",
        "on-tertiary-fixed": "#410004",
        "tertiary-fixed": "#ffdad7",
        "on-background": "#1d1c17",
        "primary-container": "#ff6611"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "section-gap": "120px",
        "margin-mobile": "20px",
        "gutter": "24px",
        "container-max": "1280px",
        "unit": "8px",
        "margin-desktop": "64px",
        "safe": "env(safe-area-inset-bottom)"
      },
      fontFamily: {
        "display-lg": ["Libre Caslon Text"],
        "body-md": ["Inter"],
        "headline-md": ["Libre Caslon Text"],
        "label-caps": ["Inter"],
        "headline-sm": ["Libre Caslon Text"],
        "body-lg": ["Inter"],
        "display-lg-mobile": ["Libre Caslon Text"]
      },
      fontSize: {
        "display-lg": ["56px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1.2", letterSpacing: "0.1em", fontWeight: "600" }],
        "headline-sm": ["24px", { lineHeight: "1.4", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "display-lg-mobile": ["36px", { lineHeight: "1.2", fontWeight: "400" }]
      }
    }
  }
}
