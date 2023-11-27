import { useState, useEffect } from 'react';

function useResponsiveWindow() {
    const isSSR = typeof window === 'undefined';
  const [isMobile, setIsMobile] = useState(isSSR ? false : window.innerWidth <= 768);

  useEffect(() => {
    if (!isSSR) {
      function handleResize() {
        setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed.
      }

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isSSR]);

  return isMobile;
}

export default useResponsiveWindow;
