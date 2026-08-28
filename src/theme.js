// =============================================================
// Design tokens — Supergreen brand
// Pixel-extracted from Supergreen's official Jan 2026 nutritional PDF
// =============================================================

export const C = {
  // Hero brand triad
  darkGreen:  '#003820',   // headers, sticky bar, primary structure
  paleGreen:  '#DDE5CC',   // app background
  gold:       '#F2BC1A',   // accent, calorie totals, success

  // Brand supports (all green-derived)
  midGreen:   '#386850',   // secondary text & icons
  lightSage:  '#EBEFDC',   // default card surface
  deepSage:   '#BCC8A6',   // borders, dividers, inactive
  paleOnDark: '#C8D4B8',   // text on dark green

  // Neutrals
  white:      '#FFFFFF',
  darkText:   '#1A2818',

  // Indicator — terracotta complements green without clashing
  extra:      '#D85F3D',
  extraSoft:  '#E88468',
};

// Macro identity: each macro has a colour + label, with on-light and on-dark variants
export const MACROS = {
  carbs:   { label: 'Carbs',   onLight: '#C89010', onDark: '#F2BC1A', dot: '#F2BC1A' },
  fat:     { label: 'Fat',     onLight: '#5A6B45', onDark: '#B8C49E', dot: '#7A8B60' },
  protein: { label: 'Protein', onLight: '#003820', onDark: '#9CC4A8', dot: '#386850' },
};

export const FONT_SERIF = "'Libre Baskerville', serif";
export const FONT_SANS  = "'DM Sans', sans-serif";
