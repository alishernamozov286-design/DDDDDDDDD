// Responsive breakpoints
export const breakpoints = {
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1440
};

// Media queries
export const media = {
  xs: `@media (max-width: ${breakpoints.xs}px)`,
  sm: `@media (max-width: ${breakpoints.sm}px)`,
  md: `@media (max-width: ${breakpoints.md}px)`,
  lg: `@media (max-width: ${breakpoints.lg}px)`,
  xl: `@media (max-width: ${breakpoints.xl}px)`,
  custom: (width) => `@media (max-width: ${width}px)`,
  between: (min, max) => `@media (min-width: ${min}px) and (max-width: ${max}px)`
};

// Responsive grid system
export const grid = {
  container: {
    maxWidth: '1200px',
    padding: '0 20px',
    margin: '0 auto'
  },
  
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 -15px'
  },
  
  col: {
    padding: '0 15px'
  }
};

// Responsive typography
export const typography = {
  h1: {
    fontSize: {
      xs: '1.8rem',
      sm: '2.2rem',
      md: '2.5rem',
      lg: '3rem'
    }
  },
  
  h2: {
    fontSize: {
      xs: '1.5rem',
      sm: '1.8rem',
      md: '2rem',
      lg: '2.5rem'
    }
  },
  
  h3: {
    fontSize: {
      xs: '1.3rem',
      sm: '1.5rem',
      md: '1.7rem',
      lg: '2rem'
    }
  },
  
  body: {
    fontSize: {
      xs: '0.9rem',
      sm: '1rem',
      md: '1.1rem',
      lg: '1.2rem'
    }
  }
};

// Responsive spacing
export const spacing = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
  xxl: 64
};

export default {
  breakpoints,
  media,
  grid,
  typography,
  spacing
};