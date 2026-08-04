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
        "surface-variant": "var(--color-surface-variant)",
        "on-primary-fixed-variant": "var(--color-on-primary-fixed-variant)",
        "secondary": "var(--color-secondary)",
        "error": "var(--color-error)",
        "tertiary": "var(--color-tertiary)",
        "surface-dim": "var(--color-surface-dim)",
        "primary-fixed-dim": "var(--color-primary-fixed-dim)",
        "tertiary-container": "var(--color-tertiary-container)",
        "surface-container-lowest": "var(--color-surface-container-lowest)",
        "on-secondary-fixed-variant": "var(--color-on-secondary-fixed-variant)",
        "on-tertiary": "var(--color-on-tertiary)",
        "surface-container-highest": "var(--color-surface-container-highest)",
        "surface-container-high": "var(--color-surface-container-high)",
        "secondary-container": "var(--color-secondary-container)",
        "on-secondary": "var(--color-on-secondary)",
        "on-error-container": "var(--color-on-error-container)",
        "surface-bright": "var(--color-surface-bright)",
        "on-primary-fixed": "var(--color-on-primary-fixed)",
        "secondary-fixed-dim": "var(--color-secondary-fixed-dim)",
        "error-container": "var(--color-error-container)",
        "inverse-on-surface": "var(--color-inverse-on-surface)",
        "outline-variant": "var(--color-outline-variant)",
        "inverse-primary": "var(--color-inverse-primary)",
        "on-primary": "var(--color-on-primary)",
        "inverse-surface": "var(--color-inverse-surface)",
        "tertiary-fixed-dim": "var(--color-tertiary-fixed-dim)",
        "secondary-fixed": "var(--color-secondary-fixed)",
        "on-tertiary-container": "var(--color-on-tertiary-container)",
        "on-surface": "var(--color-on-surface)",
        "on-tertiary-fixed-variant": "var(--color-on-tertiary-fixed-variant)",
        "primary-fixed": "var(--color-primary-fixed)",
        "surface": "var(--color-surface)",
        "on-surface-variant": "var(--color-on-surface-variant)",
        "surface-tint": "var(--color-surface-tint)",
        "outline": "var(--color-outline)",
        "on-secondary-fixed": "var(--color-on-secondary-fixed)",
        "surface-container-low": "var(--color-surface-container-low)",
        "primary": "var(--color-primary)",
        "on-error": "var(--color-on-error)",
        "surface-container": "var(--color-surface-container)",
        "on-primary-container": "var(--color-on-primary-container)",
        "background": "var(--color-background)",
        "on-secondary-container": "var(--color-on-secondary-container)",
        "on-tertiary-fixed": "var(--color-on-tertiary-fixed)",
        "tertiary-fixed": "var(--color-tertiary-fixed)",
        "on-background": "var(--color-on-background)",
        "primary-container": "var(--color-primary-container)"
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
