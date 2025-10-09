import { useState, useEffect } from 'react';

/**
 * Custom hook to detect screen size breakpoints
 * @param {string} query - CSS media query string
 * @returns {boolean} - Whether the query matches
 */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

/**
 * Custom hook to detect common screen size breakpoints
 * @returns {Object} - Object containing breakpoint matches
 */
export const useBreakpoints = () => {
  const isXs = useMediaQuery('(max-width: 575px)');
  const isSm = useMediaQuery('(min-width: 576px) and (max-width: 767px)');
  const isMd = useMediaQuery('(min-width: 768px) and (max-width: 991px)');
  const isLg = useMediaQuery('(min-width: 992px) and (max-width: 1199px)');
  const isXl = useMediaQuery('(min-width: 1200px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  return {
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    isTablet,
    isDesktop,
    isMobile,
    isSmDown: useMediaQuery('(max-width: 767px)'),
    isMdDown: useMediaQuery('(max-width: 991px)'),
    isLgDown: useMediaQuery('(max-width: 1199px)'),
    isSmUp: useMediaQuery('(min-width: 576px)'),
    isMdUp: useMediaQuery('(min-width: 768px)'),
    isLgUp: useMediaQuery('(min-width: 992px)'),
    isXlUp: useMediaQuery('(min-width: 1200px)')
  };
};

export default useMediaQuery;