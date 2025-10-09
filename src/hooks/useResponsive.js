import { useState, useEffect } from 'react';

// Enhanced breakpoints for better responsive design
const breakpoints = {
  xs: 480,     // Small mobile devices
  sm: 768,     // Tablets and large mobile devices
  md: 1024,    // Small desktops and large tablets
  lg: 1200,    // Standard desktops
  xl: 1440,    // Large desktops
  xxl: 1920    // Extra large displays
};

// Enhanced hook to detect screen size and orientation
export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLargeDesktop, setIsLargeDesktop] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [orientation, setOrientation] = useState('landscape'); // 'portrait' or 'landscape'

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setWindowSize({
        width,
        height,
      });

      // Update device type
      setIsMobile(width <= breakpoints.sm);
      setIsTablet(width > breakpoints.sm && width <= breakpoints.md);
      setIsDesktop(width > breakpoints.md && width <= breakpoints.lg);
      setIsLargeDesktop(width > breakpoints.lg);
      setIsSmallMobile(width <= breakpoints.xs);
      
      // Update orientation
      setOrientation(height > width ? 'portrait' : 'landscape');
    }

    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Add orientation change listener for mobile devices
    window.addEventListener("orientationchange", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  // Helper functions for more granular control
  const isBreakpoint = (breakpoint) => {
    return windowSize.width <= breakpoints[breakpoint];
  };

  const isBetweenBreakpoints = (min, max) => {
    return windowSize.width > breakpoints[min] && windowSize.width <= breakpoints[max];
  };

  return {
    ...windowSize,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    isSmallMobile,
    orientation,
    breakpoints,
    isBreakpoint,
    isBetweenBreakpoints
  };
};

export default useResponsive;